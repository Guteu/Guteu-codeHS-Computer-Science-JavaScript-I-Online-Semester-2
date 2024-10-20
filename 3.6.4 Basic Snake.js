const DELAY = 200;

const SNAKE_SIZE = 20;
const SNAKE_COLOR = "green";

let snake;

let direction = "right";
let speed = 0;
let dx = speed;
let dy = 0;

function initSnake(){
    snake = new Rectangle(SNAKE_SIZE, SNAKE_SIZE);
    snake.setPosition(getWidth()/2 - SNAKE_SIZE/2 , getHeight()/2 - SNAKE_SIZE/2);
    snake.setColor(SNAKE_COLOR);
    add(snake);
}

function updateDirection(e){
    let key = e.key;

    //get key
    if(key == "ArrowUp" || key == "w"){
        direction = "up";
    } else if(key == "ArrowDown" || key == "s"){
        direction = "down";
    } else if(key == "ArrowLeft" || key == "a"){
        direction = "left";
    } else if(key == "ArrowRight" || key == "d"){
        direction = "right";
    }
    
    //change speed
    if(direction == "up"){
        dx = 0;
        dy = -speed;
    } else if(direction == "down"){
        dx = 0;
        dy = speed;
    } else if (direction == "left"){
        dx = -speed;
        dy = 0;
    } else { //right
        dx = speed;
        dy = 0;
    }
}

function moveSnake(e){
    snake.move(dx, dy);
}

function main(){
    initSnake();
	keyDownMethod(updateDirection);
	setTimer(moveSnake, DELAY);
}

main();
