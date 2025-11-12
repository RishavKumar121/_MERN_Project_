import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import NewLetterBox from '../component/NewLetterBox';

const Contact = () => {
  return (
    <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col  gap-[50px] pt-[80px]'>
    <Title text1={"CONTACT"} text2={"US"}/>
    <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
     <div className="lg:w-[55%] w-[100%] flex items-center justify-center">
               <img
                 src={contact}
                 alt=""
                 className="w-[80%]  lg:w-[80%] shadow-md shadow-black rounded-sm"
               />
             </div>
    <div className='w-[80%] lg:w-[45%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
        <p className='w-[100%] lg:w-[80%] text-white font-bold text-[15px] lg:text-[18px]'>Our Store</p>
        <div className='w-[100%] lg:w-[80%] text-white text-[13px] lg:text-[16px]'>
          <p> 1234 random Station</p>
          <p>random city, state, India</p>
        </div>

         <div className='w-[100%] lg:w-[80%] text-white text-[13px] lg:text-[16px]'>
          <p>+91-9876543210</p>
          <p>Email: admin@Ecomm.com</p>
        </div>

        <p className='w-[100%] lg:w-[80%] text-[15px] lg:text-[18px] text-white mt-[10px] font-bold'>Careers at Ecomm</p>
        <p className='w-[100%] lg:w-[80%] text-[15px] lg:text-[18px] text-white  '>Learn more about our term and job openings</p>
        <button className='px-[30px] py-[20px] flex items-center justify-center text-white bg-transparent border active:bg-slate-600 rounded-md cursor-pointer'>Explore Jobs</button>
    </div>
    </div> 
    <NewLetterBox/>
    </div>
  )
}

export default Contact