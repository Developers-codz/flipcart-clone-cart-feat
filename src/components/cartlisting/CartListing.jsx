import React from "react";
import "./cartlisting.css";
import { useSelector } from "react-redux";

import { SaveLater } from "./savelater/SaveLater";
import { CartCard } from "./CartCard";

export const CartListing = () => {
  const cartListing = useSelector((store) => store.carts);
  
  return (
    <>
    <div className="cart-items-container">
      <div className="cart-header-wrapper">
        <div className="cart-header">My Cart({cartListing.cart.length})</div>
      </div>
      {cartListing.cart.map((item, i) => {
        return (
        <CartCard flag="fromCart" item={item} key={i}/>
        );
      })}
    </div>
    <SaveLater />
    </>
  );
};
