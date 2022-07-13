import React from "react";
import "./singlecard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCartHandler } from "../../cartsSlice";
import { Link } from "react-router-dom";

export const SingleCard = ({ product }) => {
  const { cart } = useSelector((store) => store.carts);
  const isInCart =(id)=> cart.find((item) => item.id === id);
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <img src={product.image} className="product-image" />
      <div className="category-name-wrapper">
        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </div>
      <div className="product-name-wrapper">
        <div>{product.name.slice(0, 15)}...</div>
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" />
      </div>
      <div className="category-name-wrapper">₹{product.price}</div>
      <div className="category-name-wrapper">
        Sizes Available:{" "}
        {product.sizes.map((size) => (
          <span className="sizes">{size}</span>
        ))}
      </div>
      <div className="category-name-wrapper">
        {isInCart(product.id) ? (
          <Link to="/cart"
            className="add-to-cart-btn"
            
          >
            Go to cart
          </Link>
        ) : (
          <button
            className="add-to-cart-btn"
            onClick={() => dispatch(addToCartHandler({...product,qty:1}))}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
