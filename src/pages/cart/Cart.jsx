import React from 'react'
import {CartListing,PriceDetails} from "../../components"
import "./cart.css"

export const Cart = () => {
  return (
    <div className='cart-wrapper'>
      <CartListing />
      <PriceDetails />
      </div>
  )
}
