import React from 'react'


import './QuantityInput.css'

const QuantityInput = () => {
  return (
    <>
        <button className="quantity-input-button" disabled> - </button>
        <p className="quantity-display">1</p>
         <button className="quantity-input-button"> + </button>
    </>
  )
}

export default QuantityInput