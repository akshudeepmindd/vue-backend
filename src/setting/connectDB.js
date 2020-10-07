const mongoose=require("mongoose")
const {DB_USERNAME,DB_PASSWORD,DB_NAME}=process.env
mongoose.set('useCreateIndex',true)
const connectDB=async()=>{
    try{
        await mongoose.connect(

            `${DB_USERNAME}:${DB_PASSWORD}@mongodb://localhost:27017/${DB_NAME}`,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        )


    }
    catch(error){
        return (error)
    }
}
module.exports=connectDB;
