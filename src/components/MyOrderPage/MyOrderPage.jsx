import React, { useContext, useEffect, useState } from 'react'
import Table from '../Common/Table'
import { FaUserCircle } from 'react-icons/fa'

import './MyOrderPage.css'
import UserContext from '../../contexts/UserContext'
import useData from '../../hooks/useData'
import LoadingComponent from '../Common/LoadingComponent'

const MyOrderPage = () => {
    const {data: orders, isLoading, error} = useData("/order")
    const userObj = useContext(UserContext)

    const getProduct = order => {
        const product = order.products.map(p => `${p.product.title}(${p.quantity})`)

        return product.join(" ,")
    }

    
  return (
    <div className='my-orders'>
        <div className="user-info">
            <div className="user-image">
                <FaUserCircle />
            </div>
            <div>
                <p className="user-name">{userObj?.name}</p>
                <p className="user-email">{userObj?.email}</p>
            </div>
        </div>
        {isLoading && <LoadingComponent />}
        {orders && <Table 
            headings={["Order", 'Products', 'Total', 'Status']}
        >
            <tbody>
                {orders.map((order, index) => 
                <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{getProduct(order)}</td>
                    <td><span>&#8358;</span>{(order.total * 1700).toLocaleString()}</td>
                    <td>{order.status}</td>
                </tr>
                )}
            </tbody>
        </Table>}
    </div>
  )
}

export default MyOrderPage