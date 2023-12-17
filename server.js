const express=require("express")
const app=express()

//require and config 
require("dotenv").config()
app.use(express.json())
const PORT=process.env.PORT


const connectDb=require("./config/connectDb");

connectDb();

app.use('/api/contact',require('./Routes/contact'))









app.listen(PORT,error=>{
    error ? console.error("fail to connect") :
    console.log(`server is running ${PORT}`)
})