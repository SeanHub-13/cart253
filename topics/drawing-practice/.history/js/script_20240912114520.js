/**
 * Drawing Practice
 * Sean Verba
 * 
 * Well, it's a project all about practicing drawing.
 * PLEASE DON'T REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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

    // It's a red circle! How festive!
    // Push to remember previous settings
    push();
    // Change shape settings here
    fill(255, 0, 0);
    stroke(255, 255, 255);
    // Draw the circle
    ellipse(320, 320, 480, 480);
    // Pop to restore original settings
    pop();

    // It's a red circle! How festive!
    // Push to remember previous settings
    push();
    // Change shape settings here
    fill(255, 0, 0);
    stroke(255, 255, 255);
    // Draw the circle
    ellipse(320, 320, 480, 480);
    // Pop to restore original settings
    pop();

    // It's a red circle! How festive!
    // Push to remember previous settings
    push();
    // Change shape settings here
    fill(255, 0, 0);
    stroke(255, 255, 255);
    // Draw the circle
    ellipse(320, 320, 480, 480);
    // Pop to restore original settings
    pop();
}