import React from 'react'
import { Link } from 'react-router-dom'
import config from "../../config.json"


import './SideBar.css'
import useData from '../../hooks/useData'

const SideBar = () => {
   const { data: categories} = useData('/category')
  return (
    <aside className="products-sidebar">
        <h2>Categories</h2>
        <ul className='sidebar'>
            {
                categories && categories.map(cateogry => 
                    <li key={cateogry._id}>
                        <Link 
                            to={`/products?category=${cateogry.name}`} 
                            className='sidebar-link'
                        ><img 
                            src={`${config.backendURL}/category/${cateogry.image}`} 
                            alt="" 
                        />
                            {cateogry.name}
                        </Link>
                    </li>
                )
            }
        </ul>
    </aside>
  )
}

export default SideBar