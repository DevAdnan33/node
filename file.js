const fs = require('fs')

let time = new Date();

// Sync... call
// fs.writeFileSync('./test.txt','hello world')

// Async... call
// fs.writeFile('./test.txt', 'hello world Async', (err) => { })

// Sync... call
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result)

// Async
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error ", err)
    } else {
        console.log(result)
    }
})

fs.appendFileSync("./test.txt", `User Mins : ${time.getMinutes().toString()} `)

// fs.copyFileSync("./test.txt","./copyOfTest.txt")

// fs.unlinkSync("./copyOfTest.txt")

console.log(fs.statSync("./test.txt"))