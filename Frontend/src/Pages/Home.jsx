import React, { useEffect, useState } from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'
import Products from './Products'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'



const Home = () => {

  const [heroCount, setHeroCount] = useState(0)

  let herodata = [
    {text1:"30% OFF Limited Offer", text2:"Style that"},
    {text1:"Discover the Best of Bold Fashion", text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collections", text2:"Shop Now!"},
    {text1:"Choose Your Best Fashion Fit", text2:"Now on Sale!"}
  ]

  useEffect(()=>{
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
    },3000);
     return ()=> clearInterval(interval)
  },[])

  return (
    <div className='relative top-[70px] overflow-x-hidden'>

    <div className='w-[99vw] flex lg:h-[95vh] text-start md:h-[45vh] justify-center max-sm:h-[25vh] bg-gradient-to-l from-[#141414] to-[#0c2025]'>
    
    <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={herodata[heroCount]}/>
    <Background heroCount={heroCount}/>
    </div>
    <Products/>
    <OurPolicy/>
    <NewLetterBox/>
    <Footer/>
    </div>
  )
}

export default Home