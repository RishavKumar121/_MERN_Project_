import jwt from "jsonwebtoken"

const isAuth = async (req, res, next)=>{
 try {
    let {token} = req.cookies
    if(!token){
        return res.status(400).send({message:"User doesn't have a token.."})
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SCRET)

    if(!verifyToken){
        return res.status(400).send({message:"User doesn't have a valid token.."})
    }
    req.userId = verifyToken.userId
    next()

    
 } catch (error) {
     console.log(error)
      res.status(404).send({message:"Error occured to varify token..."})
 }
}

export default isAuth