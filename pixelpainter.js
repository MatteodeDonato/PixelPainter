// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Example 1-1: stroke and fill
var x = 0;
var y = 0;
var mode = "none";
var backColor = 255;
function setup() {
  frameRate(10000);
  createCanvas(windowWidth, windowHeight);
  fill(255, 0, 0);
  stroke(255,0,0);
  background(255);
}
function mouseClicked(){
    if(dist(mouseX, mouseY, 50, 50)<=25){
        if(mode!="pencil"){
            mode = "pencil";
        }
    }
    if(dist(mouseX, mouseY, 50, 150)<=25){
        if(mode!="marker"){
            mode= "marker";
        }
    }
    if(dist(mouseX, mouseY, 50, 250)<=25){
        if(mode!="paintbrush"){
            mode= "paintbrush";
        }
    }
    if(dist(mouseX, mouseY, 50, 350)<=25){
        if(mode!="eraser"){
            mode = "eraser";
        }
    }
    if(dist(mouseX, mouseY, 50, 450)<=25){
        if(mode!="sprayCan"){
            mode = "sprayCan";
        }
    }
    if(dist(mouseX, mouseY, 50, 550)<=25){
        if(mode!="line"){
            mode = "line";
        }
    }
}
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
    
  strokeWeight(1); 
  fill(255);
  rect(0, 0, 100, height);
    fill(255, 0, 0);
  ellipse(50, 50, 50, 50);
  ellipse(50, 150, 50, 50);
  ellipse(50, 250, 50, 50);
  ellipse(50, 350, 50, 50);
  ellipse(50, 450, 50, 50);
  ellipse(50, 550, 50, 50);
//  if (mouseIsPressed){
//    if(dist((mouseX, mouseY, width-50, 50)<=25){
//      line(pmouseX, pmouseY, mouseX, mouseY);
//    }
//}
//function mouseClicked() {
  //if(dist(mouseX, mouseY, width-50, 50)<=25){
   //}
}
