import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/authContext";
import axios from "axios";

const Order = () => {
  let [orderData, setOrderData] = useState([]);

  let { currency } = useContext(shopDataContext);
  let { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      let response = await axios.post(
        serverUrl + "/api/order/userorder",
        {},
        { withCredentials: true }
      );

      const orders = response.data.orders;

      if (Array.isArray(orders)) {
        let allOrderItem = [];

        orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;

            allOrderItem.push(item);
          });
        });

        setOrderData(allOrderItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] overflow-hidden p-[20px] pb-[150px] ">
      <div className="w-[100%] h-[8%] text-center mt-[80px]">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>

      <div className="w-[100%] h-[92%] flex gap-[20px] flex-wrap ">
        {orderData.map((item, index) => {
          return (
            <div key={index} className="w-[100%] h-[10%] border-t border-b ">
              <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative">
                <img
                  src={item.image1}
                  alt=""
                  className="w-[130px] h-[130px] rounded-md"
                />

                <div className="flex items-start justify-center flex-col gap-[5px]">
                  <p className="text-[20px] md:text-[25px] text-[#f3f9fc]">
                    {item.name}
                  </p>

                  <div className="flex items-center gap-[8px] md:gap-[20px]">
                    <p className="text-[12px] md:text-[18px] text-[#aaf4e7]">
                      <span className="text-yellow-400">{currency}</span>{" "}
                      <span className="text-[#e4fbff] pl-[5px] text-[12px] md:text-[18px]">
                        {" "}
                        {item.price}
                      </span>
                    </p>
                    <p className="text-[12px] md:text-[18px] text-[#aaf4e7]">
                      Quantity :
                      <span className="text-[#e4fbff] pl-[5px] text-[12px] md:text-[18px]">
                        {item.quantity}
                      </span>
                    </p>
                    <p className="text-[12px] md:text-[18px] text-[#aaf4e7]">
                      Size :{" "}
                      <span className="text-[#e4fbff] pl-[5px] text-[12px] md:text-[18px]">
                        {item.sizes}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center">
                    <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
                      Date :{" "}
                      <span className="text-[#e4fbff] pl-[10px] text-[11px] md:text-[16px]">
                        {" "}
                        {new Date(item.date).toDateString()}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-[12px] md:text-[16px] text-[#aaf4e7]">
                      Payment Method :
                      <span className="text-[#e4fbff] pl-[5px] text-[12px] md:text-[16px]">
                        {" "}
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>

                  <div className="absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]">
                    <div className="flex items-center gap-[5px]">
                      <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                      <p className="text-[10px] md:text-[17px] text-[#f3f9fc] ">
                        {item.status}
                      </p>
                    </div>
                  </div>

                  <div className="absolute md:right-[5%] md:top-[40%] right-[2%] top-[83%]">
                    <button onClick={loadOrderData} className="px-[15px] md:py-[7px] py-[4px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] md:text-[16px] cursor-pointer active:bg-slate-500">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
