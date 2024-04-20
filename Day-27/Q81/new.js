// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function object_properties(obj) {
    for (var properties in obj) {
        console.log("".concat(properties, ": ").concat(obj[properties]));
    }
}
object_properties({ model: "Audi", year: 2024, car_color: "black" });
