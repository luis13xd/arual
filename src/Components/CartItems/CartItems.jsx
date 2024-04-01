import React, { useContext } from 'react';
import './CartItems.css';
import { HomeContext } from '../../Context/HomeContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(HomeContext);

    const formatCurrency = (price) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Productos</p>
                <p>Titulo</p>
                <p>Precio</p>
                <p>Cantidad</p>
                <p>Total</p>
                <p>Quitar</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="" className="carticon-product-icon" />
                                    <p>{e.name}</p>
                                    <p>{formatCurrency(e.new_price)}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>{formatCurrency(e.new_price*cartItems[e.id])}</p>
                                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id)}} alt="" />
                                </div>
                                <hr />
                            </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h2>Detalles de la compra</h2>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>{formatCurrency(getTotalCartAmount())}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Envío</p>
                            <p>Gratis</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>{formatCurrency(getTotalCartAmount())}</h3>
                        </div>
                    </div>
                    <button>Ir a pagar</button>
                </div>
                <div className="cartitems-promocode">
                    <p>Si tienes un codigo promocional, ponlo aquí</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Codigo promocional' />
                        <button>Validar codigo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
