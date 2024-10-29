const express=require("express");

const app=express();

app.post('/user/signup' ,(req,res) => {

    res.json({
        msg:"signup endpoint"
    })
})

app.post('/user/signin' ,(req,res) => {

    res.json({
        msg:"signin endpoint"
    })
})

app.get('/user/purchases' ,(req,res) => {

    res.json({
        msg:"purchases endpoint"
    })
})

app.post('/course/purchase' ,(req,res) => {

    res.json({
        msg:"purchases endpoint"
    })
})

app.get('/courses' ,(req,res) => {

    res.json({
        msg:"courses endpoint"
    })
})





app.listen(3000,() =>{
    console.log("server is started and running at port 3000")
})