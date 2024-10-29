const express=require("express");
const {userRouter}=require('./routes/user.js');
const { courseRouter } = require("./routes/course.js");
const { adminRouter} = require("./routes/admin.js");

const app=express();

app.use('/api/user',userRouter);
app.use('/api/course',courseRouter);
app.use('/api/admin',adminRouter)

app.listen(3000,() =>{
    console.log("server is started and running at port 3000")
})