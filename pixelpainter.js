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
var colorSelected;
var color1;
var color2;
var mPixColor;
var fileCount = 1;
var fileType;
var mode = "pencil"; //default mode is pencil
var backColor = 255; //background color
// var r, g, b, t;
var grid = "none";

function setup() {
    cursor(CROSS);
    frameRate(10002);
    createCanvas(1530, 400);
    background(255);
    r1Slider = createSlider(0, 255, r1);
    r1Slider.position(20, windowHeight - 65);
    g1Slider = createSlider(0, 255, g1);
    g1Slider.position(20, windowHeight - 35);
    b1Slider = createSlider(0, 255, b1);
    b1Slider.position(20, windowHeight - 5);
    r1Slider.style('width', '200px');
    g1Slider.style('width', '200px');
    b1Slider.style('width', '200px');
    //text("r1", )

    r2Slider = createSlider(0, 255, r2);
    r2Slider.position(300, windowHeight - 65);
    g2Slider = createSlider(0, 255, g2);
    g2Slider.position(300, windowHeight - 35);
    b2Slider = createSlider(0, 255, b2);
    b2Slider.position(300, windowHeight - 5);
    r2Slider.style('width', '200px');
    g2Slider.style('width', '200px');
    b2Slider.style('width', '200px');

    tSlider = createSlider(0, 255, 0);
    tSlider.position(550, windowHeight - 65);
    tSlider.style('width', '200px')
    color1 = color(0, 0, 0);
    color2 = color(0, 0, 0);
    colorSelected = color1;
}
//to interact with HTML links
function makePencil() {
    mode = "pencil";
}

function makePaint() {
    mode = "paintbrush";
}

function makeWatercolor() {
    mode = "watercolor";
}

function makeRibbon() {
    mode = "ribbon";
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



//save file; specify type in parameters
function saveImg(fileType) {
    save("drawing" + fileCount + "." + fileType);
    fileCount++;
}

function draw() {

    document.getElementById("p1").innerHTML = "(" + mouseX + "," + mouseY + ") ";
    r1 = r1Slider.value();
    g1 = g1Slider.value();
    b1 = b1Slider.value();

    r2 = r2Slider.value();
    g2 = g2Slider.value();
    b2 = b2Slider.value();


    t = tSlider.value();
    if(mode == "dropper"){
    if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
        loadPixels();
        console.log(mouseX, mouseY)
        console.log(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 3]);
        colorSelected = color(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 3]);
        updatePixels(); //not entirely sure what this does, but if it ain't broke, don't fix it
    }
  }


    stroke(colorSelected);
    fill(colorSelected);
    strokeWeight(t + 10);

    switch (mode) {
        case "pencil":
            if (mouseIsPressed && mouseX < 1530 && mouseY < 400 - 30 && mouseX > 0 && mouseY > 0) {
                fill(colorSelected);
                line(pmouseX, pmouseY, mouseX, mouseY);
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                    point(mouseX, mouseY);
            }
            break;
        case "marker":
            if (mouseIsPressed && mouseX < 1530 && mouseY < 400 - 30 && mouseX > 0 && mouseY > 0) {
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
            if (mouseIsPressed && mouseX < 1530 && mouseY < 400 - 30 && mouseX > 0 && mouseY > 0) {
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
              if (mouseIsPressed) {//watercolors
                for (var i = -10; i <= 10; i++) {
                    strokeWeight(random(3, 6));
                    stroke(red(colorSelected), green(colorSelected), blue(colorSelected), random(100, 155));
                    line(pmouseX + 2 * i, pmouseY + i, mouseX + 2 * i, mouseY + i);
                }
              }
            break;
        case "ribbon":
            if (mouseIsPressed) {
                for(var i=-10; i<=10; i++){
                    stroke(colorSelected);
                    strokeWeight(1);
                    line(pmouseX+2*i, pmouseY, mouseX+2*i, mouseY);
                    if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                        point(mouseX, mouseY);
                }
            }
            break;
        case "eraser":
            if (mouseIsPressed && mouseX < 1530 && mouseY < 400 - 30 && mouseX > 0 && mouseY > 0) {
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
            if (mouseIsPressed && mouseX < 1530 && mouseY < 400 - 30 && mouseX > 0 && mouseY > 0) {
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
            // if (count % 2 == 0) {
            //     rect(startx, starty, endx - startx, endy - starty);
            // }
            if (count % 2 == 1) {
                rect(startx, starty, mouseX - startx, mouseY - starty);
            }
            break;
        case "ellipse":
            pixels = buffer;
            updatePixels();
            if (count % 2 == 1) {
                noStroke();
                ellipse(startx, starty, 2.8 * (mouseX - startx), 2.8 * (mouseY - starty));
            }
            break;
        case "triangle":
            pixels = buffer;
            updatePixels();
            if (count % 2 == 1) {
                noStroke();
                triangle(startx, starty, startx, mouseY, mouseX, mouseY);
            }
            break;
        // case "dropper":
        //     if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
        //         loadPixels();
        //         console.log(mouseX, mouseY)
        //         console.log(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 3]);
        //         colorSelected = color(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 3]);
        //         updatePixels(); //not entirely sure what this does, but if it ain't broke, don't fix it
        //     }
        //     break;
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
    // else if(grid == "none"){
    //   for (var i = 0; i < width; i += 20) {
    //       stroke(255);
    //       strokeWeight(1);
    //       line(i, height, i, 0);
    //       line(width, i, 0, i);
    //   }
    // }
    loadPixels();
    buffer = pixels;
    cursor(CROSS);
}

function mouseClicked() {
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
}
