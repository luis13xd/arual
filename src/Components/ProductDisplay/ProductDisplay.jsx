import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { HomeContext } from '../../Context/HomeContext';

export const ProductDisplay = (props) => {

    const { product } = props;

    const { addToCart } = useContext(HomeContext);

    const [selectedImage, setSelectedImage] = useState(product.image);
    const [selectedSize, setSelectedSize] = useState(null);
    const [showAddedModal, setShowAddedModal] = useState(false);


    const formatCurrency = (price) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleSizeSelection = (size) => {
        if (product.sizes[size]) {
            setSelectedSize(size);
        } else {
            setSelectedSize(null);
            setShowAddedModal(false);
        }
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize); // Aquí estás pasando la talla seleccionada
            setShowAddedModal(true);
            setTimeout(() => setShowAddedModal(false), 1200);
        } else {
            alert('Seleccione talla');
        }
    };    

    return (
        <div className='productdisplay'>
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" className={selectedImage === product.image ? 'selected' : ''} onClick={() => setSelectedImage(product.image)} />
                <img src={product.image2} alt="" className={selectedImage === product.image2 ? 'selected' : ''} onClick={() => setSelectedImage(product.image2)} />
                <img src={product.image3} alt="" className={selectedImage === product.image3 ? 'selected' : ''} onClick={() => setSelectedImage(product.image3)} />
                <img src={product.image4} alt="" className={selectedImage === product.image4 ? 'selected' : ''} onClick={() => setSelectedImage(product.image4)} />
            </div>
            <div className="productdisplay-img">
                <img
                    className='productdisplay-main-img'
                    src={selectedImage}
                    alt=""
                />
            </div>

            <div className="productdisplay-right">
                <h2>{product.name}</h2>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(16)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        {formatCurrency(product.old_price)}
                    </div>
                    <div className="productdisplay-right-price-new">
                        {formatCurrency(product.new_price)}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Este producto está confeccionado en tela suave 100% de algodón, cuenta con instrucciones de uso y cuidado especiales, descritas y detalladas en la etiqueta con la que cuenta el producto físico.
                </div>
                <div className="productdisplay-right-size">
                    <h2>Seleccionar talla</h2>
                    <div className="roductdisplay-right-sizes">
                        {Object.keys(product.sizes).map((size, index) => (
                            <div
                                key={index}
                                className={`size-button ${selectedSize === size ? 'selected' : ''} ${!product.sizes[size] ? 'disabled' : ''} ${!product.sizes[size] ? 'disabled-no-size' : ''}`}
                                onClick={() => handleSizeSelection(size)}
                                disabled={!product.sizes[size]}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                {!selectedSize && (
                    <div className="error-message">
                        Seleccione la talla
                    </div>
                )}
                <button
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                >
                    AGREGAR
                </button>

                {showAddedModal && (
                    <div className="modal">
                        <p>¡Agregado exitosamente!</p>
                    </div>
                )}

                <p className="productdisplay-right-category">
                    <span>Tags : </span>
                    Moda, Ropa, Calidad
                </p>
            </div>

        </div>
    )
}
