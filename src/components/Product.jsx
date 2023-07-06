import React from 'react'
import ProductCard from './ProductCard'

const Product = ({products}) => {
    
  return (
    <div className='py-12'>
        <div className='flex flex-col items-center '>
            <h1 className='p-2 bg-black text-white text-center font-bold text-2xl w-80 rounded'>Shopping Everday</h1>
            <span className='w-20 mt-4 h-[3px] bg-black'></span>
            <p className='w-[700px] text-grey mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ullam sequi quae error, dolorem voluptate quasi facilis molestiae officiis eum placeat nulla quibusdam quam consequuntur, suscipit quos incidunt. Autem et perspiciatis unde sunt quas?</p>
        </div>
        <div className='max-w-screen-lg mx-auto  py-10 grid grid-cols-4 gap-12'>
            {
                products.map((item) =>(
                    <ProductCard  key={item._id} product={item}/>
                 ) )
            }
        </div>
    </div>
  )
}

export default Product