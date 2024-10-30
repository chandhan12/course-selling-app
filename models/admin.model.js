const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const objectId=Schema.ObjectId;

const admin=new Schema({
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },

})

const course=new Schema({
    _id:objectId,
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    creatorId:objectId
})

const adminModel =mongoose.model("admin",admin);

const courseModel=mongoose.model("courses",course);

module.exports={
    adminModel:adminModel,
    courseModel:courseModel,
}