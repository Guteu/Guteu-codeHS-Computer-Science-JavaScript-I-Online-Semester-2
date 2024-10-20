const HAND = "https://codehs.com/uploads/780e1811c17d88d80893e5987bb459ee";

//inits
let obstacle;
let pointer;
let player;
let scoreTxt;
let score = 0;

let playerSpeed = 3;
//player(grass) dx and dy
let dxP = 0;
let dyP = 0;
let direction = "right";

//sheep dx and dy
let dx = 2;
let dy = 2;

function initBackground(){
    let bg = new Rectangle(getWidth(), getHeight())
    bg.setColor("#3f9b0b");
    add(bg);
}

function initObstacle(image, width, height, x, y){
    let obs = new WebImage(image);
    obs.setSize(width, height);
    obs.setPosition(x, y);
    obs.layer = 10;
    add(obs);
    
    return obs;
}

function initPlayer(){
    let size = 40;
    player = new Rectangle(size, size);
    player.setPosition(getWidth()/2 - size/2 , getHeight()/2 - size/2);
    player.setColor("green");
    add(player);
}

function initPointer(){
    document.querySelector("body > canvas").style.cursor = "none";
    pointer = new WebImage(HAND);
    pointer.setPosition(0, 0);
    pointer.layer = 100;
    add(pointer);
}

function initScore(){
    scoreTxt = new Text("Score: 0", "20pt Arial");
    scoreTxt.setPosition(0, scoreTxt.getHeight());
    scoreTxt.layer = 50;
    add(scoreTxt);
}

function updateScore(){
    score++;
    scoreTxt.setText(`Score: ${score}`);
}

function movePointer(e){
    pointer.setPosition(e.getX() + 1, e.getY() +1 );
}

function run(){
    checkCollision();
    obstacle.move(dx, dy);
}

function checkCollision(){
    // Bounce off right wall
	if(obstacle.getX() + obstacle.getWidth() >= getWidth()){
	    obstacle.setRotation(180);
		dx = -dx;
	}
	// Bounce off left wall
	if(obstacle.getX() < 0){
	    obstacle.setRotation(0);
		dx = -dx;
	}
	
	// Bounce off top wall
	if(obstacle.getY() < 0){
	    dy = -dy;
	}
	// Bounce off bottom wall
	if(obstacle.getY() + obstacle.getHeight() >= getHeight()){
	    dy = -dy;
	}
}

function checkPlayerCollision(){
    // right wall
	if(player.getX() + player.getWidth() >= getWidth()){
        player.setPosition(getWidth() - player.getWidth(), player.getY());
	}
	// left wall
	if(player.getX() <= 0){
		player.setPosition(0, player.getY());
	}
	
	// top wall
	if(player.getY() < 0){
	    player.setPosition(player.getX(), 0);
	}
	// bottom wall
	if(player.getY() + player.getHeight() >= getHeight()){
	    player.setPosition(player.getX(), getHeight() - player.getHeight());
	}
}

let droplets = 0;
function addItem(){
    let radius = 40;
    let x = Randomizer.nextInt(radius, getWidth() - radius);
    let y = Randomizer.nextInt(radius, getHeight() - radius);
    
    //WD = water droplets
    let WD = new Circle(20);
    WD.setPosition(x, y);
    WD.setColor("#0E87CC");
    WD.layer = 5;
    add(WD);
    droplets++;
    if(droplets > 9){
        stopTimer(addItem);
        alert("You lose");
        score = score - 10;
    }
}

function collectDrop(e){
    let graphic = getElementAt(e.getX(), e.getY());
    if(graphic != null){
        if(graphic.type == "Circle"){
            dx = dx + dx/8;
            dy = dy + dy/16
            remove(graphic);
            droplets--;
            updateScore();
        }
    }
}

function playerControl(e){
    let key = e.key;

    //get key
    if(key == "ArrowUp" || key == "w"){
        direction = "up";
    } else if(key == "ArrowDown" || key == "s"){
        direction = "down";
    } else if(key == "ArrowLeft" || key == "a"){
        direction = "left";
    } else if(key == "ArrowRight" || key == "d"){
        direction = "right";
    } else if(key == " " || key == "e"){
        direction = "none";
    }
    
    //change playerSpeed
    if(direction == "none") {
        dxP = 0;
        dyP = 0;
    } else if(direction == "up"){
        dxP = 0;
        dyP = -playerSpeed;
    } else if(direction == "down"){
        dxP = 0;
        dyP = playerSpeed;
    } else if (direction == "left"){
        dxP = -playerSpeed;
        dyP = 0;
    } else { //right
        dxP = playerSpeed;
        dyP = 0;
    }
}
function stopPlayer(){
    
}

function movePlayer(){
    checkPlayerCollision();
    player.move(dxP, dyP);
}

function main(){
    alert("Controls:\ns/ Arrow up = up\n s/Arrow Down = down\n a/Arrow left = left\n d/Arrow right = right\n e/space = stop")
    
    const RIGHT_SHEEP = "https://codehs.com/uploads/75f314be2357647fa8077d17f1285345";
    const SHEEP_WIDTH = 80;
    const SHEEP_HEIGHT = SHEEP_WIDTH * (322 / 500);
    
    initBackground();
    obstacle = initObstacle(RIGHT_SHEEP, SHEEP_WIDTH, SHEEP_HEIGHT, 0, 0);
    initPointer();
    initPlayer();
    initScore();
    
    setTimer(run, 1);
    setTimer(addItem, Randomizer.nextInt(2000, 5000));
    setTimer(movePlayer, 1);
    
    mouseClickMethod(collectDrop);
    mouseMoveMethod(movePointer);
    
    keyDownMethod(playerControl);
    keyUpMethod()
}

main();
