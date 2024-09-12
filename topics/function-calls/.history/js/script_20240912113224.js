/**
 * Function Calls
 * Sean Verba
 * 
 * Pretty cool project that shows basic function calls.
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Creates a 640 x 480 canvas on program launch
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * Creates a red background and white square every frame. 
*/
function draw() {
    background(255, 0, 0);
    rect(240, 160, 150, 150);
}