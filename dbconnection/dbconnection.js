import mongoose from "mongoose";


let dbConnect=async(dbURL,dbName)=>{
    try {
       //await  mongoose.connect('mongodb://0.0.0.0:27017/dbcurd')
       await  mongoose.connect(dbURL+dbName)
       console.log('connected to DB successfully');
    } catch (error) {
        console.log('error occured while connect to db');
    }
}

export default dbConnect