import PreorderModel from "../models/preorderModel.js"

export let premodelser=async(data)=>{
    try{
    let shouldsave=new PreorderModel(data)
    let result= await shouldsave.save()
return "success"
}
    catch(error){
        console.log(error)
    }

 } 
 export let getpreOrderservices=async()=>{
    try{
        
        let data=await PreorderModel.find({})
       //console.log(data)
        return data
    } catch(error){
        console.log(`${error}`)
        return "error"
    }
}