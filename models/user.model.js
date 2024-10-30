const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const objectId=Schema.ObjectId;

const user=new Schema({
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

const userModel =mongoose.model("users",user);

module.exports={
    userModel:userModel
}