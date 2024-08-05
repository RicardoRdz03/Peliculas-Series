import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navb from "../components/Navb";
import Footer from "../components/Footer";

function InfoPeli() {
  const [pelicula, setPelicula] = useState([]); // Cambiar a objeto único
  const { titulo } = useParams();

  useEffect(() => {
    const extraer = async () => {
      try {
        const response = await fetch("http://localhost:3001/peliculas");
        const info = await response.json();
        const peliculaEncontrada = info.find(
          (p) => p.titulo.toString() === titulo
        ); // Asegurarse de que el id sea una cadena
        setPelicula(peliculaEncontrada);
      } catch (err) {
        console.log("Error en el id");
      }
    };
    extraer();
  }, []);

  if (!pelicula) {
    return (
      <div>
        <h1 style={{ color: "white" }}>404 Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Navb />
      <section
        key={pelicula.id}
        style={{
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 1)), url(${pelicula.banner})`,
        }}
        className="grid-info"
      >
        <div className="columna1-info">
          <img src={pelicula.caratula} alt="" />
        </div>
        <div className="columna2-info">
          <div className="div-info">
            <h1 style={{ fontWeight: "bold" }}>
              {pelicula.titulo} {`(${pelicula.año})`}
            </h1>
            <h3>{pelicula.genero}</h3>
            <h2>Descripción</h2>
            <p>{pelicula.descripcion}</p>
          </div>
        </div>
      </section>
      <section className="seccion2">
        <div className="grid-info2">
          <div className="columna1-info2">
            <h2>TRAILER</h2>
            <div className="video-container">
              <iframe
                src={pelicula.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="columna2-info2">
            <h2>DATOS</h2>
            <h3>Estado</h3>
            <p>{pelicula.estado}</p>
            <h3>Plataforma</h3>
            <img src={pelicula.plataforma} alt="" />
            <h3>Idioma original</h3>
            <p>{pelicula.idioma}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default InfoPeli;
