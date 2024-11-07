import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";
import nav_hamb from "../Assets/nav_hamburguer.png";

export const Navbar = () => {
  const { getTotalCartItems } = useContext(HomeContext);
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const navbar_hamburguer = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <img
        className="nav-dropdown"
        onClick={navbar_hamburguer}
        src={nav_hamb}
        alt="Menu"
      />

      <div className="nav-logo">
        <p className="nav-logo-p">ARUAL</p>
      </div>


      <img src={logo} alt="Tienda" className="nav-logo-img"/>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Tienda
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("hombre");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/hombre">
            Hombre
          </Link>
          {menu === "hombre" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mujer");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mujer">
            Mujer
          </Link>
          {menu === "mujer" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("niños");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/niños">
            Niños
          </Link>
          {menu === "niños" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {/* <Link to='/login'><button>Ingresar</button></Link> */}
        <Link to="/cart">
          <img src={cart_icon} alt="Ingresar" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
