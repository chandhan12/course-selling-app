const {Router} =require("express")
const{purchaseModel}=require('../models/purchase.model.js')

const courseRouter=Router();


courseRouter.post('/purchase' ,(req,res) => {

    res.json({
        msg:"purchases endpoint"
    })
})

courseRouter.get('/preview' ,(req,res) => {

    res.json({
        msg:"courses endpoint"
    })
})

module.exports={
    courseRouter:courseRouter
}