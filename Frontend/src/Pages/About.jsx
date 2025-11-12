import React from "react";
import Title from "../component/Title";
import about from "../assets/about.jpg";
import NewLetterBox from "../component/NewLetterBox";

const About = () => {
  return (
    <div className="w-[99vw] cursor-pointer min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col gap-[50px] pt-[80px]">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-[100%] flex items-center justify-center max-sm:flex-col lg:flex-row  ">
        <div className="lg:w-[55%] w-[100%] flex items-center justify-center">
          <img
            src={about}
            alt=""
            className="w-[80%]  lg:w-[80%] shadow-md shadow-black rounded-sm"
          />
        </div>

        <div className="w-[80%] lg:w-[45%] flex item-start justify-center flex-col gap-[20px] mt-[20px] lg:mt-[0px] ">
          <p className="w-[100%] lg:w-[80%] text-white text-[13px] md:text-[16px]">
            Ecomm born for smart, seamless shopping-created to deliver quality
            products, trending styles, and everyday essentials in one place,
            with reliable service, fast delivery. and great value, Ecomm makes
            your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p className="w-[100%] lg:w-[80%] text-white text-[13px] md:text-[16px]">
            modern shoppers-combining style, convenience, and affordability,
            Wheather it's fashion, essentials, or trends, we bring everything
            you need to one trusted platform with fast delivery, easy returns,
            and a costomer-first shopping experience you'll love.
          </p>
          <p className="w-[100%] lg:w-[80%] text-[15px] lg:text-[18px] text-white font-bold mt-[10px]">
            Our Mission
          </p>
          <p className="w-[100%] lg:w-[80%] text-white text-[13px] md:text-[16px]">
            Our Mission is a redefine online shopping by delivering quality,
            affordability, and convenience, Ecomm connects customers with
            trusted products and brands, offering a seamless, customer-focused
            experience that saves time, adds vakue, and fits every lifestyle and
            need.
          </p>
        </div>
      </div>

      <div className="w-[100%] flex items-center justify-center flex-col ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />

        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]">
          <div className="w-[90%] lg:w-[33%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Quality Assurance
            </b>
            <p>
              We gurantee quality through strict checks, reliable sourcing, and
              a commitment to customer satisfaction always.
            </p>
          </div>

          <div className="w-[90%] lg:w-[33%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Convenience
            </b>
            <p>
              Shop easily with fast delivery, simple navigation, secure
              checkout, and everything you need in one place.
            </p>
          </div>

          <div className="w-[90%] lg:w-[33%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-white backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Exceptional Customer Service
            </b>
            <p>
              Our dedicated support team ensure quick responses, helpful
              solutions, and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  );
};

export default About;
