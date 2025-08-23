import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: String,
  mobile: String,
  email: { type: String, unique: true, required: true }, // Ensure email is unique
  password: { type: String, required: true },
}); 
let userModel=mongoose.model('User', userSchema);
export default userModel