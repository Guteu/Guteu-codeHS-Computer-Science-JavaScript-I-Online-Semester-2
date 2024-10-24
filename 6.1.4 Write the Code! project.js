/*
2 player ping pong game

controls:
a = red move left
s = red stop
d = red move right

j = blue move left
k = blue stop
l = blue move right
*/

//paddle variables and constants
const PADDLE_HEIGHT = 15;
const PADDLE_WIDTH = 90;
const PADDLE_OFFSET = 20;
const PADDLE_SPEED = 4;
let p1dx = 0;
let p2dx = 0;
let paddle1;
let paddle1LastMove = "right"; //determines the side the ball will go after colliding with the paddle
let paddle2;
let paddle2LastMove = "right";

//ball variables and constants
const BALL_RADIUS = 15;
let ballSpeedX = 3;
let ballSpeedY = 4;
let ball;
let bdx = 0;
let bdy;

//game variables and constants


function chooseStarter(){
    const starter = Randomizer.nextInt(0, 1); //0 for blue, 1 for red
    if(starter == 0){//blue
        bdy = -ballSpeedY;
    } else {
        bdy = ballSpeedY;
    }
}

function addPaddles(){
    paddle1 = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle1.setPosition(getWidth()/2 - PADDLE_WIDTH/2, getHeight() - PADDLE_OFFSET - PADDLE_HEIGHT);
    paddle1.setColor("red");
    add(paddle1);
    
    paddle2 = new Rectangle(PADDLE_WIDTH, PADDLE_HEIGHT);
    paddle2.setPosition(getWidth()/2 - PADDLE_WIDTH/2, PADDLE_HEIGHT);
    paddle2.setColor("blue");
    add(paddle2);
}

function addBall(){
    ball = new Circle(BALL_RADIUS);
    ball.setPosition(getWidth()/2, getHeight()/2);
    add(ball);
}


function changePaddleDirection(e){
    let key = e.key;
    changePaddle1Direction(key);
    changePaddle2Direction(key);
}

function movePaddles(){
    checkPaddlesLocation();
    paddle1.move(p1dx, 0);
    paddle2.move(p2dx, 0);
}
function checkPaddlesLocation(){
    //paddle1
    if(paddle1.getX() <= 0){
        p1dx = 1;
    }
    if(paddle1.getX() + paddle2.getWidth() >= getWidth()){
        p1dx = -1;
    }
    
    //paddle2
    if(paddle2.getX() <= 0){
        p2dx = 1;
    }
    if(paddle2.getX() + paddle2.getWidth() >= getWidth()){
        p2dx = -1;
    }
}

function changePaddle1Direction(key){
    if(key == "a"){
        paddle1LastMove = "left";
        if(paddle1.getX() > 0){
            p1dx = -PADDLE_SPEED;
        }
    } else if(key == "d"){
        paddle1LastMove = "right";
        if(paddle1.getX() + paddle1.getWidth() < getWidth()){
            p1dx = PADDLE_SPEED;
        }
    } else if(key == "s"){
        p1dx = 0;
    }
}
function changePaddle2Direction(key){
    if(key == "j"){
        paddle2LastMove = "left";
        if(paddle2.getX() > 0){
            p2dx = -PADDLE_SPEED;
        }
    } else if(key == "l"){
        paddle2LastMove = "right";
        if(paddle2.getX() + paddle2.getWidth() > getWidth()){
            p2dx = 0;
        } else {
            p2dx = PADDLE_SPEED;
        }
    } else if(key == "k"){
        p2dx = 0;
    }
}

function moveBall(){
    ballCollisions();
    ball.move(bdx, bdy)
}

function ballCollisions(){
    // Bounce off right wall
    if(ball.getX() + ball.getRadius() >= getWidth()){
    	bdx = -bdx;
    }
    // Bounce off left wall
    if(ball.getX() - ball.getRadius() < 0){
    	bdx = -bdx;
    }
    
    // Bounce off paddle1
    if(ball.getY() + ball.getRadius() >= paddle1.getY() && (ball.getX() + ball.getRadius() > paddle1.getX() && ball.getX() - ball.getRadius() < paddle1.getX() + paddle1.getWidth())){
        speedUpBall();
        bdy = -ballSpeedY;
        bdx = checkNextX(1);
    }
    // Bounce off paddle2
    if(ball.getY() - ball.getRadius() <= paddle2.getY() + paddle2.getHeight() && (ball.getX() + ball.getRadius() > paddle2.getX() && ball.getX() - ball.getRadius() < paddle2.getX() + paddle2.getWidth())){
        speedUpBall();
        bdy = ballSpeedY;
        bdx = checkNextX(2);
    }
    
    // lose when ball on top wall
    if(ball.getY() - ball.getRadius() < 0){
        bdy = 0;
        bdx = 0;
        endGame(2);
        stopTimer(moveBall);
    }
    // lose when ball on bottom wall
    if(ball.getY() + ball.getRadius() >= getHeight()){
        bdy = 0;
        bdx = 0;
        endGame(1);
        stopTimer(moveBall);
    }
}

function checkNextX(paddle){
    if(paddle == 1){
        if(paddle1LastMove == "left"){
            return -ballSpeedX;
        } else {
            return ballSpeedX;
        }
    } else {
        if(paddle2LastMove == "left"){
            return -ballSpeedX;
        } else {
            return ballSpeedX;
        }
    }
}

function speedUpBall(){
    ballSpeedX = ballSpeedX + 0.1;
    ballSpeedY = ballSpeedY + 0.3;
}

function endGame(loser){
    let bg = new Rectangle(getWidth(), getHeight());
    bg.setPosition(0, 0);
    bg.setColor("white");
    bg.layer = 100;
    add(bg);
    
    let endText = new Text("", "16pt Arial");
    endText.layer = 101;
    if(loser == 1){ //1 = red(p1), 2 = blue(p2)
        endText.setText("Blue wins");
    } else {
        endText.setText("Red wins");
    }
    endText.setPosition(getWidth()/2 - endText.getWidth()/2, getHeight()/2);
    add(endText);
}

function main(){
    addPaddles();
    addBall();
    chooseStarter();
    
    //make the ball move after 1 second
	setTimeout(() => {
        setTimer(moveBall, 16.6); //16.6 == 60fps
        setTimer(movePaddles, 16.6);
    }, 1000);
    
    keyDownMethod(changePaddleDirection);
}

main();
