import React from 'react'
import ProductCard from './ProductCard'

const Product = ({products}) => {
    
  return (
    <div className='py-12'>
        <div className='flex flex-col items-center '>
            <h1 className='p-2 bg-black text-white text-center font-bold text-2xl w-80 rounded'>Shopping Everday</h1>
            <span className='w-20 mt-4 h-[3px] bg-black'></span>
            <p className='w-[700px] text-grey mt-6'>Your one-stop online emporium for all your daily needs. Discover a diverse range of products from fashion and electronics to home essentials. Elevate your shopping experience with unbeatable deals and swift delivery, making every day a shopping delight</p>
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