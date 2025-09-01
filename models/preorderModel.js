import mongoose from "mongoose";

const preorderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    mobileNumber: { type: String, required: true,unique:true },
    Email: { type: String, required: true,unique:true },
   Company: { type: String, required: true },
    quantity: { type: Number, required: true }
});
const PreorderModel = mongoose.model('Preorder', preorderSchema);
export default PreorderModel