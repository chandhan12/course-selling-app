const {Router} =require("express")
const {adminModel,courseModel}=require("../models/admin.model.js")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
const { adminVerify } = require("../middleWares/adminVerify.js");


const adminRouter=Router();


adminRouter.post('/signup' ,async (req,res) => {
    const {email,password,firstName,lastName}=req.body

    try {
      
      const adminExist=await adminModel.findOne({
          email,
         }) 
      
         if(adminExist){
          res.json({
              msg:"admin already exist"
          })
          return
         }
      
      
         const hashedPassword=await bcrypt.hash(password,10);
      
         const newUser= await adminModel.create({
          email:email,
          password:hashedPassword,
          firstName:firstName,
          lastName:lastName,
         })
      
        
         if(newUser){
          res.json({
              msg:"your are signedup successfully"
          })
         }
    } catch (error) {
      res.json({
          msg:`something went wrong ${error.message}`
      })
    }
})

adminRouter.post('/signin' ,async (req,res) => {
    const {email,password}=req.body

    try {
        const admin=await adminModel.findOne({
            email,
        })
    
        if(!admin){
            res.json({
                msg:"invalid credentials"
            })
            return
        }
        const passwordMatched=await bcrypt.compare(password,admin.password);
    
        if(passwordMatched){
            const token=jwt.sign({id:admin._id},process.env.JWT_SECRET_ADMIN);
            res.json({
                msg:token
            })
        }else{
            res.json({
                msg:"password does not match"
            })
        }
    } catch (error) {
        res.json({
            msg:error.message
        })
    }
})

adminRouter.post("/course",adminVerify, async (req,res) =>{
    const adminId=req.adminId

    const {title,description,price,imageUrls}=req.body;

    const course=await courseModel.create({
        title,
        description,
        price,
        imageUrls,
        creatorId:adminId
    })

    if(course){
        res.json({
            msg:"course created successfully",
            id:course._id
        })
    }
})



adminRouter.put("/course",adminVerify, async(req,res) =>{

    const adminId=req.adminId

    const {title,description,price,imageUrls}=req.body;
    const course=await courseModel.findById(adminId);
    console.log(course._id);
    const courseId=course._id

    const updatedCourse=await courseModel.findByIdAndUpdate(courseId,{
        title,
        description,
        price,
        imageUrls,
        creatorId:adminId
    })

    if(course){
        res.json({
            msg:"course updated successfully",
            id:course._id
        })
    }
})


adminRouter.get("/course/bulk", (req,res) =>{

    res.json({
        msg:"all the courses you have created"
    })
})


module.exports={
    adminRouter:adminRouter
}