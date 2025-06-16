import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Principal
      </Link>
      <Link className="nav-link text-white" to="/oferta">
        Peliculas
      </Link>
    </div>
  </nav>
);
export default Navbar;
