function setup(){
    createCanvas(500,300);
    fill(255);
}
function draw(){
    if(mouseIsPressed){
       if(mouseButton== LEFT){
        stroke(255,0,0);
        line(mouseX,mouseY,pmouseX,pmouseY);
       }
       if(mouseButton == RIGHT){
        stroke(0,255,0);
        line(mouseX,mouseY,pmouseX,pmouseY);
       }
       
    }
    if(keyIsPressed){
        clear();
    }
}