import React from "react";
import './style.css'
import login from '../../assets/login.png';

function Login() {
  return (
    <div className="container">
      <form action="http://localhost:8080/login" method="POST">
        <fieldset className="container-field">
          <legend>Bora logar e ter acesso a todo o conteúdo!!!</legend>
            <img src={login} alt="imagem simbolo de login" className="img-login" />
          <label htmlFor="email">Email ou nome de usuário estilizado</label>
          <input
            type="text"
            name="email-user"
            id="email"
            placeholder="Digite o nome de usuário ou email cadastrado"
          />
          <label htmlFor="pss">Entre com a senha cadastrada</label>
          <input type="password" name="pass" id="pass" />

          <button type="submit">Logar</button>

        </fieldset>
      </form>
    </div>
  );
}

export default Login;
