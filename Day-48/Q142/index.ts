// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
const Hello_promise = new Promise <string> ((resolved) =>{
    setTimeout (() =>{
        resolved ("Hello World")
    },2000)
})
Hello_promise . then((result) => console.log(result))
