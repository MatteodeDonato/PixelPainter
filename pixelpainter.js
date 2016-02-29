// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Example 1-1: stroke and fill
var x = 0;
var y = 0;
var pencilSelected = 0;
var markerSelected = 0;
var paintbrushSelected = 0;
function setup() {
  frameRate(10000);
  createCanvas(960, 540);
  fill(255, 0, 0);
  stroke(255,0,0);
  background(255);
}
function mouseClicked(){
    if(dist(mouseX, mouseY, 50, 50)<=25){
        if(pencilSelected==0){
            pencilSelected = 1;
            markerSelected= 0;
            paintbrushSelected= 0;
        }
    }
    if(dist(mouseX, mouseY, 50, 150)<=25){
        if(markerSelected==0){
            pencilSelected = 0;
            markerSelected= 1;
            paintbrushSelected= 0;
        }
    }
    if(dist(mouseX, mouseY, 50, 250)<=25){
        if(markerSelected==0){
            pencilSelected = 0;
            markerSelected= 0;
            paintbrushSelected= 1;
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
    if(paintbrushSelected==1){
    if (mouseIsPressed){
        stroke(255,0,0,80);
        for(var i =0; i<10; i++){
        strokeWeight(3*i);
        //ellipse(mouseX, mouseY, 15, 15);
      ellipse(mouseX, mouseY, 15, 15);
        }
    if(abs(mouseX-pmouseX)<=0 && abs(mouseY-pmouseY)<=0){
       ellipse(mouseX, mouseY, 10, 10);   
    }
    }
    }
  strokeWeight(1); 
  ellipse(50, 50, 50, 50);
  ellipse(50, 150, 50, 50);
  ellipse(50, 250, 50, 50);
//  if (mouseIsPressed){
//    if(dist((mouseX, mouseY, width-50, 50)<=25){
//      line(pmouseX, pmouseY, mouseX, mouseY);
//    }
//}
//function mouseClicked() {
  //if(dist(mouseX, mouseY, width-50, 50)<=25){
   //}
}
