import React, { useState } from 'react'
import { product } from '../../../Product'
import { FaCartPlus } from "react-icons/fa";

import './SingleProduct.css'
import QuantityInput from '../Common/QuantityInput';

const SingleProduct = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <section className='single-product'>
      <div className="image-selection">
        <div className="single-product-thumbnails">
          {
            product.images.map((image, index) => <img src={image} alt={product.title} className={selectedImage === index ? 'selected-image' : ''} onClick={() =>  setSelectedImage(index)} />)  
          }
        </div>
        <img src={product.images[selectedImage]} alt={product.title} className='single-product-display' />
      </div>
      <div className="single-product-detalis">
        <h1 className="single-product-title">{product.title}</h1>
        <p className="single-product-description">{product.description}</p>
        <p className='single-product-price'>${product.price.toFixed(2)}</p>

        <h2 className="single-product-quantity">Quantity:</h2>
        <div className="quantity-input">
          <QuantityInput />
        </div>
          <button className='add-cart'><FaCartPlus /></button>
      </div>
    </section>
  )
}

export default SingleProduct