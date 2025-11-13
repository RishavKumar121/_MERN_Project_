import React, { useContext, useState } from "react";
import Logo from "../assets/vcart logo.png";
import { MdYoutubeSearchedFor } from "react-icons/md";
import { userDataContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";

//react icons
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdCollections } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { shopDataContext } from "../context/ShopContext";
 import { toast } from 'react-toastify';

const Nav = () => {

  let [showProfile, setShowProfile] = useState(false)

  let {showSearch, setShowSearch,search, setSearch, getCartCount} = useContext(shopDataContext)
    
  let {serverUrl} = useContext(authDataContext)

  let {  getCurrentUser ,userData } = useContext(userDataContext);

  const nevigate = useNavigate()

  const HandleLogout = async()=>{
   try {
    const response = await axios.get(serverUrl + "/api/auth/logout",{withCredentials:true})
    console.log(response.data)
   getCurrentUser()
    nevigate("/login")
    toast.success("User Logout Successfully")
   } catch (error) {
    console.log(error)
    toast.error("User Logout Error")
   }
  }

  return (
    <div className="w-[100vw] h-[70px] cursor-pointer bg-[#ecfafaec] px-[30px] flex items-center z-10 fixed top-0  max-sm:fixed max-sm:top-0 justify-between shadow-md shadow-black">
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px] ">
        <img src={Logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans">Ecomm</h1>
      </div>
      <div className="w-[50%] lg:w-[40%] hidden md:flex  ">
        <ul className="flex items-center justify-center gap-[19px]  text-white">
          <li className="text-[15px] bg-[#000000c9] py-[10px] px-[20px] rounded-2xl hover:bg-slate-500"
          onClick={()=>nevigate("/")}>
            HOME
          </li>
          <li className="text-[15px] bg-[#000000c9] py-[10px] px-[20px] rounded-2xl hover:bg-slate-500"
           onClick={()=>nevigate("/collection")}>
            COLLECTIONS
          </li>
          <li className="text-[15px] bg-[#000000c9] py-[10px] px-[20px] rounded-2xl hover:bg-slate-500"
           onClick={()=>nevigate("/about")}>
            ABOUT
          </li>
          <li className="text-[15px] bg-[#000000c9] py-[10px] px-[20px] rounded-2xl hover:bg-slate-500"
           onClick={()=>nevigate("/contact")}>
            CONTACT
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex justify-end gap-[20px]">
        <MdYoutubeSearchedFor className="w-[38px] h-[35px] text-[#000000]" onClick={()=>{setShowSearch(prev => !prev); nevigate("/collection")}}/>


        {!userData && (
          <FaUserCircle className="w-[38px] h-[29px] text-[#000000]" onClick={()=>setShowProfile(prev => !prev)}/>
        )}
        {userData && (
          <div className="w-[30px] h-[30px]   bg-[#080808] text-white rounded-full flex items-center justify-center" onClick={()=>setShowProfile(prev => !prev)}>
             {userData.name.split(" ")[0][0].toUpperCase()}
          </div>
        )}

        <FaShoppingCart 
        onClick={()=>nevigate("/cart")}
        className="w-[38px] h-[29px] text-[#000000] hidden md:block " />
        <p className="absolute w-[20px] h-[20px] items-center bg-red-500 px-[5px] py-[2px] text-white justify-center  rounded-full text-[11px] top-[10px] right-[23px] hidden md:block">
          {getCartCount()}
          </p>
      </div>


    {/* for serch */}
      { showSearch && <div className="w-[100%] h-[80px] absolute bg-[#d8f6f9dd] top-[100%] right-0 left-0 flex items-center justify-center">
        <input placeholder="Search Here..."
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
         type="text" className="w-[50%] h-[60%] max-sm:w-[90%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"/>
      </div>}

      {/* for profile */}
      {showProfile && <div className="w-[220px] h-[150px] bg-[#000000d7] absolute top-[110%] right-[2%] border-[1px] border-[#aaa9a9]  rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] text-white text-[17px] flex flex-col justify-around items-start py-[10px]">
            
            {!userData && <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f]"
            onClick={()=>{
                nevigate("/login"); setShowProfile(false)
            }}
            >Login</li>}

           {userData && <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f]" onClick={()=>{HandleLogout();setShowProfile(false)}}>Logout</li>}

            <li onClick={()=>nevigate("/about")} className="w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f] md:hidden ">About</li>
            
            <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#2f2f2f]"
            onClick={()=>nevigate("/order")}
            >Orders</li>
          </ul>
        </div>}


        {/* bottom nav */}
        <div className="w-[100vw] h-[90px] bg-[#191818] fixed bottom-0 left-0 md:hidden px-[20px] flex items-center justify-between ">
        
            <button className="text-white flex flex-col items-center justify-center gap-[2px] "  onClick={()=>nevigate("/")}><IoHome className="w-[30px] h-[30px]"/>Home</button>
            <button className="text-white flex flex-col items-center justify-center gap-[2px] "  onClick={()=>nevigate("/collection")}><MdCollections className="w-[30px] h-[30px]"/>Collection</button>
            <button className="text-white flex flex-col items-center justify-center gap-[2px] "  onClick={()=>nevigate("/contact")}>< IoMdContacts className="w-[30px] h-[30px]"/>Contact</button>
            <button onClick={()=>nevigate("/cart")} className="text-white flex flex-col items-center justify-center gap-[2px] "><FaShoppingCart className="w-[30px] h-[30px]"/>Cart</button>
        <p className="absolute w-[25px] h-[25px] items-center bg-red-500 px-[5px] py-[2px] text-white justify-center  rounded-full text-[15px] top-[10px] right-[10px] ">{getCartCount()}</p>


        </div>
    </div>
  );
};

export default Nav;
