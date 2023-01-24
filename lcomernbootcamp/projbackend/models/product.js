const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema

const productSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String,
        trim:true,
        maxlength:32,
    },
    description:{
        // required:true,
        type:String,
        trim:true,
        maxlength:2000,
    },
    price:{
        trim:true,
        required:true,
        type:Number,
        maxlength:32,
    },
    category:{
        type:ObjectId,
        ref:"Category",
        required:true
    },
    stock:{
        type:Number,
    },
    sold:{
        type:Number,
        default:0
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model('Product',productSchema)