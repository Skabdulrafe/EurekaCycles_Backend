import bcrypt from 'bcrypt'
export let hashPassword=async (password)=>{
     let hashPassword=await bcrypt.hash(password,10);
     return hashPassword;
}
export let compairpassSer=async(password,dbpass)=>{
     try{
     let result=await bcrypt.compare(password,dbpass)
     return result 
    // console.log(result)
     }
     catch(error){
console.log(error)
     }}