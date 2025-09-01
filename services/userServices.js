// import PreorderModel from "../models/preorderModel.js";
import usersModel from "../models/usersModel.js";
export let createUserServices = async ({
  firstName,
  lastName,
  mobileNumber,
  email,
  password: hashpassword,
  role,
  shopCategory,
  shopName,
  shopAddress,
  GST,
}) => {
  try {
    let newUser = new usersModel({
      firstName,
      lastName,
      mobileNumber,
      email,
      password: hashpassword,
      role,
      shopCategory,
      shopName,
      shopAddress,
      GST,
    });
    let data = await newUser.save();
    console.log(data);
    return "success";
  } catch (error) {
    console.log("Error while creating user:", error);
    return "error";
  }
};

export let dbpassen = async (email) => {
  let getdbpass = await usersModel.findOne({ email });
  return getdbpass.password;
};

export let getuser = async (email) => {
  let userdata = await usersModel.findOne({ email });
  return userdata;
};

export let updatedUserservices = async (userId, userDetails) => {
  try {
    let result = await usersModel.updateOne({ _id: userId }, userDetails);
    console.log(result);
    return "success";
  } catch (error) {
    console.log("error while updating user");
    return "error";
  }
};
export let deleteUserService = async (userId, rafe) => {
  try {
    let result = await usersModel.deleteOne({ _id: userId }, rafe);
    console.log(result);
    return "success";
  } catch (error) {
    console.log("error while deleting user");
    return "error";
  }
};

export let getoneuserServices = async (userId) => {
  try {
    let data = await usersModel.findOne({_id:userId});
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error while retrieving users:", error);
    return "error";
  }
};
export let getalluserServices = async () => {
  try {
    let data = await usersModel.find();
    //console.log(data);
    return data;
  } catch (error) {
    console.log("Error while retrieving users:", error);
    return "error";
  }
};
