// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Example 1-1: stroke and fill
var x = 0;
var y = 0;
var pencilSelected = 0;
var markerSelected = 0;
function setup() {
  frameRate(10000);
  createCanvas(960, 540);
  fill(0, 255, 0);
  stroke(255,0,0);
  background(255);
}
function mouseClicked(){
    if(dist(mouseX, mouseY, 50, 50)<=25){
        if(pencilSelected==0){
            pencilSelected = 1;
            markerSelected= 0;
        }
    }
    if(dist(mouseX, mouseY, 50, 150)<=25){
        if(markerSelected==0){
            pencilSelected = 0;
            markerSelected= 1;
        }
    }
}
function draw() {
    if(pencilSelected==1){
    if (mouseIsPressed){
      line(pmouseX, pmouseY, mouseX, mouseY);
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
     point(mouseX, mouseY);   
    }
    }
    }
    if(markerSelected==1){
    if (mouseIsPressed){
        strokeWeight(10);
      line(pmouseX, pmouseY, mouseX, mouseY);
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
     point(mouseX, mouseY);   
    }
    }
    }
  strokeWeight(1);
  ellipse(50, 50, 50, 50);
  ellipse(50, 150, 50, 50);
//  if (mouseIsPressed){
//    if(dist((mouseX, mouseY, width-50, 50)<=25){
//      line(pmouseX, pmouseY, mouseX, mouseY);
//    }
//}
//function mouseClicked() {
  //if(dist(mouseX, mouseY, width-50, 50)<=25){
   //}
}

