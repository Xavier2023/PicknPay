import React from "react";

import "./FlashSales.css";
import ProductCard from "../Common/ProductCard";
const FlashSales = () => {
  return (
    <section className="flash-sales">
      <h2>Flash Sales</h2>

      <div className="flash-sales-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FlashSales;
