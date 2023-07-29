import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { deleteItem ,clearCart } from '../redux/Cart';
import { ToastContainer, toast } from "react-toastify";
import {Link} from "react-router-dom"


const Cartitem = () => {
  const productData = useSelector((store) => store.cart.items);

  const dispatch =useDispatch();

  return (
    <>
       <div className="w-2/3 pr-10">
        
      <div className="w-full flex ">
        <h2 className="font-titleFont text-2xl uppercase">shopping cart</h2>
        <button className=' ml-20 bg-red-500 px-5 py-1 rounded-md text-white' onClick={()=>dispatch(clearCart()) & toast.error("Your cart is empty")}>Clear Cart</button>
        </div>
        <div>
          
        
          {productData.map((item)=>{
            {console.log("Yes",item._id)}
           return(
            
            <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6">
              
            <div className="flex items-center gap-5">
              
                  <MdOutlineClose
                  
                    onClick={()=>dispatch(deleteItem(item._id))& toast.error(`${item.title} is removed`)}
                    className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                    
                  />
                   <img
                    className="w-32 h-32 object-cover"
                    src={item.image}
                    alt="productImg"
                  />
                  </div>
                  <h2 className="w-52">{item.title}</h2>
                <p className="w-10">${item.price}</p>
                <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    <span
                      onClick={() =>
                        dispatch(
                          decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </span>
                    {item.quantity}
                    <span
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </span>
                  </div>
                </div>
                <p className="w-14">${item.quantity * item.price}</p>
           
          </div>
          
          
          )})}
          

        </div>
        <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go shopping
        </button>
      </Link>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  )
}

export default Cartitem