var x = 0;
var y = 0;
var buffer;
var count = 1;
var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;

var r1, g1, b1;
var r2, g2, b2;
var color1;
var color2;
var colorSelected;
var mPixColor;

var fileCount = 1;
var fileType;


var mode = "";
var backColor = 255;
function setup() {
  frameRate(10000);
  createCanvas(windowWidth, windowHeight - 200);
  background(255);
  color1 = color(0, 255, 0);
  color2 = color(255, 0, 0);
  colorSelected = color1;
}


function makePencil(){mode = "pencil";}
function makePaint(){mode = "paintbrush";}
function makeEraser(){mode = "eraser";}
function makeSpray(){ mode = "sprayCan";}
function makeMarker(){ mode = "marker";}
function makeLine(){mode = "line";}
function makeRectangle(){mode = "rectangle";}
function makeDropper(){mode = "dropper";}
function setColor1(){colorSelected = color1};
function setColor2(){colorSelected = color2};

function saveImg(fileType){
    save("drawing" + fileCount + "." + fileType);
    fileCount++;
}
function draw() {

stroke(colorSelected);
fill(colorSelected); //yes? no?

        switch(mode){
            case "pencil":
                if (mouseIsPressed){
                  fill(colorSelected);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0)
                    point(mouseX, mouseY);}
                break;

            case "marker":
                if (mouseIsPressed){
                    strokeWeight(10);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0)
                    point(mouseX, mouseY);}
                break;

            case "paintbrush":
                if (mouseIsPressed){
                    for(var i =10; i>00; i--){
                        strokeCap(ROUND);
                        line(pmouseX, pmouseY, mouseX, mouseY);
                        strokeWeight(3*i);
                        stroke(0,0,0,35);
                        strokeCap(SQUARE);
                        line(pmouseX, pmouseY, mouseX, mouseY);}
                }
                break;

            case "eraser":
                if (mouseIsPressed){
                    strokeWeight(50);
                    stroke(backColor);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
                        point(mouseX, mouseY);}
                }
                stroke(255, 0, 0);
                break;

            case "sprayCan":
                strokeWeight(1);
                if (mouseIsPressed){
                    for (var h = 0; h < 100; h++) {
                        var x = randomGaussian(mouseX,15);
                        var y = randomGaussian(mouseY,15);
                        for(var i = 0; i<20; i++){
                            point(x, y);
                        }
                    }
                    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
                        point(mouseX, mouseY);
                    }
                }
                break;

            case "line":
              pixels = buffer;
              updatePixels();
              if (count % 2 == 0) {
                  line(startx, starty, endx, endy);
              }
              if (count % 2 == 1) {
                  line(startx, starty, mouseX, mouseY);
              }
              break;
            case "rectangle":
              pixels = buffer;
              updatePixels();
              if (count % 2 == 0) {
                  rect(startx, starty, endx-startx, endy-starty);
              }
              if (count % 2 == 1) {
                  rect(startx, starty, mouseX-startx, mouseY-starty);
              }
              break;
            case "dropper":   //just makes it black (no matter what)
              loadPixels();
              console.log(mouseX, mouseY)
              console.log(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 2])
              //fill(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 2]);
              fill(0);
              rect(50, 50, 20, 20);
              updatePixels();
              break;

        }
}

function updateBuffer() {
  loadPixels();
  buffer = pixels;
}

function mouseClicked() {
  count++;
  if (count % 2 == 1) {
    startx = mouseX;
    starty = mouseY;
  }
  if (count % 2 == 0) {
    endx = mouseX;
    endy = mouseY;
  }
  updateBuffer();
}
