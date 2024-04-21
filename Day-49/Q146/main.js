// Question 146: Show an example of a callback function used to filter an array of numbers.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var filternumbers = numbers.filter(function (number) { return number > 5; });
console.log(filternumbers);
