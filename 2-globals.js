// GLOBALS - NO WINDOW

// __dirname     - path to current directory
// __filename    - file name
// require       - function to use modules (CommonJS)
// module        - info about current module (file)
// process       - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

setInterval(function(){
    console.log("this is a function")
}, 1000)

setInterval(() => {
    console.log("hello world")
}, 1000)


