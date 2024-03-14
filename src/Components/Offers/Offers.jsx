import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image1.png';

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusivo</h1>
            <h1>Ofertas para tí</h1>
            <p>Unicamente en lo más vendido</p>
            <button>Ver ofertas</button>
        </div>

        <div className="offers-right">
            <img src={exclusive_image} alt="exclusivo" />

        </div>
    </div>
  )
}
