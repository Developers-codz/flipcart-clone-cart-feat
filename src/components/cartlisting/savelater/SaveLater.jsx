import React from "react";
import "../cartlisting.css";
import { useSelector } from "react-redux";
import { CartCard } from "../CartCard";

export const SaveLater = () => {
  const { savelater } = useSelector((store) => store.carts);
  console.log(savelater);
  return (
    <>
      {savelater.length > 0 && (
        <div className="cart-items-container savelater-wrapper">
          <div className="cart-header-wrapper">
            <div className="cart-header">
              Saved For Later ({savelater.length})
            </div>
          </div>
          {savelater.map((item,i) => <CartCard item={item} key={i} />)}
        </div>
      )}
    </>
  );
};
