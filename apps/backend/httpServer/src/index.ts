import express from "express"
import { indexRouter } from "./routes/index.routes.js";


const app = express();

app.get("/", (req,res)=>{
    res.json({
        messge: "server looks cool"
    })
})

app.use("/api/v1", indexRouter)


app.listen(3001, ()=>{
    console.log("Server is up and running on port 3001")
})