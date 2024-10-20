/* This program allows a user to click and drag two emojis
on the canvas. */

const SMILE = "https://codehs.com/uploads/12b0571f618189dccc5805d693b086f9";
const SAD = "https://codehs.com/uploads/c9c792a981fdec13eea79a114507087b";
const ANGRY = "https://codehs.com/uploads/aa37fcaabcce0352e310b339be91d74d";
const WINK = "https://codehs.com/uploads/33b04f30d26a6cff97ce6524afbf32ff";
const SURPRISED = "https://codehs.com/uploads/2adf43ea46d79ed78af4fd141e03e99b";
const EMOJI_SIZE = 100;

let curElem = null;

function main(){
    // This initializes two random emojis on the canvas
    initEmoji(EMOJI_SIZE);
    initEmoji(EMOJI_SIZE);

	// Create your mouse event calls here:
	mouseDownMethod(select);
	mouseDragMethod(drag);
	mouseUpMethod(release);
}

// This function adds a random emoji to the canvas
function initEmoji(size) {
    let x = Randomizer.nextInt(0, getWidth() - size);
    let y = Randomizer.nextInt(0, getHeight() - size);
    let num = Randomizer.nextInt(1, 5);
    let image;
    
    if (num == 1) {
        image = SMILE;
    } else if (num == 2) {
        image = SAD;
    } else if (num == 3) {
        image = ANGRY;
    } else if (num == 4) {
        image = WINK;
    } else if (num == 5) {
        image = SURPRISED;
    }
    
    let emoji = new WebImage(image);
    emoji.setPosition(x, y);
    emoji.setSize(size, size);
    add(emoji);
}

// Create your helper functions here:
function select(e){
    curElem = getElementAt(e.getX(), e.getY());
}

function drag(e){
    if(curElem != null){
        curElem.setPosition(e.getX(), e.getY());
    }
}

function release(e){
    curElem = null;
}


main();
