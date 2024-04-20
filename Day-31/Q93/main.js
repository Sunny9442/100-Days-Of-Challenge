// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function Banana_replace_Mango(fruit) {
    var index = fruit.indexOf("Banana");
    if (index !== -1)
        fruit[index] = "Mango";
}
var fruit = ["Apple", "Banana", "WaterMelon"];
Banana_replace_Mango(fruit);
console.log(fruit);
