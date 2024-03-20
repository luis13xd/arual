import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useColorScheme } from 'react-native-web';
import { HomeContext } from '../../Context/HomeContext';

export const Navbar = () => {

    const { getTotalCartItems } = useContext(HomeContext);
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>

            <div className='nav-logo'>
                <img
                    src={logo}
                    alt="Tienda"
                />
                <p>
                    ARUAL
                </p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Tienda</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("hombre") }}><Link style={{ textDecoration: 'none' }} to='/hombre'>Hombre</Link>{menu === "hombre" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mujer") }}><Link style={{ textDecoration: 'none' }} to='/mujer'>Mujer</Link>{menu === "mujer" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("niños") }}><Link style={{ textDecoration: 'none' }} to='/niños'>Niños</Link>{menu === "niños" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Ingresar</button></Link>
                <Link to='/cart'>
                    <img
                        src={cart_icon}
                        alt="Ingresar"
                    />
                </Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>

        </div>
    )
}
