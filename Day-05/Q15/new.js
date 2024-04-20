//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var guest = ["Albert einstein", "Bill gates", "Sunny Shahzad"];
console.log("one of my guest cant't make it to dinner");
var unabletoattend = ("Sunny Shahzad");
console.log("Unfortunately ".concat(unabletoattend, " can't make it to dinner"));
var newguest = ("Leonardo");
guest[2] = newguest;
guest.forEach(function (guest) {
    console.log("Hello Dear ".concat(guest, " I would like to you dinner with me"));
});
