import React, { useSearchParams } from "react";
import ProductCard from "../Common/ProductCard";




import "./Products.css";
import useData from "../../hooks/useData";
import ProductsCardSkeleton from "./ProductsCardSkeleton";

const Products = () => {


 const [search, setSearch ] =  useSearchParams()

  const {data, error, isLoading } = useData("/products", {
    params: {
      category: ""
    }
  })

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

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
        {
          error && <em className="product-error">{error}</em>
        }
          {isLoading && skeleton.map(s => <ProductsCardSkeleton key={s} />)}
        {
          data?.products && data.products.map(product => 
            <ProductCard 
              key={product._id}
              id={product._id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.counts}
              stock={product.stock}
              
            />)
        }
      </div>
    </main>
  );
};

export default Products;
