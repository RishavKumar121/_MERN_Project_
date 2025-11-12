import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { ImBin } from "react-icons/im";
import CartTotal from "../component/CartTotal";
import { useNavigate } from "react-router-dom";
 import { toast } from 'react-toastify';


const Cart = () => {
  const [cartdata, setCartData] = useState([]);

  const nevigate = useNavigate()

  const { product, currency, cartItem, UpdateQuantity } =
    useContext(shopDataContext);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            sizes: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] overflow-hidden p-[20px]">
      <div className="w-[100%] h-[8%] mt-[80px] text-center">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="w-[100%] h-[92%] flex gap-[20px] flex-wrap ">
        {cartdata.map((item, index) => {
          const productData = product.find(
            (products) => products._id === item._id
          );

          return (
            <div
              key={index}
              className="w-[100%] h-[10%] border-t border-b cursor-pointer "
            >
              <div className="w-[100%] h-[80%] flex items-start bg-[#51808048] py-[10px] px-[20px] gap-6 rounded-2xl relative">
                <img
                  src={productData.image1}
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />

                <div className="flex items-start justify-center gap-[10px] flex-col">
                  <p className="text-[20px] md:text-[25px] text-[#f3f9fc]">
                    {productData.name}
                  </p>

                  <div className="flex items-center gap-[20px]">
                    <p className="text-[20px] text-[#aaf4e7]">
                      <span className="text-[#FFD700]">{currency}</span>{" "}
                      {productData.price}
                    </p>
                    <p className="w-[40px] h-[40px] text-[16px] text-white bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9] cursor-pointer">
                      {item.sizes}
                    </p>
                  </div>
                </div>
                <input
                  type="number"
                  defaultValue={item.quantity}
                  className="max-w-10 md:max-w-20 md:px-2 md:py-2 py-[5px] px-[10px] text-white text-[18px] font-semibold bg-[#518080b4] border-[1px] border-[#9ff9f9] rounded-md absolute top-[46%] left-[75%] md:top-[40%] md:left-[50%] "
                 onChange={(e)=>e.target.value === "" || e.target.value === "0" ?null :UpdateQuantity(item._id, item.sizes,Number(e.target.value))}
                />

                <ImBin 
                
                 onClick={() => {
    UpdateQuantity(item._id, item.sizes,0);
    toast.success("Product Deleted to cart successfully!");
  }}
                className="text-red-600 w-[25px] h-[25px] absolute md:top-[40%] md:right-[5%] top-[50%] right-1"/>
              </div>

            </div>
          );
        })}
      </div>
      <div className="flex justify-start flex-col items-end my-20">

      <CartTotal/>
      <button 
      onClick={()=>nevigate("/placeorder")}
      className="text-[18px] cursor-pointer bg-[#51808048] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] ml-[30px] mt-[20px] hover:bg-slate-500">
      PROCEED TO CHECKOUT
      </button>
      </div>
    </div>
  );
};

export default Cart;
