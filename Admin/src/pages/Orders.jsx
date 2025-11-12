import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { SiEbox } from "react-icons/si";
 import { toast } from 'react-toastify';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  let { serverURL } = useContext(authDataContext);

  const fetchAllOrders = async () => {
    try {
      let response = await axios.post(
        serverURL + "/api/order/list",
        {},
        { withCredentials: true }
      );

      console.log(response.data);
      setOrders(response.data.orders.reverse());
    } catch (error) {
      console.log(error);
    }
  };


  const statusHandler = async(e, orderId)=>{
  try {
    const response = await axios.post(serverURL + "/api/order/status", {orderId, status:e.target.value},{withCredentials:true})
     toast.success("Status Updated Successfully")
    if(response.data){
     await fetchAllOrders()
    }
  } catch (error) {
    console.log(error)
    toast.error("Status Updated Error")
  }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white">
      <Nav />
      <div className="w-[100%] h-[100%] flex items-center justify-center lg:justify-start">
        <Sidebar />

        <div className="lg:w-[85%] md:w-[70%] h-[100%] mt-[70px] ml-[100px] lg:ml-[310px] md:ml-[250px] flex flex-col  overflow-x-hidden gap-[30px] py-[50px]">
          <div className="w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white">
            All Orders List
          </div>

          {orders.map((order, index) => {
            return (
              <div
                key={index}
                className="w-[90%] h-[40%] bg-slate-600 rounded-xl flex items-start lg:items-center justify-between flex-col lg:flex-row p-[10px] md:px-[20px] gap-[20px] "
              >
                <SiEbox className="w-[60px] h-[60px] text-black p-[5px] rounded-lg bg-white" />
                <div>
                  <div className="flex items-start justify-center flex-col gap-[5px] text-[16px] text-[#56dbfc]">
                    {order.items.map((item, index) => {
                        return (
                          <p key={index}>
                            {item.name.toUpperCase()} * {item.quantity}{" "}
                            <span>{item.sizes}</span>
                          </p>
                        );
                    
                    })}
                  </div>

                  <div className="text-[15px] text-green-100">
                    <p>{order.address.firstName+" "+order.address.lastName}</p>
                    <p>{order.address.street+" ,"}</p>
                    <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.pinCode}</p>
                    <p>{order.address.phone}</p>
                  </div>
                </div>

                <div className="text-[15px] text-green-100">
                  <p>Items : {order.items.length}</p>
                  <p>Method : {order.paymentMethod}</p>
                  <p>Payment : {order.payment ? "Done":"Pending"}</p>
                  <p>Date : {new Date(order.date).toDateString()}</p>
                  <p className="text-[20px] text-white">₹ {order.amount}</p>
                </div>

                <select name="" id="" 
                className="bg-slate-500 rounded-lg border-[1px]px-[8px] py-[10px] border-[#96eef3]"
                onChange={(e)=>statusHandler(e, order._id)}
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
