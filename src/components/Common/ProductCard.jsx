import React from "react";
import iphone16 from "../../assets/Iphone16.jpg";

import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import { FaShoppingBasket, FaStar } from "react-icons/fa";

const ProductCard = () => {
  
  return (
    <article className="product-card ">
      <div className="product-image">
        <Link to='/products/1'>
            <img src={iphone16} alt="iphone 16 pro max" />
        </Link>
      </div>
      <div className="product-details">
        <h3 className="product-price">
          <span>&#8358;</span>3,500,000
        </h3>
        <p className="product-title">Apple IPhone 16 Pro Max <br /> 8GB RAM | 1TB  </p>
        <div className="product-info">
            <div className="product-rate">
                <p className="product-rating"><FaStar /> 5.0</p>
                <p className="product-review">(120)</p>
            </div>
            <button className="add-to-cart"><FaShoppingBasket /></button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
