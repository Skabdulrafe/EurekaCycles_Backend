import preorderModel from "../models/preorderModel.js";


export let preorderservices=async (name,mobile,email,numberofcycle,company)=>{
   console.log(name,mobile,email,numberofcycle,company)
   try {
      let preorder = await preorderModel({name,mobile,email,numberofcycle,company});
      let preorderSave = preorder.save();
      return "success"
   } catch (error) {

      console.log(`error occured at preorderservices ${error.message}`)
      
   }
}

