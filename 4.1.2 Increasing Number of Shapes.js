const DELAY = 1000;
const CIRCLE_RADIUS = 25;
const BUFFER = 50;

let numShapes = 1;

function addShapes(e){
    let color = Randomizer.nextColor();
    for(let i=0; i< numShapes; i++){
        let shape;
        let x;
        let y;
        if(numShapes%2 == 0){
            shape = new Circle(CIRCLE_RADIUS);
            x = Randomizer.nextInt(BUFFER + shape.getRadius(), getWidth() - shape.getRadius() - BUFFER);
            y = Randomizer.nextInt(BUFFER + shape.getRadius(), getHeight()- shape.getRadius() - BUFFER);
        } else {
            shape = new Rectangle(CIRCLE_RADIUS*2, CIRCLE_RADIUS*2);
            x = Randomizer.nextInt(BUFFER, getWidth() - shape.getWidth() - BUFFER);
            y = Randomizer.nextInt(BUFFER, getHeight()- shape.getWidth() - BUFFER);
        }
        shape.setPosition(x, y);
        shape.setColor(color);
        add(shape);
    }
    numShapes++;
}

function main() {
    console.log("main")
    setTimer(addShapes, DELAY);
}

main();
