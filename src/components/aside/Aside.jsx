import React from "react";
import "./aside.css";



export const Aside = () => {
  const categories = ["men", "women", "children"];
  const brands = ["nike", "adidas", "mokshi"];
  const sizes = ["S", "M", "L"];

 

  return (
    <div className="aside-container">
      <div className="filter-text">
        <div>Filters</div>
        <button >Clear All</button>
      </div>
      <div className="filter-wrapper">
        <h3>Category</h3>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="category"
                id={category}
                value={category}
                
               
              />
              <label htmlFor={category}>{category.toUpperCase()}</label>
            </div>
          );
        })}

        <h3>Brand</h3>
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                name="brand"
                id={brand}
                value={brand}
            
              />
              <label htmlFor={brand}>{brand.toUpperCase()}</label>
            </div>
          );
        })}

        <h3>Sizes</h3>
        {sizes.map((size, index) => {
          return (
            <span key={index}>
              <input
                type="checkbox"
                name="size"
                id={size}
                value={size}
              
              />
              <label htmlFor={size}>{size}</label>
            </span>
          );
        })}
        <h3>Sort by</h3>
        <input
          type="radio"
          name="price"
          id="low-to-high"
         
          value="low-to-high"
          
        />
        <label htmlFor="low-to-high">Low to High</label>
        <input
          type="radio"
          name="price"
          id="High-to-low"
         
        />
        <label htmlFor="High-to-low">High to Low</label>
      </div>
    </div>
  );
};
