import React, { useEffect, useState }  from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Common/ProductCard";



import "./Products.css";
import useData from "../../hooks/useData";
import ProductsCardSkeleton from "./ProductsCardSkeleton";
// import Pagination from "../Common/Pagination";

const Products = () => {

 const [search, setSearch] = useSearchParams()
 const [page, setPage] = useState(1)
 const category = search.get("category")

  const {data, error, isLoading } = useData("/products", {
    params: {
      category, 
      page,
    }
  }, [category, page])

  useEffect(() => {
    setPage(1)
  }, [category])
    
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search])
    setSearch({...currentParams, page: parseInt(currentParams.page) + 1 })
  }
  useEffect(() => {
    const handleScroll = () => {
      const {scrollTop, clientHeight, scrollHeight} = document.documentElement
      if(scrollTop + clientHeight >= scrollHeight - 1 && !isLoading && data && page < data.totalPages) {
        console.log("Reached to Bottom");
        setPage(prev => prev + 1)
        
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [data, isLoading])

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
          {isLoading &&
          skeleton.map(s => <ProductsCardSkeleton key={s} />)}
          {data?.products && data.products.map(product => 
            <ProductCard 
              key={product._id}
              product={product}
            />)}
      </div>
      {/* <Pagination totalPost={data?.totalProducts} postPerPage={8} onClick={handlePageChange} currentPage={page} /> */}
    </main>
  );
};

export default Products;
