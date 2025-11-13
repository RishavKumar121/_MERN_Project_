import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import ConnectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import authRoute from "./routes/authRoute.js"
import userRoutes from "./routes/userRoute.js"
import productRoute from "./routes/productRoute.js"
import cartRoute from "./routes/cartRoute.js"
import orderRoute from "./routes/orderRoute.js"

dotenv.config()

const port = process.env.PORT
const app = express()
app.use(cors({
    origin:["https://mern-project-frontend-gyz1.onrender.com","https://ecommerce-admin-vup3.onrender.com"],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)

app.get("/",(req, res)=>{
    res.send("I made admin pannel")
})

app.listen(port, ()=>{
    console.log(`localhost:${port}`)
    ConnectDB()
})
