import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import flag_brasil from "../../assets/brazil_flag_48px.png";

function Header() {

  return (
    <div className="topo">
      <h1>Dev 70x7.</h1>

      <ul className="container_ul_topo">
        <li>Carreiras</li>
        <li>Bootcamps</li>
        <li>Projetos</li>
        <li>Comunidade</li>
        <li>Planos</li>
        <li>Para Empresas</li>
      </ul>

      <div className="container-button">
        <Link to="/login">
          <button className="style_button">Login</button>
        </Link>
        <Link to="/cadastro">
        <button className="style_button">Criar Conta</button>
        </Link>
      </div>

      <img src={flag_brasil} alt="bandeira do brasil" className="logo_png" />
    </div>
  );
}

export default Header;
