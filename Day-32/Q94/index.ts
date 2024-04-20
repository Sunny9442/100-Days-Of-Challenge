// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
const words : string [] = ["Javascript" , "Typescript" , "Hello World" , "Sunny Shahzad"]
const Length : number [] = words.map (word => word.length)
console.log(Length)