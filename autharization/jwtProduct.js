import jwt from "jsonwebtoken"
export const generateTokenorder=(mobileNumber)=>{
    const token=jwt.sign({mobileNumber},process.env.SECRETKEY)
    return token
}
export const verifyTokenorder=(Tokenproduct)=>{
    const payload=jwt.verify(Tokenproduct,process.env.SECRETKEY)
    return payload.productId
}