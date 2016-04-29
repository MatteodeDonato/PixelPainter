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

function tinge(p) {
    loadPixels();
    var m = .5;
    for(var z = 0; z < p; z++){
    for (var x = 0; x < canvas.width; x+=m) {
        for (var y = 0; y < canvas.height - 300; y+=m) {
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

function speckleLight(p2) {
    loadPixels();
    console.log(pixels);
    for (var i = 0; i < width * 8 * (height - 600); i++) {
        if (pixels[i] != 255)
            pixels[i] = pixels[i] * noise(pixels[i]) * 1;


    }
    updatePixels();

}


function speckleDark(p2) {
  console.log("SPECKLE DARK");
    loadPixels();
    var contrast = map(p2, 1, 100, .1, 1);
    
    //console.log(pixels);
    for (var i = 0; i < width * 8 * (height - 300); i+=3) {
        if (pixels[i] != 255)
            pixels[i] = pixels[i] / noise(pixels[i]) * contrast;


    }
    updatePixels();

}

function speckleLight(p2) {
    console.log("SPECKLE LIGHT");
    loadPixels();
    var contrast = map(p2, 1, 100, .1, 1)
    //console.log(pixels);
    for (var i = 0; i < width * 8 * (height - 300); i++) {
        if (pixels[i] != 255)
            pixels[i] = pixels[i] * noise(pixels[i]) * contrast; 


    }
    updatePixels();

}

function speckle(p1, p2){

  if(p1 == 1) speckleDark(p2);
  else if(p1 == 2) speckleLight(p2)

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
  speckle(1, 100)
  return false;
}