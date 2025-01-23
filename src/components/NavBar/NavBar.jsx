import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSearch, FaHome, FaShoppingBag, FaCartArrowDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { BiSolidShoppingBags } from "react-icons/bi";
import './NavBar.css'
import { logout } from '../Services/userServices';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import { getSuggestionAPI } from '../Services/productServices';

const NavBar = () => {
    const [searchInput, setSearchInput] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const userInfo = useContext(UserContext)
    const { cart } = useContext(CartContext)

    const navigate = useNavigate()
    

    const handleLogout = () => {
        logout( )
        window.location = "/"
    }

    useEffect(() => {
        handleLogout
    }, [])

    const handleSearch = e => {
        setSearchInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchInput.trim() !== '') {
            navigate(`/products?search=${searchInput.trim()}`)
        }
        setSuggestions([])
    }

    useEffect(() => {
        if(searchInput.trim() !== "") {
            getSuggestionAPI(searchInput)
                    .then(res => {
                        setSuggestions(res.data)
                    })
                    .catch(err => {
                        console.log(err);
                        
                    })
            
        } else {
            setSuggestions([])
        }
    }, [searchInput])
    
    
  return (
    <div className='nav-bar'>
        <div className='nav-heading'>
            <h3><BiSolidShoppingBags /> Pick 'N' Pay</h3>
            <form className='search-bar' onSubmit={handleSubmit}>
                <input type="text" className='search-input' placeholder='Search Products'
                value={searchInput}
                onChange={handleSearch}
            />
                <button type='submit' className='search-button'><FaSearch /></button>

                {suggestions.length > 0 && <ul className="search-result">
                    {suggestions.map(suggestion => 
                        (<li className="search-result-link" key={suggestion._id}>
                            <Link to={`/products?search=${suggestion.title}`} onClick={() => {
                                setSearchInput('')
                                setSuggestions([])
                            }}>{suggestion.title}</Link>
                        </li>)
                    )}
                </ul>}
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