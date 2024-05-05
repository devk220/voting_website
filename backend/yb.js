const mongo=require('mongoose')

const url='mongodb+srv://dev450:19May2012%23@cluster0.xttif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectToMongo=()=>{
    mongo.connect(url).then(()=>{
        console.log("database connected")
    })
}


module.exports=connectToMongo