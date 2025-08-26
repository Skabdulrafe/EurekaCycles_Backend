
import mongoose from "mongoose";

const preorderSchema = new mongoose.Schema({
    name: {
        type: String,  
        required: true, 
    },
    mobile: {
        type: Number,  
        required: true,
    },
    email:{
        type: String,
        required:true
    },
    numberofcycle: { 
        type: Number, 
        required: true,
    },
    company: {
        type: String,
    }
});

const PreorderModel = mongoose.model('PreorderModel', preorderSchema);

export default PreorderModel;
