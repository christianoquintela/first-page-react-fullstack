import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login/index";

function Rotas() {
  return (
    <section>
      <Router>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </section>
  );
}
export default Rotas;
