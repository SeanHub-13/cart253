/**
 * Super Cool Hunting Jam
 * Sean Verba
 * 
 * A game where you shoot can's of Art Jam (paint)
 */

"use strict";

// Draws front grass
let grassFront = {
    x: 0,
    y: 650,
    width: 800,
    height: 150,
    fill: {
        r: 100,
        g: 225,
        b: 50
    }
}

let grassBack = {
    x: 0,
    y: 550,
    width: 800,
    height: 150,
    fill: {
        r: 200,
        g: 225,
        b: 50
    }
}

/**
 * Setup runs code on start-up
*/
function setup() {
    createCanvas(800, 800);
}


/**
 * Runs code every frame
*/
function draw() {
    background(200, 200, 255)

    //Draw back grass
    push();
    noStroke();
    fill(grassBack.fill.r, grassBack.fill.g, grassBack.fill.b)
    rect(grassBack.x, grassBack.y, grassBack.width, grassBack.height)
    pop();

    //Draw front grass
    push();
    noStroke();
    fill(grassFront.fill.r, grassFront.fill.g, grassFront.fill.b)
    rect(grassFront.x, grassFront.y, grassFront.width, grassFront.height)
    pop();
}