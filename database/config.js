const mongoose = require("mongoose");


const dbConnection = async()=>{

    try {
       await  mongoose.connect(process.env.MONGODB_ATLAS,{
           useNewUrlParser:true,
           useUnifiedTopology:true,
           useCreateIndex: true,
           useFindAndModify:false,
       });

       console.log("Database connect")

    } catch (error) {
        throw new Error("Error to begin the database")
        
    }

}





module.exports = {
    dbConnection
}