/* This program draws a growing circle that stops when it 
reaches the height of the canvas. */

const START_RADIUS = 1;
const INCREMENT = 1;
const CHANGE_COLORS_AT = 10;
const DELAY = 50;

let circ;

function initCircle(){
    let circ = new Circle(START_RADIUS);
    circ.setPosition(getWidth()/2, getHeight()/2);
    circ.setColor("red");
    add(circ);
    
    return circ;
}

function growCircle(){
    let radius = circ.getRadius();
    if(radius*2 == getHeight()){
        stopTimer(growCircle);
    }
    if(radius%CHANGE_COLORS_AT == 0){
        let color = Randomizer.nextColor();
        circ.setColor(color);
    }
    
    circ.setRadius(radius + INCREMENT);
}

function main(){
    circ = initCircle();
    setTimer(growCircle, DELAY);
}

main();
