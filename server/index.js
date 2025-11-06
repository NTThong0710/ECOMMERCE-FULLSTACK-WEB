import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import userRouter from "./route/user.route.js"

const app = express()
app.use(cors())

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

app.get("/",(request,response) =>{
    //server to client
    response.json({
        message: "Server is running " + process.env.PORT
    })
})

app.use("/api/user", userRouter)

connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is running ", process.env.PORT)
    })
})