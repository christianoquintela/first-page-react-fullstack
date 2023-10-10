import React from "react";

function Cadastro() {
  return (
    <div>
      <form action="http://localhost:8080" method="post">
        <fildeset>
          <legend>Dados cadastrais</legend>
          <label htmlFor="">Nome completo</label>
          <input type="text" name="nome" placeholder="Nome completo" required />
          <label htmlFor="">CPF</label>
          <input
            type="number"
            name="CPF"
            placeholder="CPF: xxx.xxx.xxx-xx"
            required
          />

          <label htmlFor="telefone">Telefone de contato</label>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            placeholder="Telefone (xx)xxxxx-xxxx"
          />
          <input type="radio" name="resposta" id="whatsapp-sim" value="sim" />
          <label htmlFor="whatsapp-sim">Sim</label>
          <input
            type="radio"
            name="resposta"
            id="whatsapp-nao"
            value="nao"
            checked
          />
          <label htmlFor="whatsapp-nao">Não</label>

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@mail.com"
            required
          />
          <label htmlFor="">Confirmação do e-mail</label>
          <input
            type="email"
            name="Conf_email"
            placeholder="email@mail.com"
            required
          />
          <label htmlFor="">Data de nascimento</label>
          <input
            type="date"
            name="data-nas"
            min="1940-01-01"
            max="2100-01-01"
          />
          <label htmlFor="">Idade</label>
          <input type="number" name="age" min="14" />
          <input type="text" />
          <input type="text" />
        </fildeset>

        <fildeset>
          <legend>Dados de acesso</legend>
          <label htmlFor="">Crie uma senha de acesso</label>
          <input
            type="password"
            name="pass"
            placeholder="Password"
            minLength={6}
            maxLength={20}
            required
          />
          <label htmlFor="">Confirme a senha de acesso</label>
          <input
            type="password"
            name="conf_pass"
            placeholder="Confirme o Password"
            minLength={6}
            maxLength={20}
            required
          />
          <input type="checkbox" name="termos" value="aceito" required />
        </fildeset>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
