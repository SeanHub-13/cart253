/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */

const puck = {
    x: 150,
    y: 150,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

const target = {
    x: 300,
    y: 300,
    size: 50,
    fill: "#fff000",
    fills: {
        noOverlap: '#fff000',
        overlap: '#aaaaaa'
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
    noCursor();
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();
    movePuck();
    drawTarget();
    checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

function movePuck() {
    const distance = dist(user.x, user.y, puck.x, puck.y);
    const mouseIsOverlapping = (distance < user.size / 2 + puck.size / 2);
    if (mouseIsOverlapping) {
        const dx = user.x - puck.x;
        const dy = user.y - puck.y;
        if (abs(dx) > abs(dy)) {
            if (dx < 0) {
                puck.x += 10;
            }
            else if (dx > 0) {
                puck.x -= 10;
            }
        }
        else {
            if (dy < 0) {
                puck.y += 10;
            }
            else if (dy > 0) {
                puck.y -= 10;
            }
        }
    }
}

function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}
function checkTarget() {
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size / 2 + target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}

/**function moveTarget() {
    const distanceX = dist(user.x, 0, puck.x, 0);
    const distanceY = dist(0, user.y, 0, puck.y);
    const mouseIsOverlappingX = (distanceY < user.size / 2 + puck.size / 2);
    const mouseIsOverlappingY = (distanceX < user.size / 2 + puck.size / 2);
    if (mouseIsOverlappingX && mouseIsOverlappingY) {
        puck.x = puck.x + 1;
    }
    else if (mouseIsOverlappingY && !mouseIsOverlappingX) {
        puck.y = puck.y + 1;
    }
}*/

/**function moveTarget() {
    const distanceX = dist(user.x, 0, puck.x, 0);
    const distanceY = dist(0, user.y, 0, puck.y);
    const mouseIsOverlappingSmallX = (distanceY < puck.size / 2);
    const mouseIsOverlappingSmallY = (distanceX < puck.size / 2);
    const mouseIsOverlappingBigX = (distanceY > puck.size / 2);
    const mouseIsOverlappingBigY = (distanceX > puck.size / 2);

    if (mouseIsOverlappingSmallX && !mouseIsOverlappingSmallY && !mouseIsOverlappingBigX) {
        puck.x = puck.x + 1;
    }
    else if (mouseIsOverlappingSmallY && !mouseIsOverlappingSmallX && !mouseIsOverlappingBigY) {
        puck.y = puck.y + 1;
    }
    else if (mouseIsOverlappingBigX && !mouseIsOverlappingBigY && !mouseIsOverlappingSmallX) {
        puck.x = puck.x - 1;
    }
    else if (mouseIsOverlappingBigY && !mouseIsOverlappingBigX && !mouseIsOverlappingSmallY) {
        puck.y = puck.y - 1;
    }
}*/