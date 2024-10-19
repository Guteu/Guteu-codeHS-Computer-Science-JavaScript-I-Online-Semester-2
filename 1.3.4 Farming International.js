/* This program takes the information that a user enters upon signup
and uses it to greet the user every time they login. */

function main() {
    greeting("Irina", "Canada");
    greeting("Felix");
}

function greeting(name, country = "your country") {
    console.log("Hi " + name + "!! How's the weather in " + country +" today?");
}

main();
