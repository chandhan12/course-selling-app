const {Router} =require("express")
const {adminModel,courseModel}=require("../models/admin.model.js")


const adminRouter=Router();


adminRouter.post('/signup' ,(req,res) => {

    res.json({
        msg:" admin signup endpoint"
    })
})

adminRouter.post('/signin' ,(req,res) => {

    res.json({
        msg:" admin signin endpoint"
    })
})

adminRouter.post("/course", (req,res) =>{

    res.json({
        msg:"create course endpoint"
    })
})

//to update the course

adminRouter.put("/course", (req,res) =>{

    res.json({
        msg:"update course endpoint"
    })
})


adminRouter.get("/course/bulk", (req,res) =>{

    res.json({
        msg:"all the courses you have created"
    })
})


module.exports={
    adminRouter:adminRouter
}