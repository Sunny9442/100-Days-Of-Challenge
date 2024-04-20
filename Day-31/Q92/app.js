// Question 92: Write a function to remove the last element from an array and return the removed element.
function remove_last_element(Arr) {
    return Arr.pop();
}
var fruits = ["Apple", "Mango", "Banana"];
console.log(remove_last_element(fruits));
console.log(fruits);
