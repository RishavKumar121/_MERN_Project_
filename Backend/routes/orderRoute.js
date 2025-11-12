import express from "express";
import isAuth from "../middleware/isAuth.js";
import {
  allOrder,
  placeOrder,
  updateStatus,
  userOrder,
} from "../Controller/orderController.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRoute = express.Router();
//for user
orderRoute.post("/placeorder", isAuth, placeOrder);
orderRoute.post("/userorder", isAuth, userOrder);

//for admin
orderRoute.post("/list", adminAuth, allOrder);
orderRoute.post("/status", adminAuth, updateStatus);

export default orderRoute;
