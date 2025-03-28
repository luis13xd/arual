import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import video from "../Assets/video.mp4";

export const Hero = ({ onscrollNew }) => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>ARUAL SPORT</h2>
        <div>
          <p>Vístete para</p>
          <p>tu mejor versión</p>
        </div>
        <button className="hero-latest-btn"  onClick={onscrollNew}>
          <div>Ultima Colección</div>
          <img src={arrow_icon} alt="icono2" />
        </button>
      </div>

      <div className="hero-right">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video"
          alt="ARUAL SPORT"
        ></video>
      </div>
    </div>
  );
};
