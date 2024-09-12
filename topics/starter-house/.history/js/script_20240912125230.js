/**
 * My Reconstructed House
 * Sean Verba
 * 
 * Draws a house with shapes.
 * 
 * Disclaimer: Not actually my house. Or Professor Barrs house.
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 * Pippin Barr
 */

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(640, 480);
}

/**
 * Draws the eternal universe that I, god, have created
 */
function draw() {

    drawsky();
    drawcloud();
    drawground();
    drawhouse();
}
// Draws the sky
function drawsky() {
    // The sky
    background(150, 200, 250);
}
// Draws a cloud
function drawcloud() {
    // A cloud
    push();
    noStroke();
    // Note: using a single number for a colour will be greyscale
    // (As if you used the same number for R, G, and B)
    // So this is white:
    fill(255);
    ellipse(100, 100, 100, 100);
    ellipse(180, 80, 100, 100);
    ellipse(160, 120, 60, 60);
    ellipse(190, 130, 60, 60);
    ellipse(220, 120, 60, 60);
    pop();
}
// Draws the ground
function drawground() {
    // The ground
    push();
    noStroke();
    fill(200);
    rect(0, 400, 640, 480);
    pop();
}
// Draws a house
function drawhouse() {
    drawbody();
    drawroof();
    drawwindow();
    drawdoor();
    drawdoorknob();
}
// Draws a house body
function drawbody() {
    // The main body of the house
    push();
    noStroke();
    fill(250, 250, 200);
    rect(200, 240, 280, 180);
    pop();
}
// Draws a roof
function drawroof() {
    // The roof
    push();
    noStroke();
    // You can also write colors in hex code in quote marks
    fill("#dc143c");
    triangle(180, 240, 340, 120, 500, 240);
    pop();
}
// Draws a window
function drawwindow() {
    // A window
    push();
    // You can also write colour names from the CSS standard in quotes
    // https://www.w3.org/wiki/CSS/Properties/color/keywords
    stroke("deeppink");
    strokeWeight(5);
    fill("blanchedalmond");
    rect(220, 260, 80, 80);
    pop();
}
// Draws a door
function drawdoor() {
    // The door
    push();
    noStroke();
    fill(0, 128, 0);
    rect(320, 300, 80, 120);
    pop();
}
// Draws a doorknob
function drawdoorknob() {
    // The doorknob
    push();
    noStroke();
    fill(255, 215, 0);
    ellipse(340, 360, 10, 10);
    pop();
}