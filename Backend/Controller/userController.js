import User from "../Model/userModel.js"


export const getCurrentUser = async (req, res)=>{
   try {
    let user = await User.findById(req.userId).select("-password")
    if(!user){
        return res.status(404).send({message:"User is not found..."})
    }

    return res.status(200).send({message:"Get user successfully...", user})
   } catch (error) {
        console.log(error)
      res.status(404).send({message:"Get current user error..."})
   }
}

export const getAdmin = (req, res)=>{
  try {
    let adminEmail  = req.adminEmial
    if(!adminEmail){
      return res.status(404).send({message:"Admimn is not found..."})
    }
    return res.status(201).send({
      email:adminEmail,
      role:"admin"
    })
  } catch (error) {
     console.log(error)
      res.status(404).send({message:"Get admin error..."})
  }
}