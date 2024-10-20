const NUM_RECTANGLES_ACROSS = 4;
const NUM_RECTANGLES_DOWN = 10;

function initRectangles(){
    for(let i=0; i<NUM_RECTANGLES_DOWN; i++){
        for(let j=0; j<NUM_RECTANGLES_ACROSS; j++){
            let rect = new Rectangle(getWidth()/NUM_RECTANGLES_ACROSS, getHeight()/NUM_RECTANGLES_DOWN);
            rect.setPosition(j*rect.getWidth(), i*rect.getHeight());
            rect.setColor("white");
            add(rect);
        }
    }
}

function changeRectColor(e){
    let rect = getElementAt(e.getX(), e.getY());
    rect.setColor(Randomizer.nextColor());
}

function main() {
	initRectangles();
	mouseMoveMethod(changeRectColor);
}

main();
