import React from 'react'
import Table from '../Common/Table'
import { FaUserCircle } from 'react-icons/fa'

import './MyOrderPage.css'

const MyOrderPage = () => {
  return (
    <div className='my-orders'>
        <div className="user-info">
            <div className="user-image">
                <FaUserCircle />
            </div>
            <div>
                <p className="user-name">Xavier</p>
                <p className="user-email">xavier@gmail.com</p>
            </div>
        </div>
        <Table 
            headings={["Order", 'Products', 'Total', 'Status']}
        >
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Apple IPhone 15 Pro Max 8GBRAM 1TB</td>
                    <td><span>&#8358;</span>2,503,000</td>
                    <td>Shipped</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default MyOrderPage