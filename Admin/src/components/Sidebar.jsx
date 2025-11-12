import React from "react";
import { useNavigate } from "react-router-dom";

// react icons
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoMdAddCircle } from "react-icons/io";
import { SiTicktick } from "react-icons/si";


const Sidebar = () => {
  let nevigate = useNavigate()
  return (
    <div className="w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0">
      <div className="pt-[40px] flex flex-col pl-[20%] text-[15px] gap-5">
        <div className="flex items-center justify-center border md:justify-start gap-3 border-gray-200 px-3 py-2 hover:bg-[#2c7b89] cursor-pointer"
        onClick={()=>nevigate("/add")}>
          <IoMdAddCircle className="w-[20px] h-[20px]" />
          <p className="hidden md:block">Add Items</p>
        </div>

        <div className="flex items-center justify-center border md:justify-start gap-3 border-gray-200 px-3 py-2 hover:bg-[#2c7b89] cursor-pointer"
        onClick={()=>nevigate("/list")}>
          <LiaClipboardListSolid className="w-[20px] h-[20px]" />
          <p className="hidden md:block">List Items</p>
        </div>

        <div className="flex items-center justify-center border md:justify-start gap-3 border-gray-200 px-3 py-2 hover:bg-[#2c7b89] cursor-pointer"
        onClick={()=>nevigate("/orders")}>
          <SiTicktick className="w-[20px] h-[20px]" />
          <p className="hidden md:block">View Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
