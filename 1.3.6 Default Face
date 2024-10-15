function drawHead(x = radius, y = radius, radius = 100, color = "yellow"){
    let circ = new Circle(radius);
    circ.setPosition(x, y);
    circ.setColor(color);
    add(circ);
}

function drawEyes(x, y, radius = 15, color){
    for(let i=0; i<2; i++){
        let circ = new Circle(radius);
        circ.setColor(color);
        if(i==0){
            circ.setPosition(x - 20, y);
        } else {
            circ.setPosition(x + 20, y);
        }
        add(circ);
    }
}

function drawMouth(x = width, y = width, width, height, color = "blue"){
    let rec = new Rectangle(width, height);
    rec.setPosition(x, y);
    rec.setColor(color);
    add(rec);
}

function main() {
    drawHead(getWidth()/2, getHeight()/2, 100, "yellow");
    drawEyes(getWidth()/2, getHeight()/2, 8, "black");
    drawMouth(getWidth()/2, (getHeight()/2) + 30, 20, 10, "red");
}

main();
