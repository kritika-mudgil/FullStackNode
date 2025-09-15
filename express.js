const express=require("express")
const app=express()
const data=require("./search")

app.use(express.json())


app.get("/users/:id",(req,res)=>{
    const id=parseInt (req.params.id)
    const user=data.users.find(u=>u.id===id)
    if(user){
        res.json({
            message:"successfully found",
            data:user
        })
    }
    else{
        res.json({
            message:"not found",
            status:404
        })
    }
})

app.delete("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const index=data.users.findIndex(u=>u.id===id)
    if(index==-1){
        const deleteduser=data.users.splice(index,1)
        res.json({
            message:"deleted successfully",
            data:deleteduser[0]
        })
    }
    else{
        res.json({
            message:"not deleted"
        })
    }
})
app.listen(7000,()=>{
    console.log("server started")
})