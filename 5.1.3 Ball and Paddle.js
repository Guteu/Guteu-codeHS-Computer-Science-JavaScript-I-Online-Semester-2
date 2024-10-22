/* Constants for bricks */
const NUM_ROWS = 8;
const BRICK_TOP_OFFSET = 10;
const BRICK_SPACING = 2;
const NUM_BRICKS_PER_ROW = 10;
const BRICK_HEIGHT = 10;
const SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
const BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;

/* Constants for ball and paddle */
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 15;
const PADDLE_OFFSET = 10;
let paddle;

const BALL_RADIUS = 15;
let ball;
let bdx = Randomizer.nextInt(-3, 3);
let bdy = 4;

function addBall(){
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(getWidth()/2, getHeight()/2);
    add(ball);
}

function bounceBall(){
    // Bounce off right wall
    if(ball.getX() + ball.getRadius() >= getWidth()){
    	bdx = -bdx;
    }
    // Bounce off left wall
    if(ball.getX() - ball.getRadius() < 0){
    	bdx = -bdx;
    }
    // Bounce off top wall
    if(ball.getY() - ball.getRadius() < 0){
        bdy = -bdy;
    }
    // Bounce off bottom wall
    if(ball.getY() + ball.getRadius() >= getHeight()){
        bdy = -bdy;
    }
    ball.move(bdx, bdy);
}

function addPaddle(){
    paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.setPosition(getWidth()/2 - PADDLE_WIDTH/2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    add(paddle);
    
}

function movePaddle(e){
    paddle.setPosition(e.getX() - PADDLE_WIDTH/2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
}

function main() {
	addBall();
	addPaddle();
	
	mouseMoveMethod(movePaddle);
	setTimer(bounceBall, 1);
}

main();
