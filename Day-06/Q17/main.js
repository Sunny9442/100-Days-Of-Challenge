//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guestss = ["Albert Einstein", "Marie Curie", "Sunny Shahzad"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guestss.length > 2) {
    var removeguest = guestss.pop();
    console.log(" sorry i Remove ".concat(removeguest, " you in a dinner table"));
}
guestss.forEach(function (guestss) {
    console.log("Hello Dear ".concat(guestss, " i still be invite you in dinner table"));
});
