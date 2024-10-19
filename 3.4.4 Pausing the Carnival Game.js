// Copy your code from Carnival Game here:
const CENTER_X = getWidth() / 2;
const CENTER_Y = getHeight() / 2;
const WIDTH = 30;
const HEIGHT = 50;
const INIT_COLOR = "yellow";
const BACKGROUND_X = CENTER_X - 75;
const DELAY = 20;

// Vertical zones that will determine the color of the weight
const ZONE_1 = getHeight() - (getHeight() / 4);
const ZONE_2 = getHeight() - (getHeight() / 4) * 2;
const ZONE_3 = getHeight() - (getHeight() / 4) * 3;
const ZONE_4 = 0;

let weight;
let dy = -10;
let paused = false;

let goingUp = true;

function main(){
    createBackground();
    
    // Creates and initializes the weight that will move in the game
    weight = initRect(WIDTH, HEIGHT, INIT_COLOR, CENTER_X - WIDTH / 2, CENTER_Y);
    setTimer(launch, DELAY);
    mouseClickMethod(pauseWeight);
}

// This function adds and initializes the rectangular weight
// that will move and bounce in the game
function initRect(width, height, color, x, y) {
    let rect = new Rectangle(width, height);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    
    return rect;
}

// This function adds the background image of the carinval game
function createBackground() {
    let background = new WebImage("https://codehs.com/uploads/4d907bf404396e93286113dd9c2421fe");
    background.setPosition(BACKGROUND_X, 0);
    add(background);
}

//animates the movement of the weight
function launch(){
    if(goingUp == true){
        weight.move(0, dy);
    } else {
        weight.move(0, -dy);
    }
    pickColor();
    checkCollision();
}

//sets the color of the weight depending on the ZONE that the weight is currently in.
function pickColor(){
    if(weight.getY() >= ZONE_4 && weight.getY() < ZONE_3){
        weight.setColor("red");
    } else if(weight.getY() >= ZONE_3 && weight.getY() < ZONE_2){
        weight.setColor("orange");
    } else if(weight.getY() >= ZONE_2 && weight.getY() < ZONE_1){
        weight.setColor("yellow");
    } else {
        weight.setColor("green");
    }
}

//checks to see if the bottom or top of the weight have collided with the bottom or top of the canvas.
function checkCollision(){
    if(weight.getY() < 0){
        goingUp = false;
    }
    if(weight.getY() +  HEIGHT > getHeight()){
        goingUp = true;
    }
}

// stops the weight on click
function pauseWeight(e){
    if(!paused){
        stopTimer(launch);
        paused = !paused;
    } else {
        setTimer(launch, DELAY);
        paused = !paused;
    }
    
}

main();
