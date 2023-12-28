
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal/paginaPrincipal";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login/login";

function Rotas() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </section>
  );
}
export default Rotas;
