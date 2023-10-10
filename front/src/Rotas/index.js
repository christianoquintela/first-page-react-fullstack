import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import Cadastro from "../pages/Cadastro";

function Rotas() {
  return (
    <section>
      <Router>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </section>
  );
}

export default Rotas;
