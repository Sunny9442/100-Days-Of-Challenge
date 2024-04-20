// Question 133: Write a JavaScript object and convert it into a JSON string.
const person = {
    name : "Sunny Shahzad",
    age : 22,
    city : "Karachi",
}
const Json = JSON.stringify (person)

console.log(Json)