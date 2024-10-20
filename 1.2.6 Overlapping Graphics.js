/* This program creates rectangle graphics, but before adding them
to the Canvas, it checks to see if the anchor position is overlapping
with any previously add shapes. If so, it lets the user know which
shape(s) was not added. */

function main() {
    // This should result in two rectangles:
    drawRect(50, 50, 100, 200, "green");
    drawRect(60, 70, 150, 30, "yellow");
    drawRect(160, 100, 30, 30, "purple");
    drawRect(100, 200, 75, 30, "orange");
    
    // Add your own rectangles here:
    
}

// This function draws a rectangle with the parameters. Before adding
// to the Canvas, it checks to see if its anchor position is overlapping 
// with any previously drawn shapes.
function drawRect(x, y, w, h, color) {
    let rect = new Rectangle(w, h);
    rect.setPosition(x, y);
    rect.setColor(color);
    
    // Before adding rectangle to Canvas, it checks to see if its
    // (x, y) anchor position is overlapping with any shape on the canvas
    if(isGraphicsObject(x, y)) {
        console.log(color + " rectangle was not drawn.");
        console.log("Its anchor is overlapping with another rectangle.");
        console.log();
    } else {
        add(rect);
    } 
}

// Define the isGraphicsObject function here:
function isGraphicsObject(x, y){
    if(getElementAt(x, y)){
        return true;
    } else {
        return null;
    }
}

main();
