import React, { useContext, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";

import './SingleProduct.css'
import QuantityInput from '../Common/QuantityInput';
import useData from '../../hooks/useData';
import { useParams } from 'react-router-dom';
import LoadingComponent from '../Common/LoadingComponent';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';

const SingleProduct = () => {

  const { addToCart } = useContext(CartContext)
  const userObj = useContext(UserContext)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantityCount, setQuantityCount] = useState(1)

  const {id} = useParams()
  
  
  const {data, error, isLoading} = useData(`/products/${id}`)

  return (
    <>
    {
        isLoading? <LoadingComponent /> 
        : (
            <section className='single-product'>
              <div className="image-selection">
                <div className="single-product-thumbnails">
                  {
                    data?.images.map((image, index) => <img src={`http://localhost:5000/products/${image}`} alt={data?.title} className={selectedImage === index ? 'selected-image' : ''} onClick={() =>  setSelectedImage(index)} key={index}  />)  
                  }
                </div>
                <img src={`http://localhost:5000/products/${data?.images[selectedImage]}`} alt={data?.title} className='single-product-display' />
              </div>
              <div className="single-product-detalis">
                <h1 className="single-product-title">{data?.title}</h1>
                <p className="single-product-description">{data?.description}</p>
                <p className='single-product-price'><span>&#8358;</span>{(data?.price * 1700).toLocaleString()}</p>

                {userObj && 
                  <>
                    <h2 className="single-product-quantity">Quantity:</h2>
                    <div className="quantity-input">
                      <QuantityInput quantityCount={quantityCount} setQuantityCount={setQuantityCount} stock={data?.stock} />
                    </div>
                      <button className='add-cart' onClick={() => addToCart(data, quantityCount)}><FaCartPlus /></button>
                    </>
                }
                  </div>
              

            </section>
          )
      }
    </> 
  )
}

export default SingleProduct