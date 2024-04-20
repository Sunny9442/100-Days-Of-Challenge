// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replace (sentence : string): string {
    return sentence.replace (/Hammad/g, "Hamza")
}
console.log(replace ("Hammad is my best friend"))