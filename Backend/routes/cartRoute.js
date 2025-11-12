import express from "express"
import { addToCart, getUserCart, updateCart } from "../Controller/cartController.js"
import isAuth from "../middleware/isAuth.js"

const cartRoute = express.Router()

cartRoute.post("/addtocart",isAuth,addToCart)
cartRoute.post("/update", isAuth, updateCart )
cartRoute.post("/get", isAuth, getUserCart)

export default cartRoute