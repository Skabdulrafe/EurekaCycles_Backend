import OrderModel from "../models/orderModel.js"

export const addOrderservices=async(orderDetails)=>{
    try{
    let ordersave= new OrderModel(orderDetails)
let savedOrder= await ordersave.save()
console.log(savedOrder)
return "success"
}catch(error){
    console.log(error)
}
}

export let getallOrderservices=async()=>{
    try{
        
        let data=await OrderModel.find()
       //console.log(data)
        return data
    } catch(error){
        console.log(`${error}`)
        return "error"
    }
}
export let getOrderservices=async(orderId)=>{
    try{
        
        let data=await OrderModel.find(orderId)
       console.log(data)
        return "success"
    } catch(error){
        console.log(`${error}`)
        return "error"
    }
}
export let updatedOrderservices=async(orderId,rafe)=>{
    try{
let result= await OrderModel.updateOne({"orderId":orderId},rafe)
console.log(result)
return "success"
}catch(error){
    console.log('error while creating user')
    return "error"
}
} 
export let Deleteservices=async(orderId,rafe)=>{
    try{
let result= await OrderModel.deleteOne({"orderid":orderId},rafe)
console.log(result)
return "success"
}catch(error){
    console.log('error while deleting user',error)
    return "error"
}
}

