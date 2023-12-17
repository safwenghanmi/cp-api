
const mongoose=require("mongoose")
const {Schema , Model}=mongoose;
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    phone: Number
})

module.exports=contact= mongoose.model('contact',contactSchema)