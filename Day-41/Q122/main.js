// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
var counts = 10;
while (counts > 0) {
    if (counts === 2) {
        break;
    }
    console.log(counts);
    counts--;
}
