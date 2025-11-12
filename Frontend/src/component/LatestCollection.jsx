import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Cards from './Cards'

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([])

    let {product} = useContext(shopDataContext)

    useEffect(()=>{
     setLatestProducts(product.slice(0,10))
    },[product])

  return (
    <div>
        <div className='h-[8%] w-[100%] text-center md:mt-[50px] mt-[25px]'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
            <p className='w-[100%] m-auto text-[13px] md:text-[20px] text-blue-100 px-[10px] '>Step Into Style - New Collection Dropping This Season !</p>
        </div>
        <div className='w-[100%] h-[50%] flex items-center justify-center gap-[70px] flex-wrap mt-[30px]'>
         {latestProducts.map((item, index)=>{
            return  <Cards key={index} name={item.name} image={item.image1} id={item._id} price={item.price} />
         })}
        </div>
    </div>
  )
}

export default LatestCollection