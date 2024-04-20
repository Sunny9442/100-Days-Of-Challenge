// **Question 107:** Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function logical_Operator (num : number ) : boolean {
    return (num % 2 === 0 && num % 3 === 0)
}
console.log(logical_Operator (12))
console.log(logical_Operator (15))