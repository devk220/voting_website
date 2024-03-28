const mongo=require('mongoose')

const url='mongodb://127.0.0.1:27017'

const connectToMongo=()=>{
    mongo.connect(url).then(()=>{
        console.log("database connected")
    })
}


module.exports=connectToMongo