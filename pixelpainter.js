var x = 0;
var y = 0;
var buffer;
var count = 1;
var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;
var r1 = 0;
var g1 = 0;
var b1 = 0;
var r2 = 0;
var g2 = 0;
var b2 = 0;
var t;
var o;
var p1, p2;
var colorSelected;
var color1;
var color2;
var mPixColor;
var fileCount = 1;
var fileType;
var mode = "pencil"; //default mode is pencil
var backColor = 255; //background color

var palette = [];
var paletteSelected;



var grid = "none";

function setup() {
    cursor(CROSS);
    frameRate(60);
    createCanvas(1500, 800);
    background(255);

    tSlider = createSlider(0, 255, 0);
    tSlider.position(500, 530);
    tSlider.style('width', '200px');

    oSlider = createSlider(0, 255, 255);
    oSlider.position(500, 550);
    oSlider.style('width', '200px');

    p1Slider = createSlider(1, 100, 1);
    p1Slider.position(750, 530);
    p1Slider.style('width', '200px');
    
    p2Slider = createSlider(1, 100, 1);
    p2Slider.position(750, 530);
    p2Slider.style('width', '200px')

    color1 = color(0, 0, 0);
    color2 = color(0, 0, 0);
    colorSelected = color1;

    colorMode(HSB, 200, 200, 200);
    for (var h = 150; h > 0; h--) {
        for (var s = 150; s > 0; s--) {
            var y = map(s, 0, 100, 100, 0);
            stroke(h, s, 150);
            point(h + 200, y + 500);
        }
    }

}

function makePencil() {
    mode = "pencil";
}

function makePaint() {
    mode = "paintbrush";
}

function makeEraser() {
    mode = "eraser";
}

function makeSpray() {
    mode = "sprayCan";
}

function makeMarker() {
    mode = "marker";
}

function makeLine() {
    count = 1;
    mode = "line";
}

function makeEllipse() {
    count = 1;
    mode = "ellipse";
}

function makeTriangle() {
    count = 1;
    mode = "triangle";
}

function makeRectangle() {
    count = 1;
    mode = "rectangle";
}

function makeDropper() {
    mode = "dropper";
}

function makeGridlines() {
    mode = "gridlines";
}

function setColor1() {
    color1 = color(r1, g1, b1);
    colorSelected = color1;
}

function setColor2() {
    color2 = color(r2, g2, b2);
    colorSelected = color2;
}

function makeWatercolor() {
    mode = "watercolor";
}

function makeRibbon() {
    mode = "ribbon";
}


//save file; specify type in parameters
function saveImg(fileType) {
    save("drawing" + fileCount + "." + fileType);
    fileCount++;
}

