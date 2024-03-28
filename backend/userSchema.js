const mongo=require('mongoose')

const schema=new mongo.Schema({
    firstname:{
        type:String,
        minLength:3,
        required:true
    },
    lastname:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        minLength:8,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=schema