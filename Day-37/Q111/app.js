//**Question 111:** Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function Age_Chain(age) {
    if (age <= 13) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(Age_Chain(12));
console.log(Age_Chain(18));
console.log(Age_Chain(24));
