import { gentoken, gentoken1 } from "../config/token.js"
import User from "../Model/userModel.js"
import bcrypt from "bcryptjs"



export const register = async(req, res)=>{
   try {
      const {name, email, password} = req.body
      const existUser = await User.findOne({email})
      if(existUser){
       res.status(400).send({message: "User Already Exist.."})
       return
      }
      
       let hashPassword = await bcrypt.hash(password,5)

       const user = await User.create({
        name,
        email,
        password:hashPassword
       })
        let token = await gentoken(user._id)
        res.cookie("token",token,{
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7*  24 * 60 * 60 * 1000
        })

        return res.status(201).send({message:"User created success", token, user})

   } catch (error) {
      console.log(error)
      res.status(404).send({message:"Register error occcured..."})
   }
}

export const login = async(req, res)=>{
  try {
    const {email,password} = req.body
    let user = await User.findOne({email})

    if(!user){
      res.status(404).send({message:"User is not found!!"})
    }
      let isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch){
      res.status(404).send({message:"Incorrect email and password!!"})
      }

      let token = await gentoken(user._id)
      res.cookie("token",token,{
         httpOnly:true,
         secure:false,
         sameSite:"Strict",
         maxAge: 7 * 24 * 60 * 60 * 1000
      })
        return res.status(201).send({message:"User login successfully", token, user})
      

  } catch (error) {
    console.log(error)
      res.status(404).send({message:"Login error occcured..."})
  }
}

export const logout = async(req, res)=>{
try {
   res.clearCookie("token")
   return res.status(200).send({message:"Logout Successfully !!!"})
} catch (error) {
    console.log(error)
      res.status(404).send({message:"Logout error occcured..."})
}
}


export const adminLogin =async (req, res)=>{
   try {
     const {email, password} = req.body
     if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            let token = await gentoken1(email)
      res.cookie("token",token,{
         httpOnly:true,
         secure:false,
         sameSite:"Strict",
         maxAge: 7 * 24 * 60 * 60 * 1000
      })
        return res.status(201).send({message:"User login successfully", token})
     }
     return   res.status(404).send({message:"Invaid Credential..."})
   } catch (error) {
     console.log(error)
      res.status(404).send({message:"Login error occcured..."})
   }
}