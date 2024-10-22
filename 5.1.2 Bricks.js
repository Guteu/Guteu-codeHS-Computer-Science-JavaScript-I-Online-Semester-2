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

const BALL_RADIUS = 15;

const colors = ["red", "yellow", "green", "blue"];

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
        if (i%2 == 1 && i!==0){
            color_count++;
            if(color_count == 4){
                color_count = 0;
            }
        }
    }
}

function main() {
	createBricks();
}

main();
