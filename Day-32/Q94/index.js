// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["Javascript", "Typescript", "Hello World", "Sunny Shahzad"];
var Length = words.map(function (word) { return word.length; });
console.log(Length);
