/*
Description: Program to prompt users with 2 or more questions to help them
choose a country for their travel destination based on their interests or
preferences. Once the program identifies a country destination, it uses that
destination to give the user more information about that country.
*/

function chooseTime(){
    let choice = readLine("More daytime or nightime? ").toLowerCase();
    if(choice == "daytime"){
      return "daytime";  
    } else {
        return "nightime";
    }
}

function chooseClimate(){
    let choice = readLine("Hot or Cold place? ").toLowerCase();
    if(choice == "hot"){
      return "hot";  
    } else {
        return "cold";
    }
    
}

function reportLanguage(place){
    if(place == "Canada"){
        return "English and French";
    } else if(place == "Brazil") {
        return "Brazilian Portuguese";
    } else {
        return "English";
    }
}
function reportCurrency(place){
    if(place == "Canada"){
        return "Canadian Dollar";
    } else if(place == "Brazil") {
        return "Real";
    } else {
        return "US Dollar";
    }
}

function finalDestination(time, climate){
    
    let place;
    if(time == "nightime" && climate == "cold"){
        place = "Canada";
    } else if(time == "daytime" && climate == "hot"){
        place = "Brazil";
    } else {
        place = "USA";
    }
    
    console.log("");
    
    console.log("I recommend Travelling to "+place);
    console.log("Here's some additional information about " + place);
    console.log("Currency: " + reportCurrency(place));
    console.log("Language: " + reportLanguage(place));
}


function main() {
    console.log("Global Destination Assistant");
    console.log("=======================================");
    console.log("");
    finalDestination(chooseTime(), chooseClimate());
}

main();
