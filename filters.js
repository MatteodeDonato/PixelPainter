var myCanvas;
var img;
var pixels2 = [];


function coolFilterThing() {
  loadPixels();
  var row = 4 * img.width;//How many total spots in the pixels array
                          //indicates a new row in the image

  //go through half of the pixels
  for (var j = 1; j <= img.height; j++) {//j is the row
    var topPixel = row * (j - 1); //which row are we on?
    var bottomPixel = row * (img.height - j);

    for (var i = 0; i < row; i += 4) { //i is the column
      pixels[bottomPixel] = pixels[topPixel + i]; //r
      pixels[bottomPixel + i + 1] = pixels[topPixel + i + 1];//g
      pixels[bottomPixel + i + 2] = pixels[topPixel + i + 2];//b
      //pixels[bottomPixel + i + 3] = 255;//a

    }//swap color information for each pixel

  }

  updatePixels();
}



//copies pixel info from origin(x,y) -> dest(x,y)
function copyPix(originX,originY,destX,destY) {
  var origin = (originY * canvas.width + originX) * 4; //convert to 1D pixels index
  var dest = (destY * width + destX) * 4;//convert to 1D pixels index
  pixels[dest] = pixels[origin];
  pixels[dest+1] = pixels[origin+1];
  pixels[dest+2] = pixels[origin+2];
  pixels[dest+3] = pixels[origin+3];
}


function swapFilter(){
  loadPixels();
  //var origin = (originY * canvas.width + originX) * 4; //convert to 1D pixels index
  for(var x = 0; x < canvas.width; x++){
    for(var y = 0; y < canvas.height; y++){
      copyPix(x, y, x * 2 + 5, y * 2 + 5);

    }

  }
  updatePixels();


}

function filter2(){
  loadPixels();
  for(var x = 0; x < canvas.width * .5; x++){
  for(var y = 0; y < canvas.height; y++){
  var origin = (y * canvas.width + x) * 8; //convert to 1D pixels index
  var dest = (y * width + x) * 4;//convert to 1D pixels index
  pixels[dest] = pixels[origin + 1];
  pixels[dest+1] = pixels[origin+2];
  pixels[dest+2] = pixels[origin];
  pixels[dest+3] = 255;
}
}
updatePixels();
}


function filter3(){
  loadPixels();
  for(var x = 0; x < canvas.width * .5; x++){
  for(var y = 0; y < canvas.height; y++){
  var origin = (y * canvas.width + x) * 8; //convert to 1D pixels index
  var dest = (y * canvas.width + x) * 4;//convert to 1D pixels index
  pixels[dest] = pixels[origin + 1];
  pixels[dest+1] = pixels[origin+2];
  pixels[dest+2] = pixels[origin];
  pixels[dest+3] = pixels[origin + 3];
}
}
updatePixels();
}



function filter4(){
  loadPixels();
  for(var x = 0; x < canvas.width * .5; x++){
  for(var y = 0; y < canvas.height; y++){
  var origin = (y * canvas.width + x) * 4; //convert to 1D pixels index
  var dest = (y * width + x) * 8;//convert to 1D pixels index
  pixels[dest] = pixels[origin + 3];
  pixels[dest+1] = pixels[origin+2];
  pixels[dest+2] = pixels[origin + 1];
  pixels[dest+3] = 255;
}
}
updatePixels();
}



function swapVals(){
  loadPixels();
  arrayCopy(pixels, pixels2);
  for(var i = 0; i < pixels.length; i++)
  pixels[i] = pixels2[pixels.length - i];
  updatePixels();
}

function speckleLight(){
  loadPixels();
  console.log(pixels);
  for(var i = 0; i < pixels.length; i++){

    pixels[i] = pixels[i] / noise(pixels[i]);


  }
  updatePixels();

}

function speckleDark(){
  loadPixels();
  console.log(pixels);
  for(var i = 0; i < pixels.length; i++){

    pixels[i] = pixels[i] * noise(pixels[i]);


  }
  updatePixels();

}

function flipPixH() {
  loadPixels();
  var d = pixelDensity();
  var h = canvas.height * d, w = canvas.width * d;
  for (var y = 0; y < h/2; y++) {
    for (var x = 0; x < w; x++) {
      copyPix(x,y,x,h-y-1);
    } //swap color information for each pixel

  }
  updatePixels();
}

function flipPixV(){
  loadPixels();
  var d = pixelDensity();
  var h = canvas.height, w = canvas.width;
  for (var x = 0; x < w/2 * d; x++){
    for ( var y = 0; y < h; y++){
      copyPix(x, y, w - x - 1, y);
    }
  }
  updatePixels();
}


//copies pixel info from origin(x,y) -> dest(x,y)
function copyPix(originX,originY,destX,destY) {
  var origin = (originY * canvas.width + originX) * 4; //convert to 1D pixels index
  var dest = (destY * width + destX) * 4;//convert to 1D pixels index
  pixels[dest] = pixels[origin];
  pixels[dest+1] = pixels[origin+1];
  pixels[dest+2] = pixels[origin+2];
  pixels[dest+3] = pixels[origin+3];
}

function quad(){
 flipPixV();
 flipPixH();
}


function keyPressed() {
  filter3();
  return false;
}