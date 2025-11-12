import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { userDataContext } from "./UserContext";
import { toast } from "react-toastify";

export const shopDataContext = createContext();
const ShopContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState({});

  //for search
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  let { serverUrl } = useContext(authDataContext);
  let { userData } = useContext(userDataContext);
  let currency = "₹";
  let delivery_fee = 40;

  function App() {
    const notify = () => toast("Wow so easy!");
  }

  const getProducts = async () => {
    try {
      let response = await axios.get(serverUrl + "/api/product/list", {
        withCredentials: true,
      });

      console.log(response.data.product);
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const addtoCart = async (itemId, sizes) => {
    if (!sizes) {
      console.log("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartItem); // Clone the product

    if (cartData[itemId]) {
      if (cartData[itemId][sizes]) {
        cartData[itemId][sizes] += 1;
        toast.success("Add TO Cart Successfully")
      } else {
        cartData[itemId][sizes] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][sizes] = 1;
    }

    setCartItem(cartData);

    if (userData) {
      try {
        let response = await axios.post(
          serverUrl + "/api/cart/addtocart",
          { itemId, sizes },
          { withCredentials: true }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getUserCart = async () => {
    try {
      let response = await axios.post(
        serverUrl + "/api/cart/get",
        {},
        { withCredentials: true }
      );

      setCartItem(response.data);

       if (response.data && response.data.cart) {
        setCartItem(response.data.cart);
      } else {
        setCartItem({});
      }
    } catch (error) {
      console.log(error);
        toast.error(error.message);

    }
  };

  const UpdateQuantity = async (itemId, sizes, quantity)=>{
   
    let cartData = structuredClone(cartItem)
    cartData[itemId][sizes]= quantity
    setCartItem(cartData)

    if(userData){
      try {
      await axios.post(serverUrl + "/api/cart/update",{itemId, sizes, quantity},{withCredentials:true})
        
      } catch (error) {
        console.log(error)
      }
    }
  }

  const getCartCount = () => {
    let totalCount = 0;
    for (let items in cartItem) {
      for (let item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };


  const getCartAmount = () => {
  let totalAmount = 0;

  for (const productId in cartItem) {
    const itemInfo = product.find((value) => value._id === productId);
    if (!itemInfo) continue; // Skip if product not found

    for (const size in cartItem[productId]) {
      const quantity = cartItem[productId][size];
      if (quantity > 0) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }

  return totalAmount;
};

  useEffect(() => {
    getProducts();
  }, []);

 useEffect(() => {
    if (userData) {
      getUserCart();
    }
  }, [userData]);


  let value = {
    product,
    setProduct,
    currency,
    delivery_fee,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    getCartCount,
    addtoCart,
    cartItem,
    setCartItem,
    UpdateQuantity,
    getCartAmount
  };

  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  );
};

export default ShopContext;
