import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { HomeContext } from '../../Context/HomeContext';

export const ProductDisplay = (props) => {

    const { product } = props;

    const {addToCart} = useContext(HomeContext);

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img
                        className='productdisplay-main-img'
                        src={product.image}
                        alt=""
                    />
                </div>
            </div>

            <div className="productdisplay-right">
                <h2>{product.name}</h2>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(106)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Este producto está confeccionado en tela suave 100% de algodón, cuenta con instrucciones de uso y cuidado especiales, descritas y detalladas en la etiqueta con la que cuenta el producto físico.
                </div>
                <div className="productdisplay-right-size">
                    <h2>Seleccionar talla</h2>
                    <div className="roductdisplay-right-sizes">
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Añadir al carrito</button>
                {/* <p className="productdisplay-right-category">
                    <span>Categoria : </span>
                    
                </p> */}
                {/* <p className="productdisplay-right-category">
                    <span>Tags : </span>
                    Moda, Ropa, Calidad
                </p> */}
            </div>
        </div>
    )
}
