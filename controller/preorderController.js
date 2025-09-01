
import { getpreOrderservices, premodelser } from "../services/preorderser.js"

export const preorder=async(req,res)=>{try{
    let data=req.body
    let enquiry=await premodelser(data)
    if (enquiry=="success"){
        res.json({"status":"success","message": " accepted"}).status(201)
        console.log(data)
    }

    else{
        res.json({"status":"error"}).status(401)
    }
}
catch(error){
    console.log(error)
}
}
export const getpreOrder=async(req,res)=>{
    // let {mobileNumber}=req.body
        try {
    
            let status = await getpreOrderservices();
            if (status) {
             res.json(status); 
            } else {
             res.status(400).send('error: order creation failed');
            }
    
        } catch (error) {
            return res.status(500).send(`${error}`); 
        }
    }