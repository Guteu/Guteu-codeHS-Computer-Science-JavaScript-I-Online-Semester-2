const RADIUS = 25;
const DELAY = 40;
let ball1;
let ball2;
let colided = false;

function initBall(color, x){
    let ball = new Circle(RADIUS);
    ball.setColor(color);
    ball.setPosition(x, getHeight()/2);
    add(ball);
    
    return ball;
}

function moveBalls(){
    if(checkCollision()){
        ball1.move(-4, 0);
        ball2.move(4, 0);
    } else {
        ball1.move(4, 0);
    }
}

function checkCollision(){
    if(ball1.getX() > ball2.getX() - 2*RADIUS){
        colided = true;
    }
    
    return colided;
}

function main(){
	ball1 = initBall("red", 50);
	ball2 = initBall("orange", getWidth()/2);
	setTimer(moveBalls, DELAY);
}

main();
