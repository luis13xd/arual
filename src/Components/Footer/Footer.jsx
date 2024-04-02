import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinteres_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="logo" />
            <p>ARUAL</p>
        </div>
        <ul className="footer-links">
            {/* <li>Compañia</li> */}
            <li>Productos</li>
            <li>Oficinas</li>
            <li>Nosotros</li>
            <li>Contáctanos</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="i" />
            </div>
            <div className="footer-icons-container">
                <img src={pinteres_icon} alt="p" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="w" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - Todos los Derechos Reservados</p>
            <h3>ARUAL S.A.S</h3>
        </div>
    </div>
  )
}
