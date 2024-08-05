import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navb from "../components/Navb";
import Footer from "../components/Footer";
import { useFiltrar } from "../hooks/useFiltrar";

function Peliculas() {
  const { isLoading, soloPeliculas, extraerPeliculas } = useFiltrar("pelicula");

  useEffect(() => {
    extraerPeliculas();
  }, []);

  return (
    <>
      <Navb />
      <main style={{ backgroundColor: "rgb(20,20,20)" }}>
        <section>
          {isLoading ? (
            <div className="cargando">
              <h3 style={{ textAlign: "center", color: "white" }}>
                Cargando peliculas, por favor espere la respuesta del
                servidor...
              </h3>
              <img width={100} src="/loading2.gif" alt="" />
            </div>
          ) : (
            <section>
              <div className="cabecera-peliculas">
                <h1>PELICULAS</h1>
              </div>
              <div className="grid-peliculas">
                {soloPeliculas.map((peli) => (
                  <div key={peli.id} className="columna1-peliculas">
                    <div>
                      <Link to={`/pelicula/${peli.titulo}`}>
                        <img
                          className="caratula"
                          src={peli.caratula}
                          alt="imagen"
                        />
                      </Link>
                      <p style={{ textAlign: "center" }}>{peli.titulo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Peliculas;
