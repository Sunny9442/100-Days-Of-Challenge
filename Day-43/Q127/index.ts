// Question 127: Convert a traditional function expression to an arrow function.
const traditional_function = function (a , b){
    return a+b;
}
const arrow_function = (a , b) => a + b;

console.log(traditional_function  (5 , 5))
console.log(arrow_function (10 , 10))
