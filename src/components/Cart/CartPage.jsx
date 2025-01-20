import React, { useEffect, useState, useContext } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

import './CartPage.css'
import Table from '../Common/Table';
import QuantityInput from '../Common/QuantityInput';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';

const CartPage = () => {

    const [subTotal, setSubTotal] = useState(0)
    const userObj = useContext(UserContext)
    const { cart, removeFromCart, updateCart } = useContext(CartContext)
    

    useEffect(() => {
        let total = 0
        cart.forEach(item => {
            total += item.product.price * item.quantity
        })

        setSubTotal((total*1700))
    }, [cart])
    
  return (
    <section className='cart'>
        <div className="user-info">
            {<div className="user-image">
                <FaUserCircle />
            </div>}
            <div>
                <p className="user-name">{userObj?.name}</p>
                <p className="user-email">{userObj?.email}</p>
            </div>
        </div>

        <Table 
            headings={["Item", "Price", "Quantity", "Total", "Remove"]}
        >
            <tbody>
                {cart.map(({product, quantity}) => 
                    <tr key={product._id}>
                        <td>{product.title}</td>
                        <td><span>&#8358;</span>{(product.price * 1700).toLocaleString()}</td>
                        <td className='table-quantity-input'>
                            <QuantityInput quantityCount={quantity} stock={product.stock} setQuantityCount={updateCart} cartPage={true}
                            productId={product._id} />
                        </td>
                        <td><span>&#8358;</span>{(product.price * 1700*quantity).toLocaleString()}</td>
                        <td className='delete-icon'><MdDeleteForever onClick={() => removeFromCart(product._id)} /></td>
                    </tr>
                )}
            </tbody>
        </Table>

        <table className="cart-bill">
            <tbody>
                <tr>
                    <td>Subtotal</td>
                    <td><span>&#8358;</span>{(subTotal).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Delivery Fee</td>
                    <td><span>&#8358;</span>3,000</td>
                </tr>
                <tr className='cart-bill-total'>
                    <td>Total</td>
                    <td><span>&#8358;</span>{(subTotal + 3000).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
        <button className="checkout-btn">Checkout <IoBagCheckOutline /></button>
    </section>
  )
}

export default CartPage