// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
console.log("Before sychronous Operation");
for (var i = 0; i < 1e9; i++) { }
console.log("After sychronous Operation");
console.log("Before asychronous Operation");
setTimeout(function () {
    console.log("asychronous Setup Completed");
}, 1000);
console.log("After sychronous Setup Operations");
