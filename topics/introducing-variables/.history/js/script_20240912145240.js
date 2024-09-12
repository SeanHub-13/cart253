/**
 * Introducing Variables
 * Sean Verba
 * 
 * Rise of the variables!!!
 * 
 * P5.js and stuff (ill actually write this for real work)
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);

    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 100, 100);
    pop();
}