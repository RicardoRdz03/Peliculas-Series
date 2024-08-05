import InfoPeli from "./pages/InfoPeli";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/pelicula/:titulo" element={<InfoPeli />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
