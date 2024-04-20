// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function Strings_to_number (str : string): number{
    return parseFloat (str)
}
console.log(Strings_to_number ("198.75"))
console.log(Strings_to_number ("123"))