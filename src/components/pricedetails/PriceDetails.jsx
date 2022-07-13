import React from "react";
import "./pricedetails.css";
import { useSelector } from "react-redux";
export const PriceDetails = () => {
  const { cart } = useSelector((store) => store.carts);
  return (
    <div className="price-wrapper">
      <div className="price-head">
        <h3>PriceDetails</h3>
      </div>
      {cart.length > 0 ? (
        <>
          <div className="detail-wrapper">
            <div>Price ({cart.length} items)</div>
            <div>
              ₹{" "}
              {cart.reduce(
                (acc, curr) => (acc += Number(curr.original * curr.qty)),
                0
              )}
            </div>
          </div>
          <div className="detail-wrapper">
            <div>Discount</div>
            <div className="text-success">
              ₹{" "}
              {cart.reduce(
                (acc, curr) => (acc += Number(curr.original * curr.qty)),
                0
              ) -
                cart.reduce(
                  (acc, curr) => (acc += Number(curr.price * curr.qty)),
                  0
                )}
            </div>
          </div>
          <div className="detail-wrapper">
            <div>Delivery Charge</div>
            <div className="text-success">Free</div>
          </div>
          <div className="total-amt detail-wrapper">
            <h3>Total Amount</h3>
            <div>
              ₹{" "}
              {cart.reduce(
                (acc, curr) => (acc += Number(curr.price * curr.qty)),
                0
              ) + 50}
            </div>
          </div>
        </>
      ) : (
        <div className="empty-price">Cart is empty</div>
      )}
    </div>
  );
};
