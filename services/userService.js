import userModel from "../models/userModel.js";

export let userCreateServices =async (username,mobile,email,password) => {
    console.log(username,mobile,email,password)
    try {
        let user = await userModel({username,mobile,email,password});
        let userSave = user.save();
        return userSave
    } catch (error) {
        console.log(`error occured at userCreateServices ${error.message}`)
    }
}

export let userLoginServices = async (email) => {
    try {
        let getDbUser = await userModel.findOne({ email });

        if (!getDbUser) {
            return null; // Handle user not found
        }

        return getDbUser;
    } catch (error) {
        console.error(`Error occurred at userLoginServices: ${error.message}`);
        return null;
    }
};

export let getAllUserServices =async ()=>{
    try {
        let allData= await userModel.find()
        return allData
    } catch (error) {
        console.log(`error occured at getAlluser ${error.message}`)   
    }
}