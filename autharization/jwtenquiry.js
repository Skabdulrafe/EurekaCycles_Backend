import jwt from "jsonwebtoken"
export const generateToken=(mobileNumber)=>{
    const token=jwt.sign({mobileNumber},process.env.SECRETKEY)
    return token
}
export const verifyToken=(gettoken)=>{
    const payload=jwt.verify(gettoken,process.env.SECRETKEY)
    return payload.mobileNumber
}
export const tokenheader=(req,res)=>{
    let Tokenen=req.headers.authorization.split(' ')[1]
    return  Tokenen
}