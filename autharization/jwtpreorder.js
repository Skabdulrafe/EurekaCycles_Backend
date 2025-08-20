import jwt from "jsonwebtoken"
export let GenerateToken=(mobileNumber)=>{
    let token=jwt.sign({mobileNumber},process.env.SECRETKEY)
    return token;
   }
   export const VerifyToken=(gettoken)=>{
    const payload=jwt.verify(gettoken,process.env.SECRETKEY)
    return payload.mobileNumber
}
export const getTokenheader=(req,res)=>{
    let Tokenorder=req.headers.authorization.split(' ')[1]
    return  Tokenorder
}