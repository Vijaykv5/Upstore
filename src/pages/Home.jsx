
import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Product from "../components/Product"
import { useLoaderData } from "react-router-dom"
import { useSelector } from "react-redux"

const Home = () => {
  const [products,setProducts]=useState([])
  const data =useLoaderData()
  useEffect(()=>{
    setProducts(data?.data)
  },[data])
  const cartItem=useSelector(store=>store.cart.items);
  console.log(cartItem);
 
  return (
    <div>
      <Banner/>
      
      <Product products={products}/>
    </div>
  )
}

export default Home