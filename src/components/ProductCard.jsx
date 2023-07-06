import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate =useNavigate()
   
    const _id=product?.title;
    const new_id=_id.toLowerCase().split(" ").join("");
    const handleDetails=()=>{
        navigate(`/product/${new_id}`,{
            state:{
                item:product,
            }
        })
    }
   
  return (
    <div className='group'>
        <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden'>
            <div>
                {product.isNew&&<div className='bg-red-800 text-white absolute ml-[160px] mt-2  font-bold py-1 px-5 justify-end rounded-sm'>Sale</div>}
            </div>
            <img className='w-full h-full object-cover rounded-md hover:scale-110 duration-500' src={product.image}/>
        </div>
        <div className='w-full border-[1px] px-2 py-4 flex justify-between'>
            <div><h1 className='font-bold'>{product?.title.substring(0,14)}</h1></div>
            <div >
                <div className='flex gap-2 text-sm relative'>
                <p className='line-through text-gray-400'>${product?.oldPrice}</p>
                <p className='font-semibold'>${product?.price}</p>
                </div>  
                
            </div>
            
            </div>
            
            
           
            
            <p  className="bg-green-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-green-600 text-center">Add to cart</p>
    </div>
  )
}

export default ProductCard