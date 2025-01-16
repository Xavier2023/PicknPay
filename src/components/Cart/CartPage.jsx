import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

import './CartPage.css'
import Table from '../Common/Table';
import QuantityInput from '../Common/QuantityInput';

const CartPage = () => {
  return (
    <section className='cart'>
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
            headings={["Item", "Price", "Quantity", "Total", "Remove"]}
        >
            <tbody>
                <tr>
                    <td>Apple IPhone 16 Pro Max 8GBRAM 1TB</td>
                    <td><span>&#8358;</span>3,500,000</td>
                    <td className='table-quantity-input'>
                        <QuantityInput />
                    </td>
                    <td><span>&#8358;</span>3,500,000</td>
                    <td className='delete-icon'><MdDeleteForever /></td>
                </tr>
            </tbody>
        </Table>

        <table className="cart-bill">
            <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td>3,200,000</td>
                </tr>
                <tr>
                    <td>Delivery Fee</td>
                    <td>3,000</td>
                </tr>
                <tr className='cart-bill-total'>
                    <td>Total</td>
                    <td>3,203,000</td>
                </tr>
            </tbody>
        </table>
        <button className="checkout-btn">Checkout <IoBagCheckOutline /></button>
    </section>
  )
}

export default CartPage