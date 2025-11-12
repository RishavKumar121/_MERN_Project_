import React from "react";
import Logo from "../assets/vcart logo.png";

const Footer = () => {
  return (
    <div className="w-[100%] h-[21vh] md:h-[36vh] mb-[77px] md:mb-[0px] ">
      <div className="w-[100%] h-[15vh] md:h-[30vh] bg-[#dbfcfcec]  flex items-center justify-center gap-[6px] md:px-[50px] px-[5px]">
        <div className="w-[35%] md:w-[30%] h-[100%] flex justify-center flex-col gap-[5px] ">
          <div className="flex item-start justify-start gap-[5px] mt-[10px] md:mt-[40px]">
            <img
              src={Logo}
              alt=""
              className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            />
            <p className="text-[19px] md:text-[20px] text-black flex ">Ecomm</p>
           
          </div>
           <p className="text-[15px] text-[#1e2223] hidden md:block">
              Ecomm is your all-in-one online shopping destination, offering
              top-quality products, unbeatable deals, and fast delivery-all
              backed by trusted services designed to make your life easier every
              day.{" "}
            </p>
            <p className="text-[15px] text-[#1e2223] md:hidden ">
              Fast, Easy , Reliable, Ecomm Shopping
            </p>
        </div>

        <div className="w-[25%] md:w-[25%] h-[100%] flex items-center justify-center flex-col text-center ">
          <div className="flex items-center justify-center mt-[10px] md:mt-[40px] ">
            <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              COMPANY
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              Home
            </li>
            <li className="text-[15px] text-[#1e2223]  cursor-pointer">
              About Us
            </li>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              Delivery
            </li>
            <li className="text-[15px] text-[#1e2223]  cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="w-[40%] md:w-[25%] h-[100%] flex items-center justify-center flex-col text-center">
          <div className="flex items-center justify-center mt-[10px] md:mt-[40px] ">
            <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              GET IN TOUCH
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              +91-987654321
            </li>
            <li className="text-[15px] text-[#1e2223]  cursor-pointer">
              contact@ecomm.com
            </li>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              +1-123-456-7890
            </li>
            <li className="text-[15px] text-[#1e2223]  cursor-pointer">
              admin@ecomm.com
            </li>
          </ul>
        </div>
      </div>

      <div className=" w-[100%] h-[1px] bg-slate-400"></div>
      <div className="w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center">
       Copyright 2025@Ecomm.com - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
