import React from 'react'
import {useCartContext} from './CartContext'

const Cart = () => {
  const { cart, cartItems, cartTotal } = useCartContext()

  return (
    <h1>Cart</h1>
  )
}

export default Cart