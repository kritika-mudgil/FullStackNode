const express=require("express")
const app=express()
const users=require("./data")

app.get("/",(req,res)=>{
    res.send (users)
})
app.get("/",(req,res)=>{
    res.send("This is my home page")
})
app.get("/about",(req,res)=>{
    res.send("This is my about page")
})

app.post("/",(req,res)=>{
    res.send("This is my post method")
})
app.listen(6002,()=>{
    console.log("server is started")
})