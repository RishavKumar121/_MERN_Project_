import User from "../Model/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, sizes } = req.body;

    const userData = await User.findById(req.userId);

    //check if it exist
    if (!userData) {
      return res.status(404).send({ message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      if (cartData[itemId][sizes]) {
        cartData[itemId][sizes] += 1;
      } else {
        cartData[itemId][sizes] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][sizes] = 1;
    }

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(201).send({ message: "Added to Cart" });
  } catch (error) {
    return res.status(500).send({ message: "addToCart error" });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { itemId, sizes, quantity } = req.body;

    const userData = await User.findById(req.userId);

    const cartData = await userData.cartData;

    cartData[itemId][sizes] = quantity;
    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(201).send({ message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "UpdatedCart error" });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).send({ message: "User not found" });
    }

    const cartData = userData.cartData || {};

    return res.status(200).send({
      message: "getUserCart successfully",
      cart: cartData, 
    });
  } catch (error) {
    console.error("GetUserCart error:", error);
    return res.status(500).send({ message: "GetUserCart error" });
  }
};
