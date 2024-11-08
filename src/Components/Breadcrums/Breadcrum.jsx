import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrum = (props) => {

  const { product } = props;

  return (
    <div className='breadcrum'>
      Inicio
      <img src={arrow_icon} alt="img"/>
      Tienda
      <img src={arrow_icon} alt="img" />
      {product.category}
      <img src={arrow_icon} alt="img"/>
      {product.name}
    </div>
  )
}
