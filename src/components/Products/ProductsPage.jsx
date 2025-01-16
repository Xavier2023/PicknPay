import React from 'react'

import './ProductsPage.css'
import SideBar from './SideBar'
import Products from './Products'

const ProductsPage = () => {
  return (
    <section className='products-page'>
        <SideBar />
        <Products />
    </section>
  )
}

export default ProductsPage