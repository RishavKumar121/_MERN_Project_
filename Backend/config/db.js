import mongoose from "mongoose";


const ConnectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Mogodb connected successfully...")
        
    } catch (error) {
        console.log("Doesnot connect to mogodb..")
    }
}
export default ConnectDB