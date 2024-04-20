// **Question 106:** Determine if a given year is a leap year using comparison operators.
function Comparison_Operators(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(Comparison_Operators(2020));
console.log(Comparison_Operators(1900));
