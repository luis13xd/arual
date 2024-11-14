import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";
import nav_hamb from "../Assets/nav_hamburgue.png";
import salir from "../Assets/salir.png";

export const Navbar = () => {
  const { getTotalCartItems } = useContext(HomeContext);
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const navbar_hamburguer = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (section) => {
    setMenu(section);
    menuRef.current.classList.remove("nav-menu-visible");
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img
        className="nav-dropdown"
        onClick={navbar_hamburguer}
        src={isMenuOpen ? salir : nav_hamb}
        alt="Menu"
      />

      <div className="nav-logo">
        <p className="nav-logo-p">ARUAL</p>
      </div>

      <img src={logo} alt="Tienda" className="nav-logo-img" />

      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? "nav-menu-visible" : ""}`}>
        {[
          { name: "Tienda", path: "/", key: "home" },
          { name: "Enterizos", path: "/enterizos", key: "enterizos" },
          { name: "Leggings y Faldas", path: "/legginsyfaldas", key: "legginsyfaldas" },
          { name: "Bodys y Tops", path: "/bodysytops", key: "bodysytops" },
          { name: "Sets seamless", path: "/sets", key: "sets" },
          { name: "Accesorios", path: "/accesorios", key: "accesorios" },
        ].map((item) => (
          <li
            key={item.key}
            onClick={() => handleMenuClick(item.key)}
            className={menu === item.key ? "active" : ""}
          >
            <Link to={item.path}>{item.name}</Link>
            {menu === item.key && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="Carrito" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
