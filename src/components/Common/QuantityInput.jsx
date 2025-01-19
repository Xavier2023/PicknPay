import React, { useState } from 'react'


import './QuantityInput.css'

const QuantityInput = ({quantityCount, setQuantityCount, stock}) => {

  const handleIncrease = () => {
    setQuantityCount(prev => prev + 1)
  }
  const handleDecrease = () => {
    setQuantityCount(prev => prev - 1)
  }
  return (
    <>
        <button className="quantity-input-button" onClick={handleDecrease} disabled={quantityCount <= 1}> - </button>
        <p className="quantity-display">{quantityCount}</p>
         <button className="quantity-input-button" onClick={handleIncrease} disabled={quantityCount >= stock}> + </button>
    </>
  )
}

export default QuantityInput