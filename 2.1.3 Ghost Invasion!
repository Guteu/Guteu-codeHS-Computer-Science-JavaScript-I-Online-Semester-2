// Constants for main ghost body
const HEAD_RADIUS = 35;
const BODY_WIDTH = HEAD_RADIUS * 2;
const BODY_HEIGHT = 60;
const NUM_FEET = 3;
const FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2); 

// Constants for eyes
const PUPIL_RADIUS = 4;
const PUPIL_LEFT_OFFSET = 8; // This is how far left the pupil should be from the center of the ghost
const PUPIL_RIGHT_OFFSET = 20; // This is how far right the pupil should be from the center of the ghost
const EYE_RADIUS = 10;
const EYE_OFFSET = 14; // This is how far left or right the eye should be from the center of the ghost

const MIN_SIZE = 1;
const MAX_SIZE = readInt("Max size: ");
const NUM_GHOSTS = readInt("How many ghosts? ");

/* Write a comment here about your overall program */
function main() {
	// Write your code here
	for(let i=0; i<NUM_GHOSTS; i++){
	    let size = Randomizer.nextInt(MIN_SIZE, MAX_SIZE);
	    let centerX = Randomizer.nextInt(0, getWidth());
	    let centerY = Randomizer.nextInt(0, getHeight());
	    let color = Randomizer.nextColor();
	    drawGhost(size, centerX, centerY, color);
	}
}

function drawHead(size, centerX, centerY, color){
    let head = new Circle(HEAD_RADIUS * size);
    head.setColor(color);
    head.setPosition(centerX, centerY);
    add(head);
}

function drawBody(size, centerX, centerY, color){
    let body = new Rectangle(BODY_WIDTH * size, BODY_HEIGHT * size);
    body.setColor(color);
    body.setPosition(centerX - HEAD_RADIUS * size,centerY);
    add(body);
}

function drawEyes(size, centerX, centerY){
    for(let i = -1; i<2; i= i+2){
        let eye = new Circle(EYE_RADIUS * size);
        eye.setPosition(centerX - (EYE_OFFSET * i) * size, centerY);
        eye.setColor("white");
        add(eye);
    }
    
    for(let i = -1; i<2; i= i+2){
        let pupil = new Circle(PUPIL_RADIUS * size);
        if(i == -1){
            pupil.setPosition(centerX - (PUPIL_RIGHT_OFFSET * i) * size, centerY);
        } else {
            pupil.setPosition(centerX - (PUPIL_LEFT_OFFSET * i) * size, centerY);
        }
        pupil.setColor("cyan");
        add(pupil);
    }
}

function drawFeet(size, centerX, centerY, color){
    let fr = FOOT_RADIUS * size;
    for(let i = 0; i<NUM_FEET; i++){
        let foot = new Circle(fr);
        foot.setPosition((centerX - HEAD_RADIUS * size) + (fr * (i+1) + (fr * (i))), centerY + BODY_HEIGHT*size);
        
        foot.setColor(color);
        add(foot);
    }
}


function drawGhost(size, centerX, centerY, color) {
    drawHead(size, centerX, centerY, color);
    drawBody(size, centerX, centerY, color);
    drawEyes(size, centerX, centerY, color);
    drawFeet(size, centerX, centerY, color)
}

main();
