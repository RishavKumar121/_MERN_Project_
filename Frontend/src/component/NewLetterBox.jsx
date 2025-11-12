import React from "react";

const NewLetterBox = () => {

    const handleSubmit = (e)=>{
      e.preventDefault()
      
    }

  return (
    <div className="w-[100%] h-[40vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col gap-[10px]">
      <p className="md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]">
        Subscribe now & get 20% off
      </p>
      <p className="md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]">
        Subscribe now and enjoy exclusive savings, special deals, and early
        access to new collections.
      </p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-[100%] h-[30%] md:h-[50%] flex items-center justify-center gap-[20px] mt-[20px]"
      >
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-slate-300 w-[600px] max-w-[60%] h-[40px] rounded-lg shadow-black shadow-sm px-[20px] placeholder:text-black"
          required
        />
        <button type="submit" className="text-[15px] md:text-[16px] cursor-pointer text-white  border-[1px] border-[#80808049] px-[10px] py-[12px] rounded-lg md:px-[30px] md:py-[10px] shadow-black shadow-sm bg-[#2e3030c9] hover:bg-slate-500">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewLetterBox;
