import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navb() {
  const [isOpen, setIsOpen] = useState(false);

  const abrirMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <button onClick={abrirMenu} className="btn-burger">
          <i
            style={{ fontSize: "large", color: "white" }}
            className="fi fi-rs-bars-sort"
          ></i>
        </button>
        <div className="logo">
          <Link to="/">
            <div className="logo">
              <img src="/palomitas-de-maiz.png" alt="" />
              <h2>PelisenHD</h2>
            </div>
          </Link>
        </div>
        <div className="links">
          <Link to="/peliculas">Peliculas</Link>
          <Link to="/series">Series</Link>
        </div>
      </nav>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <a href="">Peliculas</a>
        <a href="">Series</a>
      </div>
    </>
  );
}

export default Navb;
