var x = 0;
var y = 0;
var mode = "none";
function setup() {
  frameRate(10000);
  createCanvas(960, 540);
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
