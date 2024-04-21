// Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(function () {
    console.log("Call back Execute");
}, 0);
console.log("End");
