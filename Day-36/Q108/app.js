// **Question 108:** Compare two strings to check if they are identical, ignoring case sensitivity.
function Compare_String(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(Compare_String("Hello", "hello"));
console.log(Compare_String("World", "worl"));
