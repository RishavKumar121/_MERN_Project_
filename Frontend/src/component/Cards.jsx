import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Cards = ({name, image, id, price}) => {

    let {currency} = useContext(shopDataContext)
    let nevigate = useNavigate()

  return (
    <div 
    onClick={()=>nevigate(`/productdetail/${id}`)}
    className="w-[300px]  max-h-[90%] h-[400px] bg-[#ffffff0a] backdrop-blur-lg rounded-lg flex items-start justify-start flex-col p-[10px] border-[1px] cursor-pointer border-[#80808049] hover:scale-[102%]">
       <img src={image} alt="" className="w-[100%] h-[80%] rounded-sm object-cover" />
       <div className="mt-5">
       <div className="text-[22px] text-[#c3f6fa]">{name}</div>
       <div className="text-[18px] text-[#c3fafa]"><span className="text-yellow-400">{currency}</span>    {price}</div>
       </div>
    </div>
  );
};

export default Cards;
