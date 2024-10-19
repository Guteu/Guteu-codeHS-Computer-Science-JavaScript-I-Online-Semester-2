const POLE_WIDTH = 5;
const LIGHT_RADIUS = 10;
const LIGHT_REQUIRED_HEIGHT = 200;

function drawLightPole(poleX, poleY, poleHeight, bw){
    var pole = new Rectangle(POLE_WIDTH, poleY/6);
    pole.setPosition(poleX + bw/2 -(POLE_WIDTH/2), getHeight()-poleY-(poleY/6));
    add(pole);
    var light = new Circle(LIGHT_RADIUS);
    light.setPosition(poleX + bw/2, getHeight()-poleY-(poleY/6));
    light.setColor(Color.GREEN);
    add(light);
    
}

function drawBuilding(buildingWidth, buildingHeight, buildingX){
    let building = new Rectangle(buildingWidth, buildingHeight);
    building.setPosition(buildingX, getHeight() - buildingHeight);
    add(building);
    if(buildingHeight > LIGHT_REQUIRED_HEIGHT){
        drawLightPole(buildingX, buildingHeight, buildingHeight, buildingWidth);
    }
}

function main() {
    //drawBuilding(width, height, X);
	drawBuilding(50, 150, 175);
	drawBuilding(100, 350, 225);

	// Add some more buildings!
	drawBuilding(80, 210, 100);
}

main();
