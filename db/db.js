const mongoose=require('mongoose')


const connectToMongoDb =async()=>{
    try{
        await mongoose.connect(process?.env.MONGO_DB_URI)
        console.log("data base connection scucessfully....")
    }
    catch(err){
        console.log(`connection is failed due to ${err}`)
    }
}
module.exports=connectToMongoDb