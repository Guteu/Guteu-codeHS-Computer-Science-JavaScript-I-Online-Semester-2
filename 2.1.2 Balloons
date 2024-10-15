// This program draws some balloons

var minRadius = 20;
var maxRadius = 40;
var baloons = 25;
var y = getHeight()*(2/3);
var xFull = getWidth()-40;

function drawBalloons(x2,y2,radius){
    var line = new Line(getWidth()/2,y,x2,y2);
    add(line);
    var balloon = new Circle(radius);
    balloon.setColor(Randomizer.nextColor());
    balloon.setPosition(x2,y2);
    add(balloon);
}

function main() {
    //code here
    if(maxRadius > 40){
        maxRadius = 40;
    }
	for(var i = 0; i < baloons; i++){
	    var x2 = Randomizer.nextInt(40,xFull);
	    var y2 = Randomizer.nextInt(40, y-100);
	    var radius = Randomizer.nextInt(minRadius,maxRadius);
	    drawBalloons(x2,y2,radius);
	}
}

main();
