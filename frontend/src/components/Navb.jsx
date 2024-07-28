import React, { useState } from "react";

function Navb() {
  const [isOpen, setIsOpen] = useState(false);

  const abrirMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <button onClick={abrirMenu} className="btn-burger">
            <i
              style={{ fontSize: "large", color: "white" }}
              className="fi fi-rs-bars-sort"
            ></i>
          </button>
          <img src="/palomitas-de-maiz.png" alt="" />
          <h2>PelisenHD</h2>
        </div>
        <div className="links">
          <a href="">Peliculas</a>
          <a href="">Series</a>
          <input placeholder="Buscar..." type="text" />
          <button className="buscar">
            <i style={{ color: "white" }} className="fi fi-br-search"></i>
          </button>
        </div>
      </nav>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <a href="">Peliculas</a>
        <a href="">Series</a>
        <div>
          <input placeholder="Buscar..." type="text" />
          <button className="buscar">
            <i style={{ color: "white" }} className="fi fi-br-search"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navb;
