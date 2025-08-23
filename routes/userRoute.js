import express from 'express'
import { registerController, getProfileController, userLoginController } from '../controllers/userController.js'

let userRouter = express.Router();

userRouter.post('/register',registerController)
userRouter.post('/login',userLoginController)
userRouter.post('/profile', getProfileController)


export default userRouter