/**
 * Super Cool Hunting Jam
 * Sean Verba
 * 
 * A game where you shoot can's of Art Jam (paint)
 */

"use strict";

// Draws front grass
let targetImage = undefined;
let jamImage = undefined;
let buttonImage = undefined;
let buttonPressedImage = undefined;
let explosionSmallImage = undefined;
let explosionMediumImage = undefined;
let explosionLargeImage = undefined;
let rifleImage = undefined;
let titleFont = undefined;

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

let playButton = {
    width: 192,
    height: 72
}

let rifle = {
    width: 260,
    height: 300
}

let artJam = {
    width: 120,
    height: 168
}

let artJamRow1 = {
    height: 150
}

let artJamRow2 = {
    height: 120
}

let explosion = {
    width: 48,
    height: 38
}

let time = 0;

let enemyInfo = {
    enemy: [1, 2,],
    enemyOneBool: false,
    enemyTwoBool: false,
    enemyJump: undefined
}

let score = 0;
let state = "titlescreen";

/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */

function preload() {
    targetImage = loadImage('assets/images/Target.png');
    jamImage = loadImage('assets/images/Art_Jam.png');
    buttonImage = loadImage('assets/images/Art_Jam_Button_1.png');
    buttonPressedImage = loadImage('assets/images/Art_Jam_Button_2.png');
    explosionSmallImage = loadImage('assets/images/Repurposed_Art_Jam_Explosion_1.png');
    explosionMediumImage = loadImage('assets/images/Repurposed_Art_Jam_Explosion_2.png');
    explosionLargeImage = loadImage('assets/images/Repurposed_Art_Jam_Explosion_3.png');
    rifleImage = loadImage('assets/images/Art_Jam_Rifle.png');
    titleFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
}

//Setup runs code on start-up
function setup() {
    createCanvas(800, 800);    // Text settings
    textAlign(CENTER, CENTER);
    textFont(titleFont);
    fill("white");
    setInterval(timeUpdate, 1000);
}


//Runs code every frame
function draw() {
    drawBackdrop();
    // Didn't work with the preload function, seems thats because its a p5 thing
    cursor("assets/images/Target.png", 16, 16);
    if (state === "titlescreen") {
        titleScreen();
    }
    else if (state === "game") {
        game();
    }

}

/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */

function drawBackdrop() {
    background(200, 200, 255)
}

function drawBackGrass() {
    //Draw back grass
    push();
    noStroke();
    fill(grassBack.fill.r, grassBack.fill.g, grassBack.fill.b)
    rect(grassBack.x, grassBack.y, grassBack.width, grassBack.height)
    pop();
}

function drawFrontGrass() {
    //Draw front grass
    push();
    noStroke();
    fill(grassFront.fill.r, grassFront.fill.g, grassFront.fill.b)
    rect(grassFront.x, grassFront.y, grassFront.width, grassFront.height)
    pop();
}

function titleScreenText() {
    push();
    fill("#ffffff");
    textSize(38);
    text("Art Jam Shootout", width / 2, height / 3);
    pop();
}
function scoreText() {
    push();
    fill("#ffffff");
    textSize(12);
    text("Score: " + score, width / 2, height / 3);
    pop();
}

function drawRifle() {
    // Maps position of mouse from normal height to half the normal height
    let rifleRange = map(mouseY, 0, height, 0, height / 4);
    let rifleImageHeight = rifleRange + height - rifle.height - 50;
    if (rifleImageHeight < 500) {
        rifleImageHeight = 500;
    }
    image(rifleImage, width - rifle.width, rifleImageHeight, rifle.width, rifle.height);
}

function timeUpdate() {
    time++;
}

/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */

function enemyOne() {
    push();
    image(jamImage, width / 3 - artJam.width, height - artJam.height - artJamRow2.height, artJam.width, artJam.height);
    if ((mouseX > width / 3 - artJam.width) && (mouseX < width / 3) && (mouseY > height - artJam.height - artJamRow2.height) && (mouseY < height - grassFront.height)) {
        if (mouseIsPressed) {
            push();
            image(explosionLargeImage, mouseX - explosion.width / 2, mouseY - explosion.height / 2, 0, 0);
            pop();
            enemyInfo.enemyOneBool = false;
            score++;
        }
    }
    pop();
}

function enemyTwo() {
    push();
    image(jamImage, width / 3 + width / 2 - artJam.width, height - artJam.height - artJamRow2.height, artJam.width, artJam.height);
    if ((mouseX > width / 3 + width / 3 - artJam.width) && (mouseX < width / 3 + width / 2) && (mouseY > height - artJam.height - artJamRow2.height) && (mouseY < height - grassFront.height)) {
        if (mouseIsPressed) {
            push();
            image(explosionLargeImage, mouseX - explosion.width / 2, mouseY - explosion.height / 2, 0, 0);
            pop();
            enemyInfo.enemyTwoBool = false;
            score++;
        }
    }
    pop();
}

function artJamGameStart() {
    if (time > 1) {
        enemyInfo.enemyJump = random(enemyInfo.enemy);
        console.log(enemyInfo.enemyJump);
        if (enemyInfo.enemyJump === 1) {
            console.log("Jump1")
            enemyInfo.enemyOneBool = true;
        }
        else if (enemyInfo.enemyJump === 2) {
            console.log("Jump2")
            enemyInfo.enemyTwoBool = true;
        }
        time = 0;
    }
}

/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */

function drawPlayButton() {
    push();
    // width & height is calculated like this because I want the button to be truly centered, and the image is 192 x 72
    image(buttonImage, width / 2 - 96, height / 2 - 36, playButton.width, playButton.height);
    text("PLAY", width / 2, height / 2);
    textSize(12);
    pop();
    //console.log("test");
}

function drawPressedPlayButton() {
    push();
    // width & height is calculated like this because I want the button to be truly centered, and the image is 192 x 72
    image(buttonPressedImage, width / 2 - 96, height / 2 - 36, playButton.width, playButton.height);
    text("PLAY", width / 2, height / 2);
    textSize(12);
    pop();
    //console.log("test");
}

function playButtonInput() {
    // If the mouse is between these values then
    if ((mouseX > width / 2 - 96) && (mouseX < width / 2 + 96) && (mouseY > height / 2 - 36) && (mouseY < height / 2 + 36)) {
        drawPressedPlayButton();
        if (mouseIsPressed) {
            state = "game";
        }
        //console.log("YAY!");
    }
}

/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */

function titleScreen() {
    titleScreenText();
    drawPlayButton();
    playButtonInput();
}

/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */
/** ----------------------------------------------------------------------------------------------------------------------------- */

function game() {
    drawBackGrass();
    if (enemyInfo.enemyOneBool === true) {
        enemyOne();
    }
    if (enemyInfo.enemyTwoBool === true) {
        enemyTwo();
    }
    drawFrontGrass();
    drawRifle();
    artJamGameStart();
    scoreText();
}