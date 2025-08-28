const server=require("http")
server.createServer((req,res)=>{
    res.write("<h1> message from server</h1>")
    res.end("")
}).listen(5001,()=>{
    console.log("server started")
})