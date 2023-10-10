import React from "react";
import "./style.css";

function Cadastro() {
  return (
    <div>
      <form action="http://localhost:8080/cadastro" method="POST">
        <fieldset className="field-01">
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
          <div className="radio-whats">
            <label htmlFor="whatsapp">
              Este telefone é seu contato para whatsapp?
            </label>
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
          </div>

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
          <label htmlFor="endereco">
            Digite seu endereço modelo Google maps: rua tal, bairro x, cidade y
            / Estado.
          </label>
          <input
            type="text"
            name="endereco"
            id="endereco"
            placeholder="Digite seu endereco - implementar no futuro o buscar endereço pelo CEP."
          />
          <label htmlFor="profissao">Área de atuação profissional:</label>
          <input type="text" name="profissao" id="profissao" placeholder="Digite aqui sua área de atuação"/>
        </fieldset>
         
        <fieldset className="field-02">
          <legend>Dados de acesso</legend>
          <label htmlFor="styled-user">Nome de Usuário estilizado</label>
          <input
            type="text"
            name="styled-user"
            id="styled-user"
            placeholder="Digite aqui o nome de usuário estilizado"
          />
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
            minLength='6'
            maxLength='20'
            required
          />
        </fieldset>
        <fieldset className="field-03">
          <legend>Termos do contrato</legend>
          <input
            type="checkbox"
            name="termos"
            id="termos"
            value="aceito"
            required
          />
          <label htmlFor="">Li e aceito os termos do contrato</label>
        </fieldset> 

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
