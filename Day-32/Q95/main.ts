// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function Greater_then_ten (numbers : number[]) : number[]{
    return numbers.filter(number => number > 10)
}
const number : number [] = [1,2,4,9,15,20,50,100,1000]
console.log(Greater_then_ten (number))