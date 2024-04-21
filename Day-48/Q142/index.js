// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var Hello_promise = new Promise(function (resolved) {
    setTimeout(function () {
        resolved("Hello World");
    }, 2000);
});
Hello_promise.then(function (result) { return console.log(result); });
