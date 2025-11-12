import React from 'react'
import {useNavigate} from "react-router-dom"

const NotFound = () => {

    let nevigate = useNavigate()
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center text-white text-[30px] md:text-[70px] flex-col gap-[20px]'>
     404 Page Not Found
     <button 
     onClick={()=>nevigate("/login")}
     className='bg-white text-black px-[20px] py-[10px] rounded-xl text-[18px] cursor-pointer active:text-white active:bg-slate-600'>Login</button>
    </div>
  )
}

export default NotFound