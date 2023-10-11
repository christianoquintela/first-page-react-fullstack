import React from "react";
import "./style.css"
import flag_brasil from "../../assets/brazil_flag_48px.png"

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
     <button>Login</button>
      <button>Criar Conta</button>
     </div>

      <img src={flag_brasil} alt="bandeira do brasil" className="logo_png" />


    </div>
  );
}

export default Header;
