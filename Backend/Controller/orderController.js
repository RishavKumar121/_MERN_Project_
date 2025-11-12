import Order from "../Model/orderModel.js";
import User from "../Model/userModel.js";


//for user
export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;

    const orderData = {
      items,
      amount,
      userId,
      address,
      paymentMethod :'COD',
      payment: false, 
      date:Date.now()
    };

    const newOrder = await Order(orderData)
    await newOrder.save()

    // after order success to remove order for cart

    await User.findByIdAndUpdate(userId,{cartData:{}})

    return res.status(201).send({message:"Order Placed"})
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:"Order Placed error"})
  }
};



export const userOrder = async(req, res)=>{
  try {
    const userId = req.userId;
    const orders = await Order.find({userId})

    return res.status(200).send({message:"UserOrder found success", orders})
  } catch (error) {
     console.log(error)
     return res.status(500).send({message:"UserOrder error"})
  }
}

//for admin
export const allOrder = async(req, res)=>{
  try {
    let orders = await Order.find({})
    return res.status(200).send({message:"Find AdminAllOrder Success...", orders})
  } catch (error) {
    console.log(error)
    return res.status(500).send({message:"adminAllOrder"})
  }
}


export const updateStatus = async(req, res)=>{
  try {
    const {orderId, status} = req.body

    await Order.findByIdAndUpdate(orderId,{status})

    return res.status(201).send({message:"Status Updated.."})
  } catch (error) {
     console.log(error)
     return res.status(500).send({message:"StatusUpdate error"})
  }
}