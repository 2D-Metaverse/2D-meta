import express from "express";

const app  = express();

app.get("/", (req,res)=>{
    res.json({
        messge:"Hii from health check endpoint"
    })
})

app.listen(3002,()=>{
    console.log("Server is up on port ", 7000)
})