import express from "express"
import { adminLogin, login, logout, register } from "../Controller/authController.js"

const authRoute = express.Router()

authRoute.post("/register",register)
authRoute.post("/login",login)
authRoute.get("/logout",logout)
authRoute.post("/adminlogin",adminLogin)

export default authRoute