import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Cards from './Cards'

const BestSeller = () => {
    const [bestseller , setBestSeller] = useState([])
    let {product} = useContext(shopDataContext)
    
    useEffect(()=>{
        let filteredProduct = product.filter((item)=> item.bestseller)
        setBestSeller(filteredProduct.slice(0,5))
    },[product])

  return (
    <div>
        <div className='h-[8%] w-[100%] text-center mt-[50px] '>
            <Title text1={"BEST"} text2={"SELLER"}/>
            <p className='w-[100%] m-auto text-[13px] md:text-[20px] text-blue-100 px-[10px] '>
                Tried, Tested, Loved, Discover Our All-Time Best Sellers.
            </p>
        </div>
        <div className='w-[100%] h-[50%] flex flex-wrap items-center justify-center gap-[70px] mt-[30px] '>
           {bestseller.map((item, index)=>{
            return  <Cards key={index} name={item.name} image={item.image1} id={item._id} price={item.price}/>
           })}
        </div>

    </div>
  )
}

export default BestSeller