function draw() {
    //console.log(r1, g1, b1);
    //console.log(r2, g2, b2);
    colorMode(RGB, 255, 255, 255);

    stroke(0);
    fill(255);
    fill(255, 0, 0);
    rect(500, 550, 30, 30);
    fill(0, 255, 0);
    rect(500, 500, 30, 30);
    fill(0, 0, 255);
    rect(560, 550, 30, 30);
    fill(0, 0, 0);
    rect(560, 500, 30, 30);
    fill(255, 255, 255);
    rect(620, 550, 30, 30);
    fill(100, 100, 100);
    rect(620, 500, 30, 30);
    noStroke();

    if (mouseButton == LEFT) setColor1();
    if (mouseButton == RIGHT) setColor2();

    document.getElementById("cursorTracker").innerHTML = "\t(" + mouseX + "," + mouseY + ") ";


    t = tSlider.value();
    o = oSlider.value();
    p1 = p1Slider.value();
    p2 = p2Slider.value();

    stroke(red(colorSelected), green(colorSelected), blue(colorSelected), o);

    fill(red(colorSelected), green(colorSelected), blue(colorSelected), o);
    strokeWeight(t + 10);

    switch (mode) {
        case "pencil":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) {
                fill(colorSelected);
                stroke(colorSelected);
                line(pmouseX, pmouseY, mouseX, mouseY);
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                    point(mouseX, mouseY);
            }
            break;
        case "marker":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) {
                blendMode(REPLACE);
                strokeWeight(t + 20);
                stroke(red(colorSelected), green(colorSelected), blue(colorSelected), 5);
                line(pmouseX, pmouseY, mouseX, mouseY);
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                    stroke(red(colorSelected), green(colorSelected), blue(colorSelected), 5);
                point(mouseX, mouseY);
            }
            break;
        case "paintbrush":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) {
                for (var i = 10; i > 00; i--) {
                    strokeCap(ROUND);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                    strokeWeight(3 * i);
                    stroke(red(colorSelected), green(colorSelected), blue(colorSelected), 35);
                    strokeCap(SQUARE);
                    line(pmouseX, pmouseY, mouseX, mouseY);
                }
            }
            break;
        case "watercolor":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) { //watercolors
                for (var i = -10; i <= 10; i++) {
                    strokeWeight(random(3, 6));
                    stroke(red(colorSelected), green(colorSelected), blue(colorSelected), random(100, 155));
                    line(pmouseX + 2 * i, pmouseY + i, mouseX + 2 * i, mouseY + i);
                }
            }
            break;
        case "ribbon":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) {
                for (var i = -10; i <= 10; i++) {
                    stroke(colorSelected);
                    strokeWeight(1);
                    line(pmouseX + 2 * i, pmouseY, mouseX + 2 * i, mouseY);
                    if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                        point(mouseX, mouseY);
                }
            }
            break;
        case "eraser":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) {
                strokeWeight(50);
                stroke(backColor);
                line(pmouseX, pmouseY, mouseX, mouseY);
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0) {
                    point(mouseX, mouseY);
                }
                updateBuffer();
            }
            stroke(255, 0, 0);
            break;
        case "sprayCan":
            if (mouseIsPressed && mouseX < 1500 && mouseY < 500 - 100 && mouseX > 0 && mouseY > 0) {
                strokeWeight(1);
                for (var h = 0; h < 100; h++) {
                    var x = randomGaussian(mouseX, 15);
                    var y = randomGaussian(mouseY, 15);
                    for (var i = 0; i < 20; i++) {
                        point(x, y);
                    }
                }
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                    point(mouseX, mouseY);
            }
            break;
        case "line":
        stroke(color2);
        fill(color1);
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
            stroke(color2);
            fill(color1);
            pixels = buffer;
            updatePixels();
            // if (count % 2 == 0) {
            //     rect(startx, starty, endx - startx, endy - starty);
            // }
            if (count % 2 == 1) {
                rect(startx, starty, mouseX - startx, mouseY - starty);
            }
            break;
        case "ellipse":
            stroke(color2);
            fill(color1);
            pixels = buffer;
            updatePixels();
            if (count % 2 == 1) {
                //noStroke();
                ellipse(startx, starty, 2.8 * (mouseX - startx), 2.8 * (mouseY - starty));
            }
            break;
        case "triangle":
        stroke(color2);
        fill(color1);
            pixels = buffer;
            updatePixels();
            if (count % 2 == 1) {
                //noStroke();
                triangle(startx, starty, startx, mouseY, mouseX, mouseY);
            }
            break;

        case "dropper":
        if(mouseY>450){
            loadPixels();
            var c = color(get(mouseX, mouseY));
            fill(c);
            stroke(c);
            console.log(red(c), green(c), blue(c));
            rect(0, 0, 50, 50);
            dropping = true;
            if(mouseIsPressed){
              if(mouseButton == LEFT){
              r1 = red(c);
              g1 = green(c);
              b1 = blue(c);
              colorSelected = c;
              }
              if(mouseButton == RIGHT){
              r2 = red(c);
              g2 = green(c);
              b2 = blue(c);
              colorSelected = c;
              }
            }
          }
    }
}

function updateBuffer() {
    if (grid == "display") {
        for (var i = 0; i < width; i += 20) {
            stroke(0);
            strokeWeight(1);
            line(i, height, i, 0);
            line(width, i, 0, i);
        }
    }
    loadPixels();
    buffer = pixels;
    cursor(CROSS);
}

function mouseClicked() {
    var c = color(get(mouseX, mouseY));
    if (mode == "gridlines") {
        if (grid == "display") {
            grid = "none";
        }
        if (grid == "none") {
            grid = "display";
        }
    }
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
    if (mouseX > 1000 && mouseX < 1200 && mouseY > 100 && mouseY < 300) {
        loadPixels();
        var c = color(get(mouseX, mouseY));
        console.log(red(c), green(c), blue(c));
        if (colorSelected == color1)
            color1 = c;
        if (colorSelected == color2)
            color2 = c;
    }

    if (mouseX > 1020 && mouseX < 1050 && mouseY < 500 && mouseX < 550)
        palette[i] = c;



}
