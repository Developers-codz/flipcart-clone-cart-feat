import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="header-logo">
        <img
          className="logo-img"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
        />
        <div className="bottom-text">
          <i>Explore</i>
          <i>Plus</i>
        </div>
      </Link>
      <input
        className="searchbar"
        type="text"
        placeholder="Search for products, brands and more"
      />
      <button className="login-btn">Login</button>
      <Link to="/cart" className="cart-link">
        <i className="fa fa-shopping-cart fa-xs" aria-hidden="true"></i>
        <span>Cart</span>
      </Link>
    </div>
  );
};
