var myCanvas;
var img;

function preload() {
  img = loadImage("Tiger.jpg");
}

function setup() { // setup() waits until preload() is done
  pixelDensity(1);
  myCanvas = createCanvas(400, 400);
  myCanvas.parent('canvasContainer');
  img.resize(width, height);
  image(img, 0, 0);
}

function draw() {

}

function flipPixH() {
  loadPixels();
  var h = img.height, w = img.width;
  for (var y = 0; y < h/2; y++) {
    for (var x = 0; x < w; x++) {
      copyPix(x,y,x,h-y-1);
    } //swap color information for each pixel

  }
  updatePixels();
}

//copies pixel info from origin(x,y) -> dest(x,y)
function copyPix(originX,originY,destX,destY) {
  var origin = (originY * img.width + originX) * 4; //convert to 1D pixels index
  var dest = (destY * img.width + destX) * 4;//convert to 1D pixels index
  pixels[dest] = pixels[origin];
  pixels[dest+1] = pixels[origin+1];
  pixels[dest+2] = pixels[origin+2];
  pixels[dest+3] = pixels[origin+3];
}

function keyPressed() {
  flipPixH();
  return false;
}
