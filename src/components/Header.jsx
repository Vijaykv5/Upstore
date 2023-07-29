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

        {/* <Link to="/login">
            <img
              className=" ml-16 w-40 h-10 rounded-full"
              src= "data:image/jpeg;base64,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"  alt="userLogo"
            />
          </Link> */}
      </div>
  
    </nav>
    
    
  </div>
  
</div>



    </div>
  )
}

export default Header