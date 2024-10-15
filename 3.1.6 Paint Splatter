const CIRCLES_PER_SPLATTER = 20;
const MIN_RADIUS = 5;
const MAX_RADIUS = 25;
const DELAY = 500;

function paint(){
    let color = Randomizer.nextColor();
    for(let i = 0; i<CIRCLES_PER_SPLATTER; i++){
        let radius = Randomizer.nextInt(MIN_RADIUS, MAX_RADIUS);
        let x = Randomizer.nextInt(0, getWidth());
        let y = Randomizer.nextInt(0, getHeight());
        
        let circ = new Circle(radius);
        circ.setColor(color);
        circ.setPosition(x, y);
        add(circ);
    }
}

function main() {
   setTimer(paint, DELAY);
}

main();
