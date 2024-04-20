//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var mynames = ["Sunny", "Hamza", "Hammad"];
for (var _i = 0, mynames_1 = mynames; _i < mynames_1.length; _i++) {
    var name_1 = mynames_1[_i];
    console.log("Hello ".concat(mynames, " would you like to some learn typescript today?"));
    console.log("yes");
}
