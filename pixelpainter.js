var x = 0;
var y = 0;
var buffer;
var count = 1;
var startx = 0;
var starty = 0;
var r1, g1, b1;
var r2, g2, b2;
var colorSelected;
var color1;
var color2;
var mPixColor;
var fileCount = 1;
var fileType;
var mode = ""; //default mode is off
var backColor = 255; //background color
var r, g, b;
var grid="none";

function setup() {
    cursor(CROSS);
    frameRate(10001);
    createCanvas(windowWidth, windowHeight - 200);
    background(255);
    rSlider = createSlider(0, 255, 0);
    rSlider.position(20, windowHeight - 65);
    gSlider = createSlider(0, 255, 0);
    gSlider.position(20, windowHeight - 35);
    bSlider = createSlider(0, 255, 0);
    bSlider.position(20, windowHeight - 5);
    rSlider.style('width', '200px');
    gSlider.style('width', '200px');
    bSlider.style('width', '200px');

    tSlider = createSlider(0, 255, 0);
    tSlider.position(300, windowHeight - 65);
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
    count=1;
    mode = "line";
}

function makeEllipse() {
    count=1;
    mode = "ellipse";
}

function makeTriangle() {
    count=1;
    mode = "triangle";
}

function makeRectangle() {
    count=1;
    mode = "rectangle";
}

function makeDropper() {
    mode = "dropper";
}

function makeGridlines() {
    mode = "gridlines";
}

function setColor1() {
    colorSelected = color1;
};

function setColor2() {
    colorSelected = color2;
};
//save file; specify type in parameters
function saveImg(fileType) {
    save("drawing" + fileCount + "." + fileType);
    fileCount++;
}

function draw() {
//    
//    fill(0)
//    textSize(32);
//    text("(" + mouseX + "," + mouseY + ")", 300, windowHeight - 100); 
//    
//    document.getElementById("mPosX").innerHTML = mouseX;
    document.getElementById("p1").innerHTML = "(" + mouseX + "," + mouseY + ") ";
    var r = rSlider.value();
    var g = gSlider.value();
    var b = bSlider.value();

    var t = tSlider.value();
    stroke(colorSelected);
    fill(colorSelected);
    strokeWeight(t + 10);
    if (colorSelected === color1) color1 = color(r, g, b);
    if (colorSelected === color2) color2 = color(r, g, b);
    switch (mode) {
        case "pencil":
            if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
                fill(colorSelected);
                line(pmouseX, pmouseY, mouseX, mouseY);
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                    point(mouseX, mouseY);
            }
            break;
        case "marker":
          if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
                blendMode(REPLACE);
                strokeWeight(t + 10);
                stroke(red(colorSelected), green(colorSelected), blue(colorSelected), 5);
                line(pmouseX, pmouseY, mouseX, mouseY);
                if (abs(mouseX - pmouseX) <= 0 && abs(mouseY - pmouseY) <= 0)
                    stroke(red(colorSelected), green(colorSelected), blue(colorSelected), 5);
                    point(mouseX, mouseY);
            }
            break;
        case "paintbrush":
            if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
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
        case "eraser":
            if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
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
           if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
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
if (count % 2 == 1) {
                line(startx, starty, mouseX, mouseY);
            }
            break;
        case "rectangle":
            pixels = buffer;
            updatePixels();
            if (count % 2 == 1) {
                rect(startx, starty, mouseX - startx, mouseY - starty);
            }
            break;
        case "ellipse":
            pixels = buffer;
            updatePixels();
                if (count % 2 == 1) {
                    noStroke();
                    ellipse(startx, starty, 2.8*(mouseX-startx), 2.8*(mouseY-starty));
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
        case "dropper":
            if (mouseIsPressed && mouseX < windowWidth && mouseY < windowHeight - 200 && mouseX > 0 && mouseY > 0) {
                loadPixels();
                console.log(mouseX, mouseY)
                console.log(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 2])
                if (colorSelected === color1) color1 = color(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 2]);
                if (colorSelected === color2) color2 = color(pixels[mouseX * mouseY], pixels[mouseX * mouseY + 1], pixels[mouseX * mouseY + 2], pixels[mouseX * mouseY + 2]);
                updatePixels(); //not entirely sure what this does, but if it ain't broke, don't fix it
            }
            break;
    }
}

function updateBuffer() {
    if(grid=="display"){
        for(var i = 0; i < width; i+=20){
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
    if(mode=="gridlines"){
        if(grid=="display"){
            grid = "none";
        }
        if(grid=="none"){
            grid = "display";
        }
    }
    count++;
    if (count % 2 == 1) {
        startx = mouseX;
        starty = mouseY;
    }
    updateBuffer();
}
