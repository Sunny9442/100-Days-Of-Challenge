// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function Sum_All_number(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];
console.log(Sum_All_number(numbers));
//Multiply Example(*)
function Multiply_all_number(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator * current; }, 1);
}
var numberss = [2, 2, 2, 2, 22, 22, 100];
console.log(Multiply_all_number(numberss));
