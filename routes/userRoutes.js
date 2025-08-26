import express from "express";
import { createUser, deleteUser, getOneUser, getprofile, loginUser, updateUser } from "../controller/userController.js";
import authenticateToken from "../autharization/jwtuser.js";
let userRout = express.Router();
userRout.post('/createuser',createUser);
 userRout.post('/login',loginUser) 
 userRout.get('/getUsers',authenticateToken,getprofile)
 userRout.post('/updateUser/:id',authenticateToken,updateUser) 
 userRout.get('/deleteUser/:id',authenticateToken,deleteUser)
 userRout.get('/getOneUser/:id',authenticateToken,getOneUser)
 export default userRout;
