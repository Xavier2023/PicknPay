import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import UserContext from './contexts/UserContext'
import CartContext from './contexts/CartContext'

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
import { addToCartAPI, decreaseProducttAPI, getCartAPI, increaseProductAPI, removeFormCartAPI } from './components/Services/cartServices'

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
        
      })

    }

    const removeFromCart = (id) => {
      const OldCart = [...cart]
      const newCart = OldCart.filter(item => item.product._id !== id)
      setCart(newCart)
      removeFormCartAPI(id)
        .catch(err => {
          toast.error("Something went wrong")
          setCart(OldCart)
        })
      
    }

    const updateCart = (type, id) => {
      const oldCart = [...cart]
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(item => item.product._id === id)

      if(type === "increase") {
        updatedCart[productIndex].quantity += 1
        setCart(updatedCart)
        increaseProductAPI(id)
          .catch(err => {
            toast.error("Something went wrong")
            setCart(oldCart)
          })
      } 
      if(type === "decrease"){
        updatedCart[productIndex].quantity -= 1
        setCart(updatedCart)
        decreaseProducttAPI(id)
          .catch(err => {
            toast.error("Something went wrong")
            setCart(oldCart)
          })
      }
      
    }

  

  const getCart = () => {
    getCartAPI()
      .then(res => {
        setCart(res.data)
      })
      .catch(err => {
        toast.err("Somethingt went wrong")
      })
  }

  useEffect(() => {
    if(userInfo) {
      getCart()
    }
  }, [userInfo])

  return ( 
    <UserContext.Provider value={userInfo}>
      <CartContext.Provider value={{addToCart, removeFromCart, updateCart, cart}}>

      <div className='app'> 
        <NavBar 
          cartCount={cart.length}
        />
        <main>
          <ToastContainer postiton="bottom-right"/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<CartPage
            
            />} />
            <Route path='/orders' element={<MyOrderPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </main>
      </div>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App
