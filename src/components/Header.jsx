// import React from 'react'

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Header = () => {
  const cartItems=useSelector(store=>store.cart.items)
  return (

    <div className='w-full h-20 bg-white border-b-2 border-gray-200 flex font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl'>
  <div className='flex items-center justify-between py-4 px-8'>
    <div className='flex items-center'>
      <img className='w-12' src='https://cdn.icon-icons.com/icons2/1826/PNG/512/4202051logosocialsocialmediatorrentutorrent-115637_115664.png' alt='Logo' />
      <Link to='/'><h1 className='ml-2 text-xl font-bold '>UpStore</h1></Link>
    </div>
    
    <nav className='hidden md:flex items-center space-x-8 ml-[700px]'>
    
      <a className=' text-base uppercase hover:underline underline-offset-4 hover:text-green-500 decoration-[2px] font-semibold' href='#'>Home</a>
      <a className=' text-base uppercase hover:underline underline-offset-4 hover:text-green-500 decoration-[2px] font-semibold' href='#'>Pages</a>
      <a className=' text-base uppercase hover:underline underline-offset-4 hover:text-green-500 decoration-[2px] font-semibold' href='#'>Shop</a>
      <a className='text-base uppercase hover:underline underline-offset-4 hover:text-green-500 decoration-[2px] font-semibold' href='#'>Elements</a>
      <div className="relative flex ">
      
    
       <Link to='/cart'><img className="w-14 h-7"src="data:image/png;base64,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"/></Link>
       <div className="bg-green-500  ml-3 -mt-2 font-bodyFont absolute   text-white rounded-full w-[26px] h-6 px-1 ">
        <p className="ml-[4px]">{cartItems.length}</p>
        </div>
      </div>
  
    </nav>
    
    
  </div>
  
</div>



    </div>
  )
}

export default Header