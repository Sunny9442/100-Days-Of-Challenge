// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map();
students.set(1, "Sunny");
students.set(2, "Hamza");
students.set(3, "Hammad");
students.forEach(function (name, IDs) {
    console.log("Student IDs : ".concat(IDs, " , Students Names : ").concat(name));
});
