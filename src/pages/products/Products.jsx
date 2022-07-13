import React from 'react'
import data from "../../data/data.json"
import {SingleCard,Aside} from "../../components"

export const Products = () => {
  console.log(data)
  return (
    <>
    <Aside />
    <div className="main-wrapper">
    {data.products.map((product,index) => {
      return <SingleCard product={product} key={index} />;
    })}
 
</div>
    </>
  )
}
