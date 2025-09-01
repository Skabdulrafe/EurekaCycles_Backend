import express from "express"
import { addProduct, deleteProduct,getOneproduct,readproduct,updateProduct } from "../controller/productController.js"
import authenticateToken from "../autharization/jwtuser.js"
//import authenticateToken from "../autharization/jwtuser.js"
// import upload from '../multer/multer.js'; 
let productd=express.Router()
productd.post('/addproduct',addProduct)
productd.get('/getproduct',readproduct) 
productd.get('/getoneproduct/:id',getOneproduct) 
productd.put('/update/:id',authenticateToken,updateProduct)
productd.get('/delete/:id',authenticateToken,deleteProduct)
export default productd