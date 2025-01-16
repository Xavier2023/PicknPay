import React from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineElectricalServices } from "react-icons/md";

import './SideBar.css'

const SideBar = () => {
  return (
    <aside className="products-sidebar">
        <h2>Categories</h2>
        <ul className='sidebar'>
            <li>
                <Link to="" className='sidebar-link'><MdOutlineElectricalServices />  Electronics</Link>
            </li>
            <li>
                <Link to="" className='sidebar-link'></Link>
            </li>
            <li>
                <Link to="" className='sidebar-link'></Link>
            </li>
            <li>
                <Link to="" className='sidebar-link'></Link>
            </li>
            <li>
                <Link to="" className='sidebar-link'></Link>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar