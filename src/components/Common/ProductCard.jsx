import React, { useContext } from "react";
import config from "../../config.json"

import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import { FaShoppingBasket, FaStar } from "react-icons/fa";
import CartContext from "../../contexts/CartContext";
import UserContext from "../../contexts/UserContext";

const ProductCard = ({ product }) => {

    const { addToCart } = useContext(CartContext)
    const user0bj = useContext(UserContext)
  
    return (
      <article className="product-card ">
        <div className="product-image">
          <Link to={`/products/${product?._id}`}>
              <img src={`${config.backendURL}/products/${product?.images[0]}`} alt="" />
          </Link> 
        </div>
        <div className="product-details">
          <h3 className="product-price">
            <span>&#8358;</span>{(product?.price * 1700).toLocaleString()}
          </h3>
          <p className="product-title">{product?.title}</p>
          <div className="product-info">
              <div className="product-rate">
                  <p className="product-rating"><FaStar />{product?.reviews.rate}</p>
                  <p className="product-review">({product?.reviews.counts})</p>
              </div>
              {
                product?.stock > 0 && user0bj && 
                <button 
                  className="add-to-cart" 
                  onClick={() => addToCart( product ,1)}
                >
                  <FaShoppingBasket />
                </button>
              }
          </div>
        </div>
      </article>
    );
};

export default ProductCard;
