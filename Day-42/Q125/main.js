// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var property = {
    width: 5,
    length: 5,
    Calculate: function () {
        return this.width * this.length;
    }
};
console.log(property.Calculate());
