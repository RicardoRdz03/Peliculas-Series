import { useState } from "react";

export function useFiltrar(dato) {
  const [isLoading, setIsLoading] = useState(true);
  const [soloPeliculas, setSoloPeliculas] = useState([]);

  const extraerPeliculas = async () => {
    try {
      const response = await fetch("http://localhost:3001/peliculas");
      const info = await response.json();
      const pelis = info.filter((p) => p.tipo === dato);
      setSoloPeliculas(pelis);
      setIsLoading(false);
    } catch (error) {
      console.log("Error al extraer las Peliculas", error);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    soloPeliculas,
    setSoloPeliculas,
    extraerPeliculas,
  };
}
