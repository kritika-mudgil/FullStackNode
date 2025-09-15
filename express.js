const express=require("express")
const app=express()
const data=require("./data")

app.use(express.json())


app.get("/users",(req,res)=>{
// res.send(data.users)
res.json({
    message:"User added successfully",
    data:data.users,
    time:new Date().toLocaleString()
    })
})

// app.post("/users",(req,res)=>{
//     const new_data=req.body
//     data.users.push(new_data)
//     res.json({
//         message:"data successfully loaded",
//         data:data.users,
//         time:new Date().toLocaleString()
//     })
// })
app.listen(7000,()=>{
    console.log("server started")
})