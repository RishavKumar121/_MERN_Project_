import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useContext } from "react";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  let { serverURL } = useContext(authDataContext);

  const fetchCount = async () => {
    try {
      const products = await axios.get(serverURL + "/api/product/list", {
        withCredentials: true,
      });
      console.log(products.data.product.length);
      setTotalProducts(products.data.product.length);

      const orders = await axios.post(
        serverURL + "/api/order/list",
        {},
        { withCredentials: true }
      );
      console.log(orders.data.orders.length);
      setTotalOrders(orders.data.orders.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="w-[100vw] relative h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white cursor-pointer ">
      <Nav />
      <Sidebar />
      <div className="absolute w-[70vw] h-[100vh] left-[25%] py-[100px] flex items-start justify-start flex-col gap-[40px]">
        <h1 className="text-[35px] text-[#2fa8cd]">Ecomm Admin Panel</h1>

        <div className="flex items-center justify-start w-[100%] gap-[70px] flex-col md:flex-row ">
          <div className="w-[400px] text-[#dcfafd] max-w-[90%] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop-blur-lg text-[20px] md:text-[25px] border-[1px] border-[#969595] ">
            Total No. of Products :
            <span className="px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]">
              {totalProducts}
              </span>
          </div>

           <div className="w-[400px] text-[#dcfafd] max-w-[90%] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop-blur-lg text-[20px] md:text-[25px] border-[1px] border-[#969595] ">
            Total No. of Orders :
            <span className="px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]">
              {totalOrders}
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
