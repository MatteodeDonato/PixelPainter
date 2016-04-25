function setup() {
  createCanvas(255, 255);
  background(175);
  colorMode(HSB, 255)
}

function draw() {
  noStroke();
  for (var y = 255; y > 0; y--) {
    //println(y);
    for (var x = 0; x < width; x++) {
      fill(x, y, 200);
      rect(x, 255-y, width / 20, y);
    }
  }
  //fill(100, 100, x, 10);
  //rect(0, x, width, height);
  //}
}
