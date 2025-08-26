import express from 'express'
const app=express();//create instance of express
import bodyParser from 'body-parser';
import dotenv from 'dotenv' 
import dbConnect from './dbconnection/dbconnection.js';
import cors from "cors";
// import enquiryRoute from './routes/enquiryRotues.js';
// import orderRoute from './routes/orderRoutes.js';
import productd from './routes/productRoutes.js';
import userRout from './routes/userRoutes.js';
// import userRout from './routes/userRoutes.js';
// import preorderRouter from './routes/preorderroutes.js';
dotenv.config();//it loads 
app.use(cors())
dbConnect(process.env.DBURL,process.env.DBNAME);
app.use(bodyParser.urlencoded({extended:false}))//for url encoded data
app.use(express.json())//for parsing json data
// app.use('/client',enquiryRoute)
// app.use('/order',orderRoute)
app.use('/product',productd)
app.use('/user',userRout)
// app.use('/pre',preorderRouter)
app.listen(process.env.PORT,()=>{
    console.log(`the server statrted at http://localhost:${process.env.PORT} `);
})
