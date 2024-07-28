import React from "react";

function Footer() {
  return (
    <footer>
      <div className="foot-page">
        <div className="logo-footer">
          <img width={50} src="/palomitas-de-maiz.png" alt="" />
          <h3>PelisenHD</h3>
        </div>
        <div className="links-footer">
          <a href="">Términos y Aviso de privacidad</a>
          <a href="">Envíanos tus comentarios</a>
          <a href="">Ayuda</a>
        </div>
        <p>
          Hecho por <span>Ricardo Arteaga</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
