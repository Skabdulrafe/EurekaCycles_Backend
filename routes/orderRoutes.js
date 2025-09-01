import express from "express"
import { addeorder, deleteOrder, getallorder, getOrderById1, updateOrder } from "../controller/orderController.js"
import authenticateToken from "../autharization/jwtuser.js"
const orderRoute = express.Router()
orderRoute.post('/saveorder',addeorder)
orderRoute.get('/getAllOrders' , authenticateToken, getallorder)
orderRoute.get('/getOrderById/:id', authenticateToken,getOrderById1)
orderRoute.put('/updateOrderById/:id', authenticateToken, updateOrder)
orderRoute.delete('/deleteOrderById/:id',authenticateToken, deleteOrder)
export default orderRoute