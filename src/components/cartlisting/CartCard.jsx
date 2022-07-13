import React from 'react'
import {
    removeFromCartHandler,
    qtyIncreaseHandler,
    qtyDecreaseHandler,
    addToSaveLaterHandler
  } from "../../cartsSlice";
  import {  useDispatch } from "react-redux";

export const CartCard = ({flag,item}) => {
    const dispatch = useDispatch();
  return (
    <div className="cart-body">
    <div className="left-pane">
      <img className="cart-prod-img" src={item.image} />
      <div className="qty-btn-wrapper">
        <button
          disabled={item.qty === 1 || flag !== "fromCart"}
          className="handle-qty-btn"
          onClick={() => dispatch(qtyDecreaseHandler(item.id))}
        >
          -
        </button>
        <input
          type="number"
          disabled
          className="qty-input"
          value={item.qty}
        />
        <button
          className="handle-qty-btn"
          disabled={flag !== "fromCart"}
          onClick={() => dispatch(qtyIncreaseHandler(item.id))}
        >
          +
        </button>
      </div>
    </div>
    <div className="right-pane">
      <h3>{item.name}</h3>

      <div>
        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
      </div>
      <div className="f-assured">
        <div>
          Sold by{" "}
          {item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}
        </div>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" />
      </div>
      <div>
        {" "}
        <span>
          <strike className='striked-text'>₹{item.original*item.qty}</strike>
        </span>{" "}
        ₹{item.price * item.qty}
      </div>
    {flag === "fromCart" && <div>
    <button
        className="remove-from-cart-btn"
        onClick={() => dispatch(removeFromCartHandler(item.id))}
      >
        Remove From Cart
      </button>
      <button
        className="remove-from-cart-btn"
        onClick={() => dispatch(addToSaveLaterHandler(item))}
      >
        Save For Later
      </button>
    </div>}
    </div>
  </div>
  )
}
