import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const OneProduct = () => {
    const star=['https://cdn-icons-png.flaticon.com/512/69/69495.png']
    const[details,setDetails]=useState({});
     const location=useLocation();
     useEffect(()=>{
        setDetails(location?.state?.item);
     },[]);
  return (
    <div>
        <div className='max-w-screen-xl mx-auto w-4/5 my-10 flex gap-10'>
            <div>
            {details.isNew&&<div className='bg-red-800 text-white absolute ml-[300px] mt-2  font-bold py-1 px-5 justify-end rounded-sm'>Sale</div>}
                <img className='w-full h-[450px] object-cover rounded'src={details.image}/>
            </div>
            <div className='w-3/5 flex '>
            <div className=''>
                <h2 className='font-bold py-6 text-4xl'>{details.title}</h2>
                <p className='font-bold text-2xl uppercase mb-5'>{details?.category}</p>
                <div className='flex text-xl'>

                <p className='line-through text-gray-400 '>${details?.oldPrice}</p>
                <p className='font-semibold'>${details?.price}</p>

                </div>
                <div className='flex my-8'>

                     <img className='w-5 h-5' src={star[0]}/>
                     <img className='w-5 h-5' src={star[0]}/>
                     <img className='w-5 h-5' src={star[0]}/>
                     <img className='w-5 h-5' src={star[0]}/>

                     <img className='w-5 h-5' src={star[0]}/>
                  {console.log(details)}
                  
                </div>
                <div>
                    <p>{details?.description}</p>
                </div>
                <div className='flex items-center my-5 gap-10 m-3'>
                    <p className='text-sm'>Quantity</p>
                    <div className='flex  items-center gap-4 text-base font-semibold'>
                    <button className='hover:bg-black hover:text-white px-2'>-</button>
                    <button>{1}</button>
                    <button className='hover:bg-black hover:text-white px-2'>+</button>
                    <p  className="bg-green-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-green-600 text-center">Add to cart</p> 
                    </div>

                </div>
            </div>

        </div>
        </div>
        
    </div>
  )
}

export default OneProduct