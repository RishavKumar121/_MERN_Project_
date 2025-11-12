import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from "./Title"
import Cards from './Cards'

const RelatedProduct = ({category, subcategory, currentProductId }) => {

    let {product} = useContext(shopDataContext)
    const [related, setRelated] = useState([])

   useEffect(() => {
    if (product.length > 0) {
      let productCopy = product.slice()

      productCopy = productCopy.filter(
        (item) => item.category?.toLowerCase() === category?.toLowerCase()
      )

      productCopy = productCopy.filter(
        (item) => item.subcategory?.toLowerCase() === subcategory?.toLowerCase()
      )

      productCopy = productCopy.filter(
        (item) => item._id !== currentProductId
      )

      setRelated(productCopy.slice(0, 4))
    }
  }, [category, subcategory, currentProductId, product])
  return (
    <div className='my-[130px] md:my-[40px] md:px-[60px]'>
        <div className='ml-[20px] lg:ml-[80px]'>
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
        </div>
        <div className='w-[100%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
            {related ?.map((item, index)=>{
               return <Cards key={index} id={item._id} name={item.name} image={item.image1} price={item.price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProduct