import React, { useContext } from 'react'
import Logo from "../assets/vcart logo.png"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
 import { ToastContainer, toast } from 'react-toastify';

const Nav = () => {
    const nevigate = useNavigate()

    let {serverURL} = useContext(authDataContext)
    let {getAdmin} = useContext(adminDataContext)

    const AdminLogout = async()=>{
     try {
        let response = await axios.get(serverURL + "/api/auth/logout",{withCredentials:true})
        console.log(response.data)
        toast.success("AdminLogout Successfully")
        getAdmin()
        nevigate("/login")
     } catch (error) {
        console.log(error)
          toast.error("AdminLogout Failed")
     }
    }

  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 cursor-pointer justify-between flex items-center shadow-md px-[30px]'>
     <div className='w-[30%] flex items-center justify-start gap-[10px] 'onClick={()=>nevigate("/")}>
        <img src={Logo} alt=""  className='w-[30px] '/>
        <h1 className='text-[25px] text-black'>Ecommerce</h1>

     </div>
        <button
        onClick={AdminLogout}
         className='text-[15px] hover:border-[2px] border-[#89daea] bg-[#000000ca] py-[10px] px-[20px] rounded-2xl'>
         Logout
        </button>
    </div>
  )
}

export default Nav
