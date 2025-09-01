import express from "express"
import { getpreOrder, preorder } from "../controller/preorderController.js"
import authenticateToken from "../autharization/jwtuser.js"
let preorderRouter=express.Router()
preorderRouter.post('/addpreorder',preorder)
preorderRouter.get('/getpreorder',authenticateToken,getpreOrder)
export default preorderRouter

