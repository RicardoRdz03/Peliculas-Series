import InfoPeli from "./components/InfoPeli";
import PaginaPrincipal from "./components/PaginaPrincipal";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/pelicula/:titulo" element={<InfoPeli />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
