import React, { useState } from "react";

export function useBuscarPeliSerie() {
  const [inputt, setInputt] = useState("");
  const [buscarPeli, setBuscarPeli] = useState(false);
  const [peliculaEncontrada, setPeliculaEncontrada] = useState([]);

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
  return {
    inputt,
    setInputt,
    buscarPeli,
    setBuscarPeli,
    peliculaEncontrada,
    setPeliculaEncontrada,
    buscarPelicula,
  };
}
