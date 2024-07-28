import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navb from "./Navb";

function PaginaPrincipal() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para manejar la carga

  const datosPeliculas = async () => {
    try {
      const response = await fetch("http://localhost:3001/peliculas");
      const info = await response.json();
      setPeliculas(info);
      setIsLoading(false); // Actualiza el estado después de cargar los datos
    } catch (err) {
      console.log("Error al extraer los datos");
      setIsLoading(false); // Asegúrate de actualizar el estado también en caso de error
    }
  };

  useEffect(() => {
    datosPeliculas();
  }, []);

  return (
    <>
      <Navb />
      <main>
        <section>
          {isLoading ? ( // Muestra "cargando..." mientras isLoading es true
            <h3 style={{ textAlign: "center" }}>
              Cargando peliculas, por favor espere la respuesta del servidor...
            </h3>
          ) : (
            <div className="grid-peliculas">
              {peliculas.map((peli) => {
                return (
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
                );
              })}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default PaginaPrincipal;
