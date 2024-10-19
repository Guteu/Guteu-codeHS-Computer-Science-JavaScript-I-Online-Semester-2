let text;
function initText(){
    let txt = new Text("(0, 0)", "20pt Arial");
    txt.setPosition(0, txt.getHeight());
    add(txt);
    return txt;
}

function updateText(e){
    text.setText(`(${e.getX()}, ${e.getY()})`);
}

function main(){
	text = initText();
	mouseMoveMethod(updateText);
}

main();
