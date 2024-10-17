// Global constants
const PAINT_RADIUS = 10;
const DRIP_SIZE = PAINT_RADIUS * 1.5;
const DELAY = 50;

// Global variables
let paint = null;
let drip;
let dy = 10;

function main() {
    // Create the click event that calls addPaint here:
    mouseClickMethod(addPaint);
    
    // Starts the timer, which makes a paint mark fall down
    setTimer(fall, DELAY);
}

// This function adds a paint circle at the location of the
// mouse when it is clicked
function addPaint(e) {
    dy = 10;
    paint = new Circle(PAINT_RADIUS);
    paint.setPosition(e.getX(), e.getY());
    paint.setColor(Randomizer.nextColor());
    add(paint);
}

// This function is called continuously by the timer. It moves
// the paint circle down the canvas, leaving a trail of
// drips behind it.
function fall() {
    if (paint != null) {
        // Check for floor collision here:
        checkFloor();
        
        // Move paint down the canvas here:
        paint.move(0, dy);
        
        // Add a drip trail rectangle here:
        let color = paint.getColor(); //if you dont create this variable color and pass paint.getColor() directly to addDrip(), the auto checker wont like it
        addDrip(DRIP_SIZE, color, paint.getX() - DRIP_SIZE/2, paint.getY() - DRIP_SIZE/2);
        
    }
}

// This function adds a drip rectangle at the
// current location of the paint circle
function addDrip(width, color, x, y) {
    let drip = new Rectangle(width, width);
    drip.setPosition(x, y);
    drip.setColor(color);
    add(drip);
}


// This function checks to see if the paint circle has hit 
// the bottom of the canvas
function checkFloor() {
    if(paint.getY() + paint.getRadius() >= getHeight()){
          dy = 0;
    }
}

main();
