import React from "react";
import { FaCircle } from "react-icons/fa";

const Hero = ({ heroData, heroCount, setHeroCount }) => {
  return (
    <div className="w-[40%] h-[100%] relative">
      <div className="absolute text-[Red] text-[20px] md:text-[40px] lg:text-[55px] left-[10%] top-[10px] lg:top-[130px] md:left-[10%]  ">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="absolute flex items-center justify-center gap-[10px] left-[10%] top-[170px] max-sm:top-[170px]  lg:top-[560px] md:top-[400px]">
      <FaCircle
        className={`w-[14px] ${
          heroCount === 0 ? "fill-orange-500" : "fill-white"
        }`}
        onClick={() => setHeroCount(0)}
      />
      <FaCircle
        className={`w-[14px] ${
          heroCount === 1 ? "fill-orange-500" : "fill-white"
        }`}
        onClick={() => setHeroCount(1)}
      />
      <FaCircle
        className={`w-[14px] ${
          heroCount === 2 ? "fill-orange-500" : "fill-white"
        }`}
        onClick={() => setHeroCount(2)}
      />
      <FaCircle
        className={`w-[14px] ${
          heroCount === 3 ? "fill-orange-500" : "fill-white"
        }`}
        onClick={() => setHeroCount(3)}
      />
      </div>
    </div>
  );
};

export default Hero;
