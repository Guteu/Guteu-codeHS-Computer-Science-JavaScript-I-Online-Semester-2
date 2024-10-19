const BRICK_WIDTH = 50;
const BRICK_HEIGHT = 20;
const bricksPerRow = getWidth()/BRICK_WIDTH;
const bricksPerColumn = getHeight()/BRICK_HEIGHT;
let countX = 0;
let countY = 1;

function runBricks(){
    if(countX == bricksPerRow){
        countY++;
        countX = 0;
    }
    if(countY > bricksPerColumn){
        stopTimer(drawBrick);
    } else {
        drawBrick(BRICK_WIDTH, BRICK_HEIGHT, BRICK_WIDTH * countX, getHeight() - BRICK_HEIGHT * countY);
    }
    countX++;
}

function drawBrick(width, height, x, y){
    let brick = new Rectangle(width, height);
    brick.setPosition(x, y);
    brick.setColor(Color.randomRed());
    add(brick);
}

function main() {
    setTimer(runBricks, 50);

}

main();
