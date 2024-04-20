// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
const country = new Map <string , string> ();

country.set ("Pakistan", "England")
country.set("Austrailia", "Dubai")
country.set("Japan","China")

console.log(country)

function Logs_the_capital (country : Map <string,string>):void{
    if (country . has ("Canada")){
        console.log(`the capital of canada is ${country . get ("Canada")}`)
    }
    else {
        console.log("Canada is not in the map")
    }
}

Logs_the_capital (country)