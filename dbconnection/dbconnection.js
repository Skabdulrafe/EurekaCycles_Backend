// import mongoose from "mongoose";


// let dbConnect=async(dbURL,dbName)=>{
//     try {
//        //await  mongoose.connect('mongodb://0.0.0.0:27017/dbcurd')
//        await  mongoose.connect(dbURL+dbName)
//        console.log('connected to DB successfully');
//     } catch (error) {
//         console.log('error occured while connect to db');
//     }
// }

// export default dbConnect

import mongoose from "mongoose";

let dbConnect = async (dbURL, dbName) => {
    try {
        // Disable buffering (queries will fail immediately if not connected)
        mongoose.set("bufferCommands", false);

        // Connect to MongoDB
        await mongoose.connect(`${dbURL}${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000 // Optional: Timeout after 10s
        });

        console.log("✅ Connected to DB successfully");
    } catch (error) {
        console.log("❌ Error occurred while connecting to DB:", error.message);
    }
};

export default dbConnect;
