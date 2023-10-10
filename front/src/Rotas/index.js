import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal";

function Rotas() {
  return (
    <section>
      <Router>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
        </Routes>
      </Router>
    </section>
  );
}

export default Rotas;
