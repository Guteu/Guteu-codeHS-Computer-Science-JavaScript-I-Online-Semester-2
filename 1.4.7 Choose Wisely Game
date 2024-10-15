let lives = 5;

function updateLives(choice, a, b, c){
    if(choice == "a"){
        lives = lives + a;
    } else if(choice == "b"){
        lives = lives + b;
    } else {
        lives = lives + c;
    }
}

function eatChoice(){
    let a = -1;
    let b = 1;
    let c = +3;
    
    console.log("Welcome to the restaurant");
    console.log(`You currently have ${lives} lives.`);
    console.log("");
    
    console.log("What would you like to eat?");
    console.log("A) ultra processed buguer");
    console.log("B) Salad");
    console.log("C) Arroz with Feijão and carne");
    console.log("");
    let choice = readLine("Choice: ").toLowerCase();
    updateLives(choice, a, b, c);
    console.log("You now have "+lives+" lives");
    
    console.log("");
    console.log("===============================");
    console.log("");
}

function pathsChoice(){
    let a = -1;
    let b = -5;
    let c = 2;
    
    console.log("Welcome to the paths");
    console.log(`You currently have ${lives} lives.`);
    console.log("");
    
    console.log("What would you like to do?");
    console.log("A) go to the jungle");
    console.log("B) go to the secret cave");
    console.log("C) go to the hidden tomb");
    console.log("");
    let choice = readLine("Choice: ").toLowerCase();
    updateLives(choice, a, b, c);
    console.log("You now have "+lives+" lives");
}

function main() {
    eatChoice();
    pathsChoice();
}

main();
