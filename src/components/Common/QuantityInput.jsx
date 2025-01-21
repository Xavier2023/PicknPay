import React, { useState } from 'react'


import './QuantityInput.css'

const QuantityInput = ({quantityCount, setQuantityCount, stock, cartPage, productId}) => {

  const handleIncrease = () => {
    {cartPage ?  setQuantityCount("increase", productId) :  setQuantityCount(quantityCount + 1)}
  }
  const handleDecrease = () => {
    {cartPage ?  setQuantityCount("decrease", productId) :  setQuantityCount(quantityCount - 1)}
  }
  return (
    <>
        <button 
          className="quantity-input-button" 
          onClick={handleDecrease} 
          disabled={quantityCount <= 1}
        > - </button>
        <p className="quantity-display">{quantityCount}</p>
         <button 
          className="quantity-input-button" 
          onClick={handleIncrease} 
          disabled={quantityCount >= stock}
        > + </button>
    </>
  )
}

export default QuantityInput