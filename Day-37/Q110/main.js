//**Question 110:** Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function Assigned_Grades(score) {
    if (score >= 90) {
        return "A+";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "E";
    }
    else {
        return "F";
    }
}
console.log(Assigned_Grades(98));
console.log(Assigned_Grades(85));
console.log(Assigned_Grades(78));
console.log(Assigned_Grades(67));
console.log(Assigned_Grades(55));
console.log(Assigned_Grades(45));
