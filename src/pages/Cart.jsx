import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import Cartitem from '../components/Cartitem';

const Cart = () => {
    const items=useSelector(store=>store.cart.items);
    console.log(items)
    
  return (
    <>
    <div className='max-w-screen-xl mx-auto py-20 flex'>
    <Cartitem/>
      <h1 className='font-medium text-4xl'>cart totals</h1>
      <div className='flex py-20 -mx-40 font-medium'>
      <p className='text-lg  '>Subtotals</p>
      <p className='pl-8'>${items[0]?.price}</p>
     
      </div>
      <span className='h-1 w-72 ml-8 top-0 my-32  bg-gray-300'/>
     
    </div>
     <p className=' items-start gap-4'>
        heyy

      </p>
    </>
  )
}

export default Cart