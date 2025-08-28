const fs=require("fs")
fs.writeFileSync("Hello.txt","Hello Node.js")

 fs.appendFileSync("Hello.txt", "\nPractice makes perfect!")
 const data=fs.readFileSync("Hello.txt","utf-8")
 console.log(data)