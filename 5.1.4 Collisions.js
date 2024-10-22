/* Constants for bricks */
const NUM_ROWS = 8;
const BRICK_TOP_OFFSET = 10;
const BRICK_SPACING = 2;
const NUM_BRICKS_PER_ROW = 10;
const BRICK_HEIGHT = 10;
const SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
const BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;

const colors = ["red", "yellow", "green", "blue"];

/* Constants for ball and paddle */
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 15;
const PADDLE_OFFSET = 10;
let paddle;

const BALL_RADIUS = 15;
let ball;
let bdx = Randomizer.nextInt(-4, 4);
if(bdx == 0){
    bdx = 3;
}
let bdy = 3;

let scoreTxt;
let score = 0;

//create bricks
function createBricks(){
    let color_count = 0
    for(let i=0; i<NUM_ROWS; i++){
        for(let j=0; j<NUM_BRICKS_PER_ROW; j++){
            let x = (j+1) * BRICK_SPACING + (j * BRICK_WIDTH);
            let y = BRICK_TOP_OFFSET + (i * BRICK_HEIGHT + (BRICK_SPACING * (i+1)));
            let brick = new Rectangle(BRICK_WIDTH, BRICK_HEIGHT);
            brick.setPosition(x, y);
            brick.setColor(colors[color_count]);
            add(brick);
        }
        //color for the bricks (works if you add more rows)
        if (i%2 == 1 && i!==0){
            color_count++;
            if(color_count == 4){
                color_count = 0;
            }
        }
    }
}

//init score
function initScore(){
    scoreTxt = new Text("Score: 0", "20pt Arial");
    scoreTxt.setPosition(getWidth()/2 - scoreTxt.getWidth()/2, getHeight()/2);
    scoreTxt.layer = 50;
    add(scoreTxt);
}
//update score
function updateScore(){
    score++;
    scoreTxt.setText(`Score: ${score}`);
}

//init lose screen (pops up when you lose);
function initLoseScreen(){
    remove(ball);
    remove(paddle);
    
    let bg = new Rectangle(getWidth(), 300);
    bg.setColor("white");
    bg.setPosition(0, 0);
    bg.layer = 100;
    add(bg);
    
    let txt = new Text(`You lost! Your final score was ${score}`, "18pt Arial");
    txt.setPosition(getWidth()/2 - txt.getWidth()/2, getHeight()/2);
    txt.layer = 101;
    add(txt);
}

//add the ball
function addBall(){
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(getWidth()/2, getHeight()/2);
    add(ball);
}

//function that bounces the ball and moves it
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
    // lose when ball on bottom wall
    if(ball.getY() + ball.getRadius() >= getHeight()){
        bdy = 0;
        bdx = 0;
        initLoseScreen();
        stopTimer(bounceBall);
    }
    // Bounce off paddle
    if(ball.getY() + ball.getRadius() >= paddle.getY() && (ball.getX() + ball.getRadius() > paddle.getX() && ball.getX() - ball.getRadius() < paddle.getX() + paddle.getWidth())){
        bdy = -bdy;
    }
    // Bounce off brick and delete it
    if(checkBrickCollision()){
        bdy = -bdy;
    }
    
    //move the ball
    ball.move(bdx, bdy);
}

//check if the ball collides with a brick
function checkBrickCollision(){
    let collision = getElementAt(ball.getX(), ball.getY() - ball.getRadius());
    if(collision != null){
        if(collision.getType() == "Rectangle"){
            updateScore();
            remove(collision); //remove a brick if collides with the ball
            return true;
        }
    }
    return false;
}

//add the paddle
function addPaddle(){
    paddle = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle.setPosition(getWidth()/2 - PADDLE_WIDTH/2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    add(paddle);
}

//make the paddle move according to mouse movement
function movePaddle(e){
    if(!(e.getX() + paddle.getWidth()/2 >= getWidth()) && !(e.getX() - paddle.getWidth()/2 <= 0)){
        paddle.setPosition(e.getX() - PADDLE_WIDTH/2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    }
}

function main() {
    //init the game objects
	createBricks();
	addBall();
	addPaddle();
	initScore();
	
	//move the paddle
	mouseMoveMethod(movePaddle);
	
	//make the ball move after 1 second
	setTimeout(() => {
        setTimer(bounceBall, 1);
    }, 1000);
}

main();
