import mongoose from "mongoose"
const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  alternateNumber: String,
  address: String,
  landmark: String,
  pincode: String,
  products: {
    type: Array,
    default: []
  },
  totalAmount: {
    type: Number,
    // required: true
  },
  orderStatus: {
    type: String,
    default: 'Pending'
  },
  feedback: String
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel
