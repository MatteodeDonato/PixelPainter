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
        for (var y = 0; y < canvas.height - 300; y+=1) {
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
    for (var i = 0; i < width * 8 * (height - 300); i+=1) {
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
    for (var i = 0; i < width * 8 * (height - 300); i+=1) {
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



function brokenTV() {
  loadPixels();
  for (var i = 0; i < width * 4 * height; i+=f/10) {
    pixels[i] = pixels[i] * noise(pixels[i]);
  }
  updatePixels();

}

function silver() {
  loadPixels();
  var row = 4 * img.width; //How many total spots in the pixels array
  //indicates a new row in the image?

  //go through half of the pixels
  for (var j = 1; j <= img.height; j++) { //j is the row
    var currentRow = row * j; //which row are we on?

    for (var i = 0; i < row; i += 4) { //i is the column
      pixels[currentRow + row - i] = pixels[currentRow + row - i]; //r
      pixels[currentRow + row - i + 1] = pixels[currentRow + row - i + 1]; //g
      pixels[currentRow + row - i + 2] = pixels[currentRow + row - i + 2]; //b
      pixels[currentRow + row - i + 3] = pixels[currentRow + row - i + 16+f/10]; //a
    } //swap color information for each pixel
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
