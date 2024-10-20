let lineX;
let lineY;
function initLines(){
    lineX = new Line(0, getHeight()/2, getWidth(), getHeight()/2);
    add(lineX);
    
    lineY = new Line(getWidth()/2, 0, getWidth()/2, getHeight());
    add(lineY);
}

function updateLines(e){
    lineX.setPosition(0, e.getY());
    lineX.setEndpoint(getWidth(), e.getY());
    
    lineY.setPosition(e.getX(), 0);
    lineY.setEndpoint(e.getX(), getHeight());
}

function addCircle(e){
    let circ = new Circle(10);
    circ.setPosition(e.getX(), e.getY());
    circ.setColor("red");
    add(circ);
}

function main(){
	initLines();
	mouseMoveMethod(updateLines);
	mouseClickMethod(addCircle);
}

main();
