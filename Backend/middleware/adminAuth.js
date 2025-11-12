import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(400).send({ message: "Not authorized login again" });
    }

    let verifyToken = jwt.verify(token, process.env.JWT_SCRET);
    if (!verifyToken) {
      return res.status(400).send({ message: "Invalid Token !!" });
    }

    req.adminEmial = process.env.ADMIN_EMAIL;

    next();
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Error occured in Admin Auth..." });
  }
};

export default adminAuth;
