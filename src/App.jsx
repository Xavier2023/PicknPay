import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import ProductsPage from './components/Products/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import CartPage from './components/Cart/CartPage'
import MyOrderPage from './components/MyOrderPage/MyOrderPage'
import LoginPage from './components/Authentication/LoginPage'
import SignUpPage from './components/Authentication/SignUpPage'

const App = () =>{

  return (
    <div className='app'>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/orders' element={<MyOrderPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
