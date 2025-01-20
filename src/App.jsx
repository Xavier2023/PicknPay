import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

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
import { getJWT, getUser } from './components/Services/userServices'
import setAuthToken from './utils/setAuthToken'
import { addToCartAPI } from './components/Services/cartServices'

import 'react-toastify/dist/ReactToastify.css'

setAuthToken(getJWT())

const App = () =>{

  const [userInfo, setUserInfo] = useState(null)
  const [cart, setCart] = useState([])

  useEffect(() => {
    try {
      const user = getUser()
      if(Date.now()>= user.exp * 1000) {
        localStorage.removeItem("token")
        location.reload
      } else {
        setUserInfo(user)
      }
    } catch (error) {}
    
  }, [])
 
  const addToCart = (product, quantity) => {
    const updatedCart = [...cart]
    const productIndex = updatedCart.findIndex(item => item.product._id === product._id)

    if(productIndex === -1) {
      updatedCart.push({product, quantity})
    } else {
      updatedCart[productIndex].quantity += quantity
    }

    setCart(updatedCart)

    addToCartAPI(product._id, quantity)
      .then(res => {
        toast.success("Item Added to Cart Sucessfully")
        
      })
      .catch(err => {
        toast.error("Failed to add product")
        setCart(cart)
        
      } )
  }

  return (
    <div className='app'>
      <NavBar 
        userInfo={userInfo}
        cartCount={cart.length}
       />
      <main>
        <ToastContainer postiton="bottom-right"/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<SingleProduct addToCart={addToCart} />} />
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
