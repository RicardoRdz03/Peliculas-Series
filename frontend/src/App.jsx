import { useEffect } from "react";
import InfoPeli from "./pages/InfoPeli";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Layout({ titulo, children }) {
  useEffect(() => {
    document.title = titulo;
  }, [titulo]);
  return <div>{children}</div>;
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/pelicula/:titulo" element={<InfoPeli />} />
          <Route
            path="/peliculas"
            element={
              <Layout titulo="Peliculas">
                <Peliculas />
              </Layout>
            }
          />
          <Route
            path="/series"
            element={
              <Layout titulo="Series">
                <Series />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
