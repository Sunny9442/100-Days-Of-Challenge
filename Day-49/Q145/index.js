// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function executecallback(callback, agr1, agr2) {
    callback(agr1, agr2);
}
function add(a, b) {
    console.log(a + b);
}
executecallback(add, 5, 10);
