import React from "react";
import Logo from "../assets/vcart logo.png";
import Google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import  { authDataContext } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios"
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
 import {  toast } from 'react-toastify';
import Loading from "../component/Loading";


const Login = () => {
  let navigate = useNavigate();

    let {serverUrl} = useContext(authDataContext)

    let {getCurrentUser} = useContext(userDataContext)
  
          let[email, setEmail] = useState("")
          let[password, setPassword] = useState("")
          let [loading, setLoading] = useState(false)

          async function HandleLogin(e) {
            setLoading(true)
            e.preventDefault()
            try {
                const response = await axios.post(serverUrl + "/api/auth/login",{
                    email, password
                }, {withCredentials: true})
                console.log(response.data)
                toast.success("User Login Successfully...")
                setLoading(false)
               getCurrentUser()
                navigate("/")
            } catch (error) {
                console.log(error)
                toast.error("User Login Error")
            }
          }

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        onClick={() => navigate("/")}
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer max-sm:justify-center"
      >
        <img src={Logo} alt="" className="w-[40px]" />
        <h1 className="text-[22px] font-sans">Ecomm</h1>
      </div>

      <div className="w-[100%] h-[100px] flex justify-center flex-col items-center gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px] font-semibold">
          Welcome to Ecomm, Place your order
        </span>
      </div>

      <div className="w-[90%] max-w-[600px] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
            onSubmit={HandleLogin}
          action=""
          className="w-[90%] h-[90%] flex flex-col justify-start items-center gap-[20px]"
        >
          <div className="w-[90%] h-[50px] flex items-center justify-center rounded-lg gap-[10px]  bg-[#42656cae] py-[20px] cursor-pointer">
            <img className="w-[20px]" src={Google} alt="" />
            Login with Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

          <div className="w-[90%] h-[400px] flex flex-col gap-[15px] justify-center items-center">
            

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
            />

            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">{loading?<Loading/>:"Login"}</button>
            <p className="flex gap-[10px]">You haven't any account? <span className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer " onClick={()=>navigate("/signup")}>Create a new Account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
