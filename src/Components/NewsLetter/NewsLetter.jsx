import React from 'react';
import './NewsLetter.css';

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Recibe ofertas exclusivas por Correo</h1>
        <p>Suscribete para estar actualizado de la moda</p>
        <div>
            <input type="email" placeholder='Correo electronico' />
            <button>Suscribir</button>
        </div>
    </div>
  )
}
