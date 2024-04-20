// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
const students = new Map <number , string> ();

students.set (1 , "Sunny")
students.set (2 , "Hamza")
students.set (3 , "Hammad")

students .forEach((name , IDs)=> {
    console.log(`Student IDs : ${IDs} , Students Names : ${name}`)
});