import React from "react";

import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import { FaShoppingBasket, FaStar } from "react-icons/fa";

const ProductCard = ({
    id, 
    title, 
    price, 
    rating, 
    ratingCounts, 
    stock, 
    image
  }) => {
  
    return (
      <article className="product-card ">
        <div className="product-image">
          <Link to={`/products/${id}`}>
              <img src={`http://localhost:5000/products/${image}`} alt="" />
          </Link>
        </div>
        <div className="product-details">
          <h3 className="product-price">
            <span>&#8358;</span>{(price * 1700).toLocaleString()}
          </h3>
          <p className="product-title">{title}</p>
          <div className="product-info">
              <div className="product-rate">
                  <p className="product-rating"><FaStar />{rating}</p>
                  <p className="product-review">({ratingCounts})</p>
              </div>
              {
                stock > 0 && <button className="add-to-cart"><FaShoppingBasket /></button>
              }
          </div>
        </div>
      </article>
    );
};

export default ProductCard;
