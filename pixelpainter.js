var x = 0;
var y = 0;
var mode = "none";
var backColor = 255;
function setup() {
  frameRate(10000);
  createCanvas(windowWidth, windowHeight - 200);
  fill(255, 0, 0);
  stroke(255,0,0);
  background(255);
}

var $slider = $("#slider");
if ($slider.length > 0) {
  $slider.slider({
    min: 1,
    max: 5,
    value: 3,
    orientation: "horizontal",
    range: "min"
  }).addSliderSegments($slider.slider("option").max);
}



function makePencil(){
    mode = "pencil";
    
}
function makePaint(){
    mode = "paintbrush";
}
function makeEraser(){
    mode = "eraser";
}
function makeSpray(){
    mode = "sprayCan";
}
function makeMarker(){
    mode = "marker";
}
function makeLine(){
    mode = "line";
}

//var spraycanButton = document.getElementById("spraycan");
//var paintbrushButton = document.getElementById("paintbrush");
//var markerButton = document.getElementById("marker");
//var eraserButton = document.getElementById("eraser");
//var spraycanButton = document.getElementById("spraycan");


function draw() {

    if(mode=="pencil"){
       
    if (mouseIsPressed){
      line(pmouseX, pmouseY, mouseX, mouseY);
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
     point(mouseX, mouseY);   
    }
    }
    }
    if(mode=="marker"){
    if (mouseIsPressed){
        strokeWeight(10);
      line(pmouseX, pmouseY, mouseX, mouseY);
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
       point(mouseX, mouseY);   
    }
    }
    }
    if(mode=="paintbrush"){
    if (mouseIsPressed){
        for(var i =10; i>00; i--){
            stroke(255,0,0,35);
        strokeCap(ROUND);
        line(pmouseX, pmouseY, mouseX, mouseY);
        strokeWeight(3*i);
            stroke(255,0,0,35);
        strokeCap(SQUARE);
      line(pmouseX, pmouseY, mouseX, mouseY);
        }
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
       //ellipse(mouseX, mouseY, 15, 15);   
    }
    }
    }
    if(mode=="eraser"){
    if (mouseIsPressed){
        strokeWeight(50);
        stroke(backColor);
        line(pmouseX, pmouseY, mouseX, mouseY);
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
       point(mouseX, mouseY);   
    }
    }
        stroke(255, 0, 0);
    }
    if(mode=="sprayCan"){
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
    }
    if(mode=="line"){
        strokeWeight(5); 
    if (mouseClicked){
        var x =pmouseX;
        var y =pmouseY;
        line(x, y, mouseX, mouseY);
    }
    }
}
