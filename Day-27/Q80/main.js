// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
var cars = {
    make: "Toyota",
    model: "Corolla",
    year: 2012,
};
(cars["car_color"] = "Black"),
    (cars["year"] = 2024),
    (cars["model"] = "Lambhorghini");
console.log(cars);
