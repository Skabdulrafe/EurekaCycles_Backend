 import express from "express"
 let preorderRoute = express.Router()
 import {preordercontoller} from "../controller/preorderController.js"

 preorderRoute.post('/addpreorder',preordercontoller)

 export  default preorderRoute