import React from "react";
import Title from "./Title";
import { RiExchangeFundsFill } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const OurPolicy = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] md:h-[70vh] flex items-center justify-start gap-[50px] flex-col">
      <div className="h-[8%] w-[100%] text-center mt-[70px]">
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className="w-[100%] text-[13px] m-auto md:text-[20px] px-[10px] text-blue-100">
          Costumer-Friendly Policies - Committed to Your Satisfaction and
          Safety.
        </p>
      </div>

      <div className="w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center max-sm:mt-[10px] flex-wrap gap-[60px] lg:gap-[50px] ">
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
          <RiExchangeFundsFill className="md:w-[60%] w-[30%] h-[30px] md:h-[60px] text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            Easy Exchange Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Exchange Mode Easy - Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
          <TbRosetteDiscountCheckFilled className="md:w-[60%] w-[40%] h-[30px] md:h-[60px] text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            7 Days Return Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Shop with COnfidence - Days Easy Return Guarantee.
          </p>
        </div>

        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
          < BiSupport className="md:w-[60%] w-[30%] h-[30px] md:h-[60px] text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            Best Customer Support
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            Trusted Customer Support - Your Satisfaction Is Our Priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
