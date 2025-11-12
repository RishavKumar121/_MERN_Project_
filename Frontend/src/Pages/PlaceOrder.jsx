import React, { useContext } from "react";
import Title from "../component/Title";
import { useState } from "react";
import CartTotal from "../component/CartTotal";
import Razorpay from "../assets/Razorpay.jpg";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 import { toast } from 'react-toastify';


const PlaceOrder = () => {
  let nevigate = useNavigate();

  const [method, setMethod] = useState("cod");

  let { cartItem, product, getCartAmount, delivery_fee, setCartItem } =
    useContext(shopDataContext);

  let { serverUrl } = useContext(authDataContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHamdler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              product.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.sizes = item;
              itemInfo.quantity = cartItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          let response = await axios.post(
            serverUrl + "/api/order/placeorder",
            orderData,
            { withCredentials: true }
          );
          console.log(response.data);
          toast.success("Place Order Successfully")

          if (response.data) {
            setCartItem("");
            nevigate("/order");
          } else {
            console.log(response.data.message);
            toast.error("Place Order Error")
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center relative flex-col md:flex-row gap-[50px]">
      <div className="w-[100%] h-[100%] lg:w-[50%] mt-[90px] flex items-center justify-center lg:mt-[0px]">
        <form
          action=""
          onSubmit={onSubmitHamdler}
          className="w-[95%] h-[100%] lg:w-[70%] lg:h-[70%]"
        >
          <div className="py-[10px]">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="First name"
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              required
              className="w-[48%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
            <input
              type="text"
              placeholder="Last name"
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              required
              className="w-[48%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]"
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="email"
              placeholder="Email address"
              onChange={onChangeHandler}
              name="email"
              value={formData.email}
              required
              className="w-[100%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]"
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="Street"
              onChange={onChangeHandler}
              name="street"
              value={formData.street}
              required
              className="w-[100%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="City"
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              required
              className="w-[48%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
            <input
              type="text"
              placeholder="State"
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              required
              className="w-[48%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="Pincode"
              onChange={onChangeHandler}
              name="pinCode"
              value={formData.pinCode}
              required
              className="w-[48%] h-[50px]  text-white bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
            <input
              type="text"
              placeholder="Country"
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              required
              className="w-[48%]  text-white h-[50px] bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
          </div>

          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px] ">
            <input
              type="text"
              placeholder="Phone"
              onChange={onChangeHandler}
              name="phone"
              value={formData.phone}
              required
              className="w-[100%] text-white h-[50px] bg-slate-700 rounded-md placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
            />
          </div>

          <div>
            <button
              className="text-[18px] bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px]
             border-[1px] border-[#80808049] ml-[30px] mt-[20px] cursor-pointer active:bg-slate-500 absolute right-[35%] bottom-[10%] lg:right-[20%]"
            >
              PLACE ORDER
            </button>
          </div>
        </form>
      </div>
      <div className="w-[100%] lg:w-[50%] min-h-[100%] flex items-center justify-center gap-[30px] ">
        <div className="w-[90%] lg:w-[70%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col ">
          <CartTotal />
          <div className="py-[10px]">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>

          <div className="w-[100%] h-[30vh] lg:h-[100px]  flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px]">
            <button
              onClick={() => setMethod("razorpay")}
              className={`w-[150px] h-[50px] cursor-pointer rounded-sm ${
                method === "razorpay"
                  ? "border-[5px] border-blue-900 rounded-sm"
                  : ""
              }`}
            >
              <img
                src={Razorpay}
                alt=""
                className="w-[100%] h-[100%] object-fill rounded-sm"
              />
            </button>

            <button
              onClick={() => setMethod("cod")}
              className={`w-[200px] cursor-pointer h-[50px] bg-gradient-to-l from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${
                method === "cod"
                  ? "border-[5px]  border-blue-900 rounded-sm "
                  : ""
              }`}
            >
              CASH ON DELIVERY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
