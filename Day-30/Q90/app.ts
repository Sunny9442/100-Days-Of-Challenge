// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function valueisNaN (value : any ): boolean{
    return isNaN(value)
}
console.log(valueisNaN ("Hello World"))
console.log(valueisNaN (12345))