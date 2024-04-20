// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function cases_match(Grades) {
    switch (Grades) {
        case "A+":
            console.log("Excellent");
            break;
        case "A":
            console.log("Fabulous");
            break;
        case "B":
            console.log("Very Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "E":
            console.log("What are you doing !");
            break;
        case "F":
            console.log("Fail (Better Luck Next Time)");
            break;
        default:
            console.log("Invalid Grades");
            break;
    }
}
cases_match("A+");
