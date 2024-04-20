// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiple_function =(...numbers : number [])=> 
    numbers . reduce ((total , number) =>total * number , 1)

console.log(multiple_function (2,4,8))