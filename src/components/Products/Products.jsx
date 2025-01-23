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
 const [sortBy, setSortBy] = useState('')
 const [sortedProducts, setSortedProducts] = useState([])
 const category = search.get("category")
 const searchQuery = search.get("search")

  const {data, error, isLoading } = useData("/products", {
    params: {
      category, 
      page,
      search: searchQuery
    }
  }, [category, page, searchQuery])

  useEffect(() => {
    setPage(1)
  }, [searchQuery, category])
    
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

  useEffect(() => {
    if(data && data.products) {
      const products = [...data.products]

      if(sortBy === "price desc") {
        setSortedProducts(products.sort((a, b) => b.price - a.price))
      } else if(sortBy === "price asc") {
        setSortedProducts(products.sort((a, b) => a.price - b.price))
      } else if(sortBy === "rate desc") {
        setSortedProducts(products.sort((a, b) => b.reviews.rate - a.reviews.rate))
      } else if(sortBy === "rate asc") {
        setSortedProducts(products.sort((a, b) => a.reviews.rate - b.reviews.rate))
      } else {
        setSortedProducts(products)
      }
    }
  }, [sortBy, data])

  return (
    <main className="products">
      <div className="products-heading">
        <h3>Products</h3>
        <select name="sort" id="" className="product-sort" onChange={(e) => setSortBy(e.target.value)}>
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
          {data?.products && sortedProducts.map(product => 
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
