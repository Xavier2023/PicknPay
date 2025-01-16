import React from "react";
import ProductCard from "../Common/ProductCard";

import "./Products.css";

const Products = () => {
  return (
    <main className="products">
      <div className="products-heading">
        <h3>Products</h3>
        <select name="sort" id="" className="product-sort">
          <option value="">Relevance</option>
          <option value="price desc">Price Highest to Lowest</option>
          <option value="price asc">Price Lowest to Highest</option>
          <option value="rate desc">Rate Highest to Lowest</option>
          <option value="rate asc">Rate Lowest to Highest</option>
        </select>
      </div>
      <div className="product-items">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default Products;
