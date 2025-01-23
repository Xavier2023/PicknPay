import React, { useState } from "react";

import "./FlashSales.css";
import ProductCard from "../Common/ProductCard";
import useData from "../../hooks/useData";
import ProductsCardSkeleton from "../Products/ProductsCardSkeleton";
const FlashSales = () => {

  
  const {data, isLoading, error } =  useData("products/featured")
  
  const skeleton = [1, 2, 3]
  return (
    <section className="flash-sales">
      <h2>Flash Sales</h2>

      <div className="flash-sales-list">
        {data && 
          data.map(product => 
            (<ProductCard 
              key={product._id} 
              product={product}
            />)
          )
        }
        {isLoading &&
          skeleton.map(s => <ProductsCardSkeleton key={s} />)}
      </div>
    </section>
  );
};

export default FlashSales;
