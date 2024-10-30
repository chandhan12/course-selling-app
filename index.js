const express=require("express");
const {userRouter}=require('./routes/user.js');
const { courseRouter } = require("./routes/course.js");
const { adminRouter} = require("./routes/admin.js");
require('dotenv').config();
const mongoose=require("mongoose");



const app=express();

app.use('/api/user',userRouter);
app.use('/api/course',courseRouter);
app.use('/api/admin',adminRouter)

const main=async () =>{
        await mongoose.connect(process.env.MONGO_URL,)
        console.log("connected to mongoDB")
    app.listen(3000,() =>{
        console.log("server is started and running at port 3000")
    })
}

main();