//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guest : string []= ["Albert einstein", "Bill gates", "Sunny Shahzad"]
console.log("one of my guest cant't make it to dinner")
let unabletoattend : string=("Sunny Shahzad")
console.log(`Unfortunately ${unabletoattend} can't make it to dinner`)
let newguest: string=("Leonardo")
guest[2]= newguest
guest.forEach(guest => {
    console.log(`Hello Dear ${guest} I would like to you dinner with me`)
});