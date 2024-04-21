// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
const Conditional_promise = new Promise<string>((resolve, reject) => {
    const success = Math.random () > 0.5;
    if (success) {
        resolve ("Success")
    }else{
        reject (new Error ("Failure"))
    }
})

Conditional_promise 
.then ((result) => console.log(result))
.catch ((error) => console.log(error.message))