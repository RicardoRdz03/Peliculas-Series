import React, { useState } from "react";

export function useExtraerPeliSeries() {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const datosPeliculas = async () => {
    try {
      const response = await fetch(
        "https://peliculas-series.onrender.com/peliculas"
      );
      const info = await response.json();
      setPeliculas(info);
      setIsLoading(false);
    } catch (err) {
      console.log("Error al extraer los datos");
      setIsLoading(false);
    }
  };
  return { peliculas, setPeliculas, isLoading, setIsLoading, datosPeliculas };
}
