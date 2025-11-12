import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from "../component/RelatedProduct";
import { toast } from "react-toastify";

const ProductDetail = () => {
  let { productId } = useParams();
  let { product, currency ,addtoCart} = useContext(shopDataContext);

  

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [sizes, setSizes] = useState("");

  const fetchProductData = async () => {
    product.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(productData);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setImage(item.image1);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, product]);

  return productData ? (
    <div>
      <div className="w-[99vw] md:h-[100vh]  h-[130vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-[40px]">
        <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center gap-[30px] flex-col-reverse lg:flex-row ">
          <div className="lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col  flex-wrap">
            <div className="w-[50px] md:w-[100px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image1}
                alt=""
                onClick={() => setImage(image1)}
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
              />
            </div>

            <div className="w-[50px] md:w-[100px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image2}
                alt=""
                onClick={() => setImage(image2)}
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
              />
            </div>

            <div className="w-[50px] md:w-[100px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image3}
                alt=""
                onClick={() => setImage(image3)}
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
              />
            </div>

            <div className="w-[50px] md:w-[100px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
              <img
                src={image4}
                alt=""
                onClick={() => setImage(image4)}
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
              />
            </div>
          </div>

          <div className="w-[80%] h-[70%] lg:w-[60%] lg:h-[78%] border-[1px] border-[#80808049] rounded-md overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-[100%] lg:w-[100%] h-[100%] text-[30px] text-white text-center rounded-md object-fill"
            />
          </div>
        </div>

        <div className="w-[100vw] lg:w-[50vw] h-[40vh] lg:h-[75vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px] ">
          <h1 className="text-[aliceblue] text-[40px] font-semibold">
            {productData.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-2">
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStarHalfAlt className="text-[20px] fill-[#FFD700]" />

            <p className=" text-[18px] font-semibold pl-[5px] text-white">
              (124)
            </p>
          </div>

          <p className="text-[30px] font-semibold pl-[5px] text-white">
            {currency} {productData.price}
          </p>

          <p className="w-[80%] md:w-[60%] text-[20px] font-semibold text-white pl-[5px]">
            {productData.description} <span className="hidden md:block">and Stylish, breathable cotton shirt, Easy
            to wash, super comfortable, and designed for effortless style.</span>
          </p>

          <div className="flex flex-col gap-[10px] my-[10px]">
            <p className="text-[25px] font-semibold pl-[5px] text-white ">
              Select Size
            </p>
            <div className=" flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`border py-2 px-4 cursor-pointer bg-slate-300 rounded-md ${
                      item === sizes
                        ? "bg-black text-[#FFD700] text-[20px]"
                        : ""
                    }`}
                    onClick={() => setSizes(item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            <button className="text-[16px] bg-[#495b61c9] py-[10px] px-[20px]  rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white  shadow-md shadow-black active:bg-slate-500"
             onClick={() => {
    if (!sizes) {
      toast.error("Please select a size!");
      return;
    }
    addtoCart(productData._id, sizes);
    toast.success("Product added to cart successfully!");
  }}
            >
              Add To Cart
            </button>

          </div>
          <div className="w-[90%] h-[1px] bg-slate-600"></div>

          <div className="text-white text-[16px] w-[80%]">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product</p>
            <p>Fast resturn and exchange policy within 7 days</p>   
          </div>
        </div>
      </div>

      <div className="w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] overflow-x-hidden flex item-start justify-start flex-col">
        <div className="flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]">
          <p className="border px-5 py-3 text-sm text-white">Description</p>
          <p className="border px-5 py-3 text-sm text-white">Reviews (124)</p>
        </div>

        <div className="w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]">
          <p className="w-[95%] h-[90%] flex items-center justify-center">
            Upgrade your wardrobe with this stylish slim-fit cotton shirt,
            available now on Ecomm, crafted from breathable, high-quality
            fabric, it offers all-day comfort and effortless style, it offers
            all-day comfort and effortless style. easy to maintain and prefect
            for any setting, this shirt is a must-have essential for those who
            value both fashion and function.
          </p>
        </div>
          <RelatedProduct  category={productData.category} subcategory={productData.subcategory} currentProductId={productData._id}/>

      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetail;
