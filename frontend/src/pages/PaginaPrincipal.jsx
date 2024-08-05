import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navb from "../components/Navb";
import Footer from "../components/Footer";
import { useExtraerPeliSeries } from "../hooks/useExtraerPeliSeries";
import { useBuscarPeliSerie } from "../hooks/useBuscarPeliSerie";

function PaginaPrincipal() {
  const { peliculas, isLoading, datosPeliculas } = useExtraerPeliSeries();
  const { setInputt, buscarPeli, peliculaEncontrada, buscarPelicula } =
    useBuscarPeliSerie();

  useEffect(() => {
    datosPeliculas();
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
              <div className="cabecera">
                <h1>Las mejores peliculas y series</h1>
                <form onSubmit={buscarPelicula}>
                  <input
                    onChange={(e) => {
                      setInputt(e.target.value);
                    }}
                    placeholder="Buscar..."
                    type="text"
                  />
                  <button className="buscar" type="submit">
                    <i
                      style={{ color: "white" }}
                      className="fi fi-br-search"
                    ></i>
                    <span style={{ color: "white" }}> Buscar</span>
                  </button>
                </form>
              </div>
              {buscarPeli ? (
                <div className="grid-peliculas">
                  {peliculaEncontrada.length > 0 ? (
                    peliculaEncontrada.map((pelis) => (
                      <div key={pelis.id} className="columna1-peliculas">
                        <div>
                          <Link to={`/pelicula/${pelis.titulo}`}>
                            <img
                              className="caratula"
                              src={pelis.caratula}
                              alt="imagen"
                            />
                          </Link>
                          <p style={{ textAlign: "center" }}>{pelis.titulo}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        color: "white",
                        height: "50vh",
                      }}
                    >
                      No se encontró la película
                    </p>
                  )}
                </div>
              ) : (
                <div className="grid-peliculas">
                  {peliculas.map((peli) => (
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
              )}
            </section>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PaginaPrincipal;
