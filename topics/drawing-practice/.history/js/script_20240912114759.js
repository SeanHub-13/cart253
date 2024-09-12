/**
 * Drawing Practice
 * Sean Verba
 * 
 * Well, it's a project all about practicing drawing.
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // Square canvas
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Greenish Background
    background(0, 100, 50)

    // It's a red circle? How festive?
    // Push to remember previous settings
    push();
    // Change shape settings here
    fill(255, 0, 0);
    stroke(255, 255, 255);
    // Draw the circle
    ellipse(320, 320, 480, 480);
    // Pop to restore original settings
    pop();

    // Hmm, seems the circle obtained a label...
    // Push to remember previous settings
    push();
    // Change shape settings here
    fill(255, 255, 255);
    noStroke();
    // Draw the circle
    ellipse(320, 320, 140, 140);
    // Pop to restore original settings
    pop();

    // Strange, seems the circle developed a hole...
    // Push to remember previous settings
    push();
    // Change shape settings here
    fill(150, 150, 150);
    stroke(50, 50, 50);
    // Draw the circle
    ellipse(320, 320, 20, 20);
    // Pop to restore original settings
    pop();
}