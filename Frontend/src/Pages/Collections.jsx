import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuChevronsDown } from "react-icons/lu";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Cards from "../component/Cards";

const Collections = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  let { product ,showSearch, search } = useContext(shopDataContext);

  const toggleCategory = async (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = async (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = product.slice();

    if(showSearch && search){
       productCopy = productCopy.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subcategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProduct = (e) => {
    let fbcopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fbcopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fbcopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(()=>{
    sortProduct()
  },[sortType])

  useEffect(() => {
    setFilterProduct(product);
  }, [product]);

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, product, search, showSearch]);

  return (
    <div className="w-[99vw] min-h-[100vh] pb-[100px] bg-gradient-to-l from-[#141414] to-[#0c2025] pt-[70px] cursor-pointer flex items-start flex-col justify-start md:flex-row overflow-x-hidden z-[2]">
      <div className="w-[100vw] md:min-h-[100vh] md:w-[30vw] lg:w-[20vw] border-r-[1px] border-gray-400 text-[#aaf5fa] p-[20px] lg:fixed">
        <p
          className="text-[25px] font-semibold flex items-center justify-start gap-[5px] "
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS
          {!showFilter && (
            <MdKeyboardDoubleArrowRight className="md:hidden text-[20px] mt-1" />
          )}
          {showFilter && (
            <LuChevronsDown className="md:hidden text-[20px] mt-1" />
          )}
        </p>

        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-[18px] text-[#f8fafa]">CATEGORIES</p>

          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col ">
            <p className="flex items-center justify-between text-[16px] font-light gap-[10px]">
              <input
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
                className="w-3 cursor-pointer"
              />
              Men
            </p>

            <p className="flex items-center justify-between text-[16px] font-light gap-[10px]">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
                className="w-3 cursor-pointer"
              />
              Women
            </p>

            <p className="flex items-center justify-between text-[16px] font-light gap-[10px]">
              <input
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
                className="w-3 cursor-pointer"
              />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border-[2px] border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-[18px] text-[#f8fafa]">SUB-CATEGORIES</p>

          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col ">
            <p className="flex items-center justify-between text-[16px] font-light gap-[10px]">
              <input
                type="checkbox"
                value={"TopWear"}
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer"
              />
              Topwear
            </p>

            <p className="flex items-center justify-between text-[16px] font-light gap-[10px]">
              <input
                type="checkbox"
                value={"BottomWear"}
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer"
              />
              Bottomwear
            </p>

            <p className="flex items-center justify-between text-[16px] font-light gap-[10px]">
              <input
                type="checkbox"
                value={"WinterWear"}
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer"
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="lg:pl-[20%] md:py-[10px]">
        <div className="w-[100vw] md:w-[80vw] flex justify-between p-[20px] flex-col lg:px-[50px] lg:flex-row">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            name=""
            id=""
            onChange={(e)=> setSortType(e.target.value)}
            className="bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] cursor-pointer text-white rounded-lg border-[2px] hover:border-[#46d1f7]"
          >
            <option value="relavent" className="w-[100%]  h-[100%]">
              Sort By: Relavent
            </option>
            <option value="low-high" className="w-[100%] h-[100%]">
              Sort By: Low-High
            </option>
            <option value="high-low" className="w-[100%] h-[100%]">
              Sort By: High-low
            </option>
          </select>
        </div>

        <div className="w-[100vw] min-h-[70vh] flex flex-wrap items-center justify-center gap-[30px] md:w-[60vw] lg:w-[80vw]">
          {filterProduct.map((item, index) => {
            return (
              <Cards
                key={index}
                id={item._id}
                name={item.name}
                image={item.image1}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
