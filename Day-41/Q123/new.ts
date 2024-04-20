// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function until_still_years (str : string ): void{
    let vowels = "aeiou";
    for (const char of str){
        if (vowels . includes (char)){
            console.log(`first vowel founds ${char}`)
            break;
        }
        console.log(char)
    }
}
until_still_years ("syzyzygyhy")