import productModel from "../models/productModel.js"
 export let createProductservices=async(productDetails)=>{
    try{
        let u1=new productModel(productDetails)
        let data=await u1.save()
        console.log(data)
        return "success"
    } catch(error){
        console.log(error)
        return "error"
    }
}

export let updatedProductservices=async(productId,productDetails)=>{
    try{
let result= await productModel.updateOne({productId},productDetails)
console.log(result)
return "success"
}catch(error){
    console.log('error while creating user')
    return "error"
}
} 
export let getProductServices = async () => {
    try {
        let data = await productModel.find();
        console.log(data);
        return "success";
    } catch (error) {
        console.log('Error while retrieving users:', error);
        return "error";
    }
};
export let Deleteservices=async(productId,productDetails)=>{
    try{
let result= await productModel.deleteOne({productId},productDetails)
console.log(result)
return "success"
}catch(error){
    console.log('error while deleting user')
    return "error"
}
}