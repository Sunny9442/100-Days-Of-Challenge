// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function Objectkeys(keys, values) {
    var dynamicobject = {};
    dynamicobject[keys] = values;
    return dynamicobject;
}
var user = Objectkeys("Dark ", "Theme");
console.log(user);
