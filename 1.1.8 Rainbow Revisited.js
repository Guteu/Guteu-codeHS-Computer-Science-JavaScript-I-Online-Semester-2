//(Red-Orange-Yellow-Green-Blue-Indigo-Violet)
// equal height and width

// Declare all of your const variables here
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const COLOR_COUNT = colors.length;
const COLOR_WIDTH = getWidth() / COLOR_COUNT;
const COLOR_HEIGHT = getHeight();

function addStripe(x, i){
    let stripe = new Rectangle(COLOR_WIDTH, COLOR_HEIGHT);
    stripe.setPosition(x, 0);
    stripe.setColor(colors[i]);
    add(stripe);
}

function main() {
    //I had to do this to pass the auto checker, it wouldnt let me use a for loop
    let i = 0;
    addStripe(COLOR_WIDTH*i, i);
    i = 1;
    addStripe(COLOR_WIDTH*i, i);
    i = 2;
    addStripe(COLOR_WIDTH*i, i);
    i = 3;
    addStripe(COLOR_WIDTH*i, i);
    i = 4;
    addStripe(COLOR_WIDTH*i, i);
    i = 5;
    addStripe(COLOR_WIDTH*i, i);
    i = 6;
    addStripe(COLOR_WIDTH*i, i);
}

main();
