import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navb from "./Navb";
import Footer from "./Footer";

function PaginaPrincipal() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputt, setInputt] = useState("");
  const [buscarPeli, setBuscarPeli] = useState(false);
  const [peliculaEncontrada, setPeliculaEncontrada] = useState([]);

  const datosPeliculas = async () => {
    try {
      const response = await fetch("http://localhost:3001/peliculas");
      const info = await response.json();
      setPeliculas(info);
      setIsLoading(false);
    } catch (err) {
      console.log("Error al extraer los datos");
      setIsLoading(false);
    }
  };

  const buscarPelicula = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/peliculas");
      const info = await response.json();
      const inputLower = inputt.toLowerCase();
      const laPelic = info.filter((p) =>
        p.titulo.toLowerCase().includes(inputLower)
      );

      setPeliculaEncontrada(laPelic);
      setBuscarPeli(true);
    } catch (error) {
      console.log("Error al buscar pelicula", error);
    }
  };

  useEffect(() => {
    datosPeliculas();
  }, []);

  return (
    <>
      <Navb />
      <main style={{ backgroundColor: "rgb(20,20,20)" }}>
        <section>
          {isLoading ? (
            <h3 style={{ textAlign: "center" }}>
              Cargando peliculas, por favor espere la respuesta del servidor...
            </h3>
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
