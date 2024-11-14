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

      <img src={logo} alt="Tienda" className="nav-logo-img" />

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
            setMenu("enterizos");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/enterizos">
            Enterizos
          </Link>
          {menu === "enterizos" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("legginsyfaldas");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/legginsyfaldas">
            Leggings y Faldas
          </Link>
          {menu === "legginsyfaldas" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("bodysytops");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/bodysytops">
            Bodys y Tops
          </Link>
          {menu === "bodysytops" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("sets");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sets">
            Sets seamless
          </Link>
          {menu === "sets" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("accesorios");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/accesorios">
            Accesorios
          </Link>
          {menu === "accesorios" ? <hr /> : <></>}
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
