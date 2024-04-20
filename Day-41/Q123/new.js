// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function until_still_years(str) {
    var vowels = "aeiou";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("first vowel founds ".concat(char));
            break;
        }
        console.log(char);
    }
}
until_still_years("syzyzygyhy");
