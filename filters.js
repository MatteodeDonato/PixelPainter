var myCanvas;
var img;

//copies pixel info from origin(x,y) -> dest(x,y)
function copyPix(originX, originY, destX, destY) {
    var origin = (originY * canvas.width + originX) * 4; //convert to 1D pixels index
    var dest = (destY * width + destX) * 4; //convert to 1D pixels index
    pixels[dest] = pixels[origin];
    pixels[dest + 1] = pixels[origin + 1];
    pixels[dest + 2] = pixels[origin + 2];
    pixels[dest + 3] = pixels[origin + 3];
}


function filter2() {
    loadPixels();
    var m = map(p1, 1, 100, .5, 1);
    var n = map(p2, 1, 100, 1, 2);
    for(var z = 0; z < n; z++){
    for (var x = 1; x < canvas.width; x+=m) {
        for (var y = 0; y < canvas.height - 600; y+=1) {
            var origin = (y * canvas.width + x) * 8; //convert to 1D pixels index
            var dest = (y * width + x) * 8; //convert to 1D pixels index
            pixels[dest] = pixels[origin + 1];
            pixels[dest + 1] = pixels[origin + 2];
            pixels[dest + 2] = pixels[origin];
            pixels[dest + 3] = 255;
        }
    }
    }
    updatePixels();
}


function speckleDark() {
    loadPixels();
    var contrast = map(p2, 1, 100, 1, 5);
    for(var j = 0; j < contrast; j++){
    for (var i = 0; i < width * 8 * (height - 600); i+=1) {
        if (pixels[i] != 255)
            pixels[i] = pixels[i] / noise(pixels[i]);


    }
    }
    updatePixels();

}

function speckleLight() {

    loadPixels();
    var contrast = map(p2, 1, 100, 1, 5);
    for(var j = 0; j < contrast; j++){
    for (var i = 0; i < width * 8 * (height - 600); i+=1) {
        if (pixels[i] != 255)
            pixels[i] = pixels[i] * noise(pixels[i]);

    }
    }
    updatePixels();

}

function speckle(){
  var mode = map(p1, 1, 100, 1, 2);
  if(mode == 1) speckleDark();
  else if(mode == 2) speckleLight()

}


function psychedelic(){
  loadPixels();
var row = 4 * img.width;
for (var j = 1; j <= img.height - 400; j++) { //j is the row
  var currentRow = row * j; //which row are we on?

  for (var i = 0; i < row; i += 4) { //i is the column
    pixels[currentRow + row - i] = pixels[currentRow + row - i]; //r
    pixels[currentRow + row - i + 1] = pixels[currentRow + row - i + p1]; //g
    pixels[currentRow + row - i + 2] = pixels[currentRow + row - i + p2+1]; //b
    pixels[currentRow + row - i + 3] = pixels[currentRow + row - i + 16];//+f/10]; //a
  } //swap color information for each pixel
}
updatePixels();
}

function flipH() {
  loadPixels();
  var rowLength = 4 * img.width;//How many total spots in the pixels array
                          //indicates a new row in the image?
  //go through half of the pixels
  for (var y = 1; y <= (img.height-400)/2; y++) {
    //y controls the corresponding rows to be switched
    var topRow = rowLength * (y - 1); //1st row, 2nd row,... down to middle row
    var bottomRow = rowLength * ((img.height-400) - y); //last row, 2nd to last,... up to middle row

    for (var x = 0; x < rowLength; x += 4) {
    //x is the column, moving left to right
      pixels[bottomRow + x] = pixels[topRow + x]; //r
      pixels[bottomRow + x + 1] = pixels[topRow + x + 1];//g
      pixels[bottomRow + x + 2] = pixels[topRow + x + 2];//b
      //pixels[bottomRow + x + 3] = pixels[topRow + x + 3];//a
    }//swap color information for each pixel

  }

  updatePixels();
}

function flipV() {
  loadPixels();
  var row = 4 * img.width; //How many total spots in the pixels array
  //indicates a new row in the image?

  //go through half of the pixels
  for (var j = 1; j <= img.height-400; j++) { //j is the row
    var currentRow = row * j; //which row are we on?

    for (var i = 0; i < row; i += 4) { //i is the column
      pixels[currentRow+row - i] = pixels[currentRow + i]; //r
      pixels[currentRow+row - i + 1] = pixels[currentRow + i + 1]; //g
      pixels[currentRow+row - i + 2] = pixels[currentRow + i + 2]; //b
      //pixels[bottomPixel + i + 3] = 255;//a
    } //swap color information for each pixel

  }

  updatePixels();
}

function brokenTV(){
  if(p1<25){
    flipH();
  }
  if(p1>75){
    flipV();
  }
  if(p1>=25&&p1<=75){
    flipV();
    flipH();
  }
  loadPixels();
  for (var i = 0; i < width * 4 * (height-400); i+=1) {
    pixels[i] = pixels[i+parseInt(p2/10)] * noise(pixels[i+parseInt(p2)]);
  }
  updatePixels();
}
function flipPixH() {
    loadPixels();
    var d = pixelDensity();
    var h = canvas.height * d,
        w = canvas.width * d;
    for (var y = 0; y < (h - 1000) / 2; y++) { //CHANGE "1000" to A BETTER VALUE!!!!
        for (var x = 0; x < w; x++) {
            copyPix(x, y, x, h - y - 1);
        } //swap color information for each pixel

    }
    updatePixels();
}

function flipPixV() {
    loadPixels();
    var d = pixelDensity();
    var h = canvas.height,
        w = canvas.width;
    for (var x = 0; x < w / 2 * d; x++) {
        for (var y = 0; y < h - 1000; y++) { //CHANGE "1000" to A BETTER VALUE!!!!
            copyPix(x, y, w - x - 1, y);
        }
    }
    updatePixels();
}


//copies pixel info from origin(x,y) -> dest(x,y)
function copyPix(originX, originY, destX, destY) {
    var origin = (originY * canvas.width + originX) * 4; //convert to 1D pixels index
    var dest = (destY * width + destX) * 4; //convert to 1D pixels index
    pixels[dest] = pixels[origin];
    pixels[dest + 1] = pixels[origin + 1];
    pixels[dest + 2] = pixels[origin + 2];
    pixels[dest + 3] = pixels[origin + 3];
}

function quad() {
    flipPixV();
    flipPixH();
}
