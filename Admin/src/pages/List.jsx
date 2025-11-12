import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useContext } from "react";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { useEffect } from "react";
import { ImBin } from "react-icons/im";
 import {  toast } from 'react-toastify';


const List = () => {
  let { serverURL } = useContext(authDataContext);

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      let response = await axios.get(serverURL + "/api/product/list", {
        withCredentials: true,
      });
      console.log(response.data.product);
      setList(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const removeList = async (id) => {
    try {
      let response = await axios.post(
        `${serverURL}/api/product/remove/${id}`,
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      toast.success("Product Deleted Successfully")

      if (response.data) {
        fetchList();
      } else {
        console.log("Failed to remove Product");
      }
    } catch (error) {
      console.log(error);
      toast.error("Deleted Product error")
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="w-[99vw] min-h-[100vh] bg-gradient-to-l  from-[#141414] to-[#0c2025] text-white">
        <Nav />

        <div className="w-[100%] h-[100%] flex justify-start items-center">
          <Sidebar />

          <div className="w-[82%] h-[100%] flex gap-[30px] flex-col lg:ml-[320px] md:ml-[230px] py-[50px] mt-[70px] overflow-x-hidden ml-[100px] ">
            <div className="w-[400px] h-[50px] text-[28px] md:text-[40px]">
              All Listed Products
            </div>

            {list?.length > 0 ? (
              list.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[90%] h-[90px] md:h-[120px] gap-[5px] md:gap-[30px]
           p-[10px] md:px-[30px] bg-slate-600 rounded-xl flex items-center justify-start"
                  >
                    <img
                      src={item.image1}
                      alt=""
                      className="w-[30%] h-[90%] md:w-[110px] rounded-lg "
                    />
                    <div className="w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]">
                      <div className="w-[100%] text-[15px] md:text-[20px] text-[#bef0f3]">
                        {item.name}
                      </div>
                      <div className="text-[15px] md:text-[17px] text-[#bef3da]">
                        {item.category}
                      </div>
                      <div className="text-[15px] md:text-[17px] text-[#bef3da]">
                        ₹ {item.price}
                      </div>
                    </div>

                    <div
                      onClick={() => removeList(item._id)}
                      className="w-[10%] h-[100%] flex items-center justify-center cursor-pointer"
                    >
                      <span className="w-[35px] h-[30%] flex items-center justify-center rounded-md  md:hover:text-black hover:text-red-300">
                         <ImBin className="text-red-600 w-[25px] h-[25px]"/>
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-lg text-white">No Product Available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
