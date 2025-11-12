import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Slidebar from "../components/Sidebar";
import Upload from "../assets/upload.jpg";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
 import {  toast } from 'react-toastify';
import Loading from "../components/Loading";


const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubCategory] = useState("TopWear");
  const [bestseller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const [loading, setLoading] = useState(false)

  let {serverURL} = useContext(authDataContext)

  const HandleAddProduct = async (e)=>{

    setLoading(true)
    e.preventDefault()
     try {
      let formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subcategory",subcategory)
      formData.append("bestseller", bestseller? "true" : "false");

      formData.append("sizes",JSON.stringify(sizes))
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)

      let response = await axios.post(serverURL + "/api/product/addproduct", formData,{
        withCredentials:true
      })
      console.log(response.data)
      toast.success("Add Product Successfully")
      setLoading(false)

      if(response.data){
          setName("")
          setDescription("")
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
          setPrice("")
          setBestSeller(false)
          setCategory("Men")
          setSubCategory("TopWear")
      }

     } catch (error) {
      console.log(error)
        toast.error("Add Product Failed")
        setLoading(false)
     }
  }

  return (
    <div className=" relative w-[100vw] h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] text-white overflow-hidden">
      <Nav />
      <Slidebar />

      <div className="w-[82%] h-[100vh] absolute right-0 overflow-x-hidden bottom-[5%] flex items-center justify-start">
        <form
        onSubmit={HandleAddProduct}
          action=""
          className="w-[100%] md:w-[90%] h-[90%] pt-[70px] py-[60px] px-[30px] flex  flex-col gap-[30px] md:px-[60px] "
        >
          <div className="w-[400px] h-[50px] text-[25px] text-white md:text-[40px]">
            Add Product Page
          </div>

          <div className="w-[80%] h-[130px] flex flex-col items-start justify-center mt-[20px] gap-[10px]">
            <p className="text-[20px] font-semibold md:text-[25px]">
              Upload Images
            </p>
            <div className="w-[100%] h-[100%] flex items-center justify-start">
              <label
                htmlFor="image1"
                className="w-[65px] h-[65px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image1 ? Upload : URL.createObjectURL(image1)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl border-[2px] hover:border-[#1d1d1d]"
                />
                <input
                  type="file"
                  id="image1"
                  hidden
                  onChange={(e) => setImage1(e.target.files[0])}
                  required
                />
              </label>

              <label
                htmlFor="image2"
                className="w-[65px] h-[65px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image2 ? Upload : URL.createObjectURL(image2)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl border-[2px] hover:border-[#1d1d1d]"
                />
                <input
                  type="file"
                  id="image2"
                  hidden
                  onChange={(e) => setImage2(e.target.files[0])}
                  required
                />
              </label>

              <label
                htmlFor="image3"
                className="w-[65px] h-[65px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image3 ? Upload : URL.createObjectURL(image3)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl border-[2px] hover:border-[#1d1d1d]"
                />
                <input
                  type="file"
                  id="image3"
                  hidden
                  onChange={(e) => setImage3(e.target.files[0])}
                  required
                />
              </label>

              <label
                htmlFor="image4"
                className="w-[65px] h-[65px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image4 ? Upload : URL.createObjectURL(image4)}
                  alt=""
                  className="w-[80%] h-[80%] rounded-lg shadow-2xl border-[2px] hover:border-[#1d1d1d]"
                />
                <input
                  type="file"
                  id="image4"
                  hidden
                  onChange={(e) => setImage4(e.target.files[0])}
                  required
                />
              </label>
            </div>
          </div>

          <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] ">
            <p className="text-[20px] font-semibold md:text-[25px]">
              {" "}
              Product Name
            </p>
            <input
              type="text"
              value={name}
              placeholder="Type here"
              onChange={(e) => setName(e.target.value)}
              className="w-[600px] max-w-[99%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer px-[20px] bg-slate-600 text-[20px] placeholder:text-[#ffffffc2]"
              required
            />
          </div>

          <div className="w-[80%] flex items-start justify-center flex-col gap-[10px] ">
            <p className="text-[20px] font-semibold md:text-[25px]">
              {" "}
              Product Description
            </p>
            <textarea
              type="text"
              placeholder="Type here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[600px] max-w-[99%] h-[100px] py-[10px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer px-[20px] bg-slate-600 text-[20px] placeholder:text-[#ffffffc2]"
            />
          </div>

          <div className="w-[80%] flex items-center gap-[10px] flex-wrap  ">
            <div className="w-[100%] md:w-[30%] flex flex-wrap gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">
                Product Category
              </p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                name=""
                id=""
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div className="w-[100%] md:w-[30%] flex flex-wrap gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">
                Sub-Category
              </p>
              <select
                name=""
                id=""
                onChange={(e) => setSubCategory(e.target.value)}
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]"
              >
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>
          </div>

          <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] ">
            <p className="text-[20px] font-semibold md:text-[25px]">
              {" "}
              Product Price
            </p>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="₹ 2000"
              className="w-[600px] max-w-[99%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer px-[20px] bg-slate-600 text-[20px] placeholder:text-[#ffffffc2]"
              required
            />
          </div>

          <div className="w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px] md:p-[0px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Sizes
            </p>

            <div className="flex gap-[15px] items-center justify-start flex-wrap">
              <div
                className={`bg-slate-600 border-[2px] cursor-pointer px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] ${
                  sizes.includes("S")
                    ? "bg-green-200 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("S")
                      ? prev.filter((item) => item !== "S")
                      : [...prev, "S"]
                  )
                }
              >
                S
              </div>

              <div
                className={`bg-slate-600 border-[2px] cursor-pointer px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] ${
                  sizes.includes("M")
                    ? "bg-green-200 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("M")
                      ? prev.filter((item) => item !== "M")
                      : [...prev, "M"]
                  )
                }
              >
                M
              </div>

              <div
                className={`bg-slate-600 border-[2px] cursor-pointer px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] ${
                  sizes.includes("L")
                    ? "bg-green-200 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("L")
                      ? prev.filter((item) => item !== "L")
                      : [...prev, "L"]
                  )
                }
              >
                L
              </div>

              <div
                className={`bg-slate-600 border-[2px] cursor-pointer px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] ${
                  sizes.includes("XL")
                    ? "bg-green-200 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XL")
                      ? prev.filter((item) => item !== "XL")
                      : [...prev, "XL"]
                  )
                }
              >
                XL
              </div>

              <div
                className={`bg-slate-600 border-[2px] cursor-pointer px-[20px] py-[7px] rounded-lg text-[18px] hover:border-[#46d1f7] ${
                  sizes.includes("XXL")
                    ? "bg-green-200 text-black border-[#46d1f7]"
                    : ""
                }`}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XXL")
                      ? prev.filter((item) => item !== "XXL")
                      : [...prev, "XXL"]
                  )
                }
              >
                XXL
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-[10px] mt-[20px]">
            <input
              type="checkbox"
              checked={bestseller}
              onChange={()=>setBestSeller(prev => !prev)}
              id="checkbox"
              className="w-[25px] h-[25px] cursor-pointer"
            />
            <label
              htmlFor="checkbox"
              className="text-[18px] font-semibold md:text-[22px]"
            >
              Add to BestSeller
            </label>
          </div>

          <button className="w-[140px] bg-[#65d8f7] px-[20px] py-[20px] rounded-xl flex items-center justify-center gap-[10px] text-black active:bg-slate-700 active:text-white active:border-[2px] border-white">
            {loading?<Loading/>:"Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
