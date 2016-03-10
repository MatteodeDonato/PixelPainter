function setup() {
  
  createCanvas(500, 500);
  background(150)
  
}

function draw() {


colorMode(HSB, 200, 200, 200);
 for (var h = 200; h > 0; h--) {
  for (var s = 200; s > 0; s--) {
    var x = map(h, 0, 200, 200, 0);
    var y = map(s, 0, 200, 200, 0);
    stroke(h,s, 150);
    point(x, y);
  }
}


}
  
  
  
  
  

  
