import express from "express"
import { addProduct, deleteProduct,readproduct,updateProduct } from "../controller/productController.js"
// import upload from '../multer/multer.js'; 
let productd=express.Router()
productd.post('/addproduct',addProduct)
productd.get('/getproduct/:id',readproduct) 
productd.put('/update/:id',updateProduct)
productd.get('/delete/:id',deleteProduct)
export default productd