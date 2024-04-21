// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var Conditional_promise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success");
    }
    else {
        reject(new Error("Failure"));
    }
});
Conditional_promise
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error.message); });
