import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const Cart = () => {
    const items=useSelector(store=>store.cart.items);
    
  return (
    <div>

    </div>
  )
}

export default Cart