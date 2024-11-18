import express from "express";
const app= express();
const PORT = 3000;

app.get('/',(req,res)=>{
    return res.send("<h1>hi i am ali</h1>")
})

app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT}`);
})