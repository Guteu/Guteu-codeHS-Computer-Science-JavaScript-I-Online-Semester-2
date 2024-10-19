const radius = 20;
let CB;

const MinXtpArea = 0 + radius;
const MaxXtpArea = getWidth() - radius;
const MinYtpArea = 0 + radius;
const MaxYtpArea = getHeight() - radius;


function initBall(){
    let ball = new Circle(radius);
    ball.setPosition(getWidth(), getHeight());
    ball.setColor("red");
    add(ball);
    
    return ball;
}

function changeBall(){
    let x = Randomizer.nextInt(MinXtpArea, MaxXtpArea);
    let y = Randomizer.nextInt(MinYtpArea, MaxYtpArea);
    let color = Randomizer.nextColor();
    
    CB.setPosition(x, y);
    CB.setColor(color);
}

function main() {
	CB = initBall();
	setTimer(changeBall, 100);
}

main();
