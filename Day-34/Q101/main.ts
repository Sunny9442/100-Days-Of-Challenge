// Question 101: Generate a random integer between 1 and 10.
function Random_Integer () : number{
    return Math.floor (Math.random() * 10) + 1
}
console.log(Random_Integer ())