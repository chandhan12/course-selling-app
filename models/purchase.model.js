const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const objectId=Schema.ObjectId


const purchase=new Schema({
    _id:objectId,
    creatorId:{
        type:objectId,
        require:true
    },
    userId:{
        type:objectId,
        require:true
    }

})

const purchaseModel=mongoose.model("purchases",purchase);

module.exports={
    purchaseModel:purchaseModel
}