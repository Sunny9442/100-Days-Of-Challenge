// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function Greater_then_ten(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var number = [1, 2, 4, 9, 15, 20, 50, 100, 1000];
console.log(Greater_then_ten(number));
