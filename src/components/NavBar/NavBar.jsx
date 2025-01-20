import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaHome, FaShoppingBag, FaCartArrowDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { BiSolidShoppingBags } from "react-icons/bi";
import './NavBar.css'
import { logout } from '../Services/userServices';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';

const NavBar = () => {

    const userInfo = useContext(UserContext)
    const { cart } = useContext(CartContext)
    

    const handleLogout = () => {
        logout( )
        window.location = "/"
    }

    useEffect(() => {
        handleLogout
    }, [])
  return (
    <div className='nav-bar'>
        <div className='nav-heading'>
            <h3><BiSolidShoppingBags /> Pick 'N' Pay</h3>
            <form className='search-bar'>
                <input type="text" className='search-input' placeholder='Search Products' />
                <button type='submit' className='search-button'><FaSearch /></button>
            </form>
        </div>
        <div className='nav-routes'>
            <ul className='nav-list'>
                <li>
                    <NavLink className='nav-route' to='/' >Home <FaHome /></NavLink>
                </li>
                <li>
                    <NavLink className='nav-route' to='/products'>Products <FaCartArrowDown /></NavLink>
                </li>
                {!userInfo && (
                    <>
                        <li>
                            <NavLink className='nav-route' to='/signup'>SignUp <SiGnuprivacyguard /></NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-route' to='/login'>Login <IoLogIn /></NavLink>
                        </li>
                    </>
                )}
                {userInfo && (
                    <>
                        <li>
                            <NavLink className='nav-route' to='/orders'>My orders <FaShoppingBag /></NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-route' to='/logout' onClick={handleLogout}>Logout <IoLogOut /></NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-route' to='/cart'><p className='cart-count'>{cart.length}</p>Cart <FaCartShopping /></NavLink>
                        </li>
                    </>
                )}
            </ul>
        </div>
    </div>
  )
}

export default NavBar