const server=require("http")
server.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.write("This is my home page.")
    }
    else
        if(req.url==='/about')
        {
            res.write("This is my about page.")
        }
        else{
            res.write("404 page not found.")
        }
    res.end("")
}).listen(5001,()=>{
    console.log("server started")
})