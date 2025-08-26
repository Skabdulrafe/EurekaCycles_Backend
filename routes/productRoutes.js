import express from "express"
import { addProduct, deleteProduct,readproduct,updateProduct } from "../controller/productController.js"
import authenticateToken from "../Authentication/jwtToken.js"
// import upload from '../multer/multer.js'; 

let productd=express.Router()

productd.post('/addproduct',addProduct)
productd.get('/getproduct/:id',authenticateToken, readproduct) 
productd.put('/update/:id',authenticateToken, updateProduct)
productd.get('/delete/:id',authenticateToken, deleteProduct)
export default productd