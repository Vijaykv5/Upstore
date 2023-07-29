import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import store from '../redux/store'
import Cartitem from '../components/Cartitem';
import { HiOutlineArrowLeft } from "react-icons/hi";

const Cart = () => {
  
    const items=useSelector(store=>store.cart.items);
   const[totamt,setTotamt]=useState("");

   useEffect(()=>{
    let price=0;
    items.map((item)=>{
      price+=item.price*item.qty;
      return price
    },[items])
    
   })
  return (
    <>
    {console.log(items?.length)}
    {(items.length)> 0 ? 
   <div className="max-w-screen-xl mx-auto py-20 flex">
          <Cartitem/>
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  100
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">100</span>
            </p>
            <button
              
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              Proceed to checkout
            </button>
        </div>
        </div>
    :
   <div>
   <div className='flex items-center justify-center  '>
   <img className="w-[390]" src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"/>
   
   </div>
   <h1 className='text-red-600 text-3xl font-semibold  text-center items-center'>Your Cart is Empty. Please go back to shopping and add products to Cart.</h1>
   <div className=' flex flex-col items-center mt-5'>
   <Link to="/">
   <button className='bg-green-500 hover:bg-green-600 rounded items-center justify-center text-white font-semibold py-2 px-5'>Go Back Shopping</button>
 </Link>
 <br></br>
 </div>
   </div>}
    </>
  )
}

export default Cart