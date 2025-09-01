
import { addOrderservices, Deleteservices, getallOrderservices, getOrderservices, updatedOrderservices } from "../services/orderservices.js";
export let addeorder=async(req,res)=>{
    let orderDetails=req.body
    try {
        let status = await addOrderservices(orderDetails);
        if (status == "success") {
            return res.status(201).json(`status': 'success', 'message': 'Order saved successfully`); 
        } else {
            return res.status(400).json('error: order creation failed');
        }
       
    } catch (error) {
        return res.status(500).send(`error occurred${error}`); 
    }
};
export const getallorder=async(req,res)=>{
    //let {orderId}=req.params.id
    //console.log( rafe)
        try {
            let status = await getallOrderservices();
            if (status) {
             return res.status(201).send(status); 
            } else {
             res.status(400).send('error: order creation failed');
            }
    
        } catch (error) {
            return res.status(500).send(`${error}`); 
        }
    }

export const getOrderById1=async(req,res)=>{
let {orderId}=req.params.id
//console.log( rafe)
    try {
        let status = await getOrderservices(orderId);
        if (status == "success") {
         res.json({"status": "success", "message": " get Order successfully"}).status; 
        } else {
         res.status(400).send('error: order creation failed');
        }

    } catch (error) {
        return res.status(500).send(`${error}`); 
    }
}
export let updateOrder=async(req,res)=>{
    let orderId=req.params.id
    
    let rafe=req.body
        try{
       
          let status = await updatedOrderservices(orderId,rafe);
      if (status == "success") {
          return res.status(201).send(` updated successfully`); 
      } else {
          return res.status(400).send('error: product update failed');
      }}
   catch (error) {
      return res.status(500).send(`error occurred${error}`); 
  }}


export let deleteOrder=async(req,res)=>{
    let{orderId}=req.params.id
    let rafe=req.body
    try {
      let status = await Deleteservices(orderId,rafe);
      if (status == "success") {
          return res.status(201).send(`order deleted successfully`); 
      } else {
          return res.status(400).send('error: order delete failed');
      }}
   catch (error) {
      return res.status(500).send(`error occurred${error}`); 
  }
   
}
