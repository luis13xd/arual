import React from 'react';
import './Offers.css';
import video from '../Assets/videomural.mp4';

export const Offers = ({ onScrollToPopular }) => {
  return (
    <div className='offers'>

      <div className="offers-main">
        <div className="offers-left">
          <h1>Exclusivo</h1>
          <h1>Ofertas para tí</h1>
          <p>Unicamente en lo más vendido</p>
          <button onClick={onScrollToPopular}>Ver ofertas</button>
        </div>

        <div className="offers-right">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="offers-video"
          />
        </div>
      </div>

    </div>
  )
}
