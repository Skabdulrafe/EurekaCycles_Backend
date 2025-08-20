//  import { generateTokenproduct, verifyToken } from "../autharization/jwtProduct.js";
import { createProductservices, Deleteservices, getProductServices, updatedProductservices } from "../services/productServices.js";

export let addProduct = async (req, res) => {
//    let {productId}=req.body
    let productDetails = req.body;
   // console.log(productDetails);
//    let Tokenproduct=generateTokenproduct(productId)
// console.log(Tokenproduct)
// let verifyTokenp=verifyToken(Tokenproduct)
  try {
    if(productDetails){
        let status = await createProductservices(productDetails);
        if (status == "success") {
            return res.status(201).send(`product created successfully with productid ${productDetails}`); 
        } else {
            return res.status(400).send('error: product creation failed');
        }
    } }catch (error) {
        return res.status(500).send("error occurred"); 
    }}

export let readproduct = async (req, res) => {
    try {
        let status = await getProductServices();
        if (status == "success") {
            return res.status(201).send('product read successfully');
        } else {
            return res.status(400).send('error: failed to fetch product');


        }
    } catch (error) {
        return res.status(500).send(`error occurred: ${error}`);
    }
};

 export let updateProduct=async(req,res)=>{
    let productId= req.params.id
    let productDetails=req.body
    console.log(productId)
let Tokenproduct=generateTokenproduct(productId)
console.log(Tokenproduct)
let verifyTokenp=verifyToken(Tokenproduct)
  try {
    if(productId==verifyTokenp){
    let status = await updatedProductservices(productId,productDetails);
    if (status == "success") {
        return res.status(201).send(`product updated successfully`); 
    } else {
        return res.status(400).send('error: product update failed');
    }}
} 

catch (error) {
    return res.status(500).send(`error occurred${error}`); 
}
} 
export let deleteProduct=async(req,res)=>{
    let productId= req.params.id
    let productDetails=req.body
    console.log(productId)
let Tokenproduct=generateTokenproduct(productId)
//console.log(Tokenproduct)
let verifyTokenp=verifyToken(Tokenproduct)
  try {
    if(productId==verifyTokenp){

    let status = await Deleteservices(productId,productDetails);
    if (status == "success") {
        return res.status(201).send(`product delted successfully`); 
    } else {
        return res.status(400).send('error: product deleted failed');
    }}
} catch (error) {
    return res.status(500).send(`error occurred${error}`); 
}
}

