const express=require("express");
const {userRouter}=require('./routes/user.js');
const { courseRouter } = require("./routes/course.js");
const { adminRouter} = require("./routes/admin.js");

const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://chandhangorlannagari:Chandhan$9398641656@cluster0.9feoq.mongodb.net/course-selling-app",)
.then(() => console.log("connected to mongoDB"))
.catch((err) =>console.log(err.message))


const app=express();

app.use('/api/user',userRouter);
app.use('/api/course',courseRouter);
app.use('/api/admin',adminRouter)

app.listen(3000,() =>{
    console.log("server is started and running at port 3000")
})