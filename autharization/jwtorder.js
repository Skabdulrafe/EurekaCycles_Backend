import jwt from "jsonwebtoken"
export const generateTokenorder=(orderId)=>{
    const token=jwt.sign({orderId},process.env.SECRETKEY)
    return token
}
export const GenerateToken=(Tokenorder)=>{
    const payload=jwt.verify(Tokenorder,process.env.SECRETKEY)
    return payload.orderId
}
export const tokenheaderord=(req,res)=>{
    let Tokenord=req.headers.authorization.split(' ')[1]
    return  Tokenord
}