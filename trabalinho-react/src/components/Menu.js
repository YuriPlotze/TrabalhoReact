import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <header className="header">
      <div className="logo">Gymteck</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Menu;
