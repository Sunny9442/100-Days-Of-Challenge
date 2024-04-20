// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function Decimal_number (num: number): number{
    return Math.round(num)
}
console.log(Decimal_number (4.7))
console.log(Decimal_number (4.4))