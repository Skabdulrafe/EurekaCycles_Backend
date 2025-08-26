import {
  createUserServices,
  getoneuserServices,
  updatedUserservices,
  deleteUserService,
} from "../services/userServices.js";
import { compairpassSer, hashPassword } from "../encrpytion/encrypt.js";
import { dbpassen } from "../services/userServices.js";
import { GenerateToken } from "../autharization/jwtuser.js";
export let createUser = async (req, res) => {
  let {
    firstName,
    lastName,
    mobileNumber,
    email,
    password,
    role,
    shopCategory,
    shopName,
    shopAddress,
    GST,
  } = req.body;
  let hashpassword = await hashPassword(password);
  //console.log(hashpassword);

  //console.log(userDetails);
  try {
    let status = await createUserServices({
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
    if (status == "success") {
      return res.status(201).send(`User created successfully`);
    } else {
      return res.status(400).send("Error: user creation failed");
    }
  } catch (error) {
    return res.status(500).send(`Error occurred: ${error}`);
  }
};
export let loginUser = async (req, res) => {
  let { email, password } = req.body;
  console.log(req.body);
  let token = GenerateToken(email);
  console.log(token);
  try {
    let dbpass = await dbpassen(email);
    //res.send("successfully")
     console.log(dbpass)
    let compairpass = await compairpassSer(password, dbpass);
    if (compairpass == true) {
      res.json({ message: "login successlly", token: token });
    }
  } catch (error) {
    console.log(error);
  }
};
export let getprofile = async (req, res) => {
  let { email } = req.body;
   res.json({"message":"sucess","userdata":userdata})
};
export let updateUser = async (req, res) => {
  let userId = req.params.id;
  let userDetails = req.body;
  try {
    let status = await updatedUserservices(userId, userDetails);
    if (status == "success") {
      return res.status(201).send(`User updated successfully`);
    } else {
      return res.status(400).send("Error: User update failed");
    }
  } catch (error) {
    return res.status(500).send(`Error occurred: ${error}`);
  }
};

export let deleteUser = async (req, res) => {
  let userId = req.params.id;
  let rafe = req.body;

  try {
    let status = await deleteUserService(userId, rafe);
    if (status == "success") {
      return res.status(201).send(`User deleted successfully`);
    } else {
      return res.status(400).send("Error: User deletion failed");
    }
  } catch (error) {
    return res.status(500).send(`Error occurred: ${error}`);
  }
};
export let getOneUser = async (req, res) => {
  try {
     let userId = req.params.id;
    // let email=req.body
    let status = await getoneuserServices(userId);
    if (status) {
      return res.status(201).send(status);
    } else {
      return res.status(400).send("error: failed to fetch product");
    }
  } catch (error) {
    return res.status(500).send(`error occurred: ${error}`);
  }
};
