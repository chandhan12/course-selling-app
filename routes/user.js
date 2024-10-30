const {Router} =require("express")
const{userModel}=require("../models/user.model.js");
const { verifyToken } = require("../middleWares/verifyToken.js");
const bcrypt=require("bcrypt")

const userRouter=Router();


userRouter.post('/signup' ,async (req,res) => {
    const {email,password,firstName,lastName}=req.body

  try {
    
    const userExist=await userModel.findOne({
        email,
       }) 
    
       if(userExist){
        res.json({
            msg:"user already exist"
        })
        return
       }
    
    
       const hashedPassword=await bcrypt.hash(password,10);
    
       const newUser= await userModel.create({
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

userRouter.post('/signin' ,async (req,res) => {
    const {email,password}=req.body

    try {
        const user=await userModel.findOne({
            email,
        })
    
        if(!user){
            res.json({
                msg:"invalid credentials"
            })
            return
        }
        const passwordMatched=await bcrypt.compare(password,user.password);
    
        if(passwordMatched){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
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

userRouter.get('/purchases',verifyToken ,async(req,res) => {
    const user= await userModel.findById({_id:req.userId})
    res.json({
        msg:user.firstName
    })
})

module.exports={
    userRouter:userRouter
}
