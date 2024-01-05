import { useState } from 'react';
import classes from './cadastro.module.css';

//Axios, na pasta service com nome api
import api from '../../service';

function Cadastro() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [tel, setTel] = useState('');
  const [datas, setData] = useState('');
  const [enderecos, setEndereco] = useState('');
  const [nicknames, setNickname] = useState('');
console.log(id);
  // console.log(id, nome, email, password, cpf, tel, datas, enderecos, nicknames);
  //Insert / post
  const post = async () => {
    await api
      .post('/', {
        username: nome,
        email: email,
        senha: password,
        cpf: cpf,
        telefone: tel,
        data: datas,
        endereco: enderecos,
        nickname: nicknames,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  //Delete
  const deleta = async () => {
    await api
      .delete('/8')
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  //Update / put / path
  const put = async () => {
    await api
      .put(`/${id}`, {
        username: nome,
        email: email,
        senha: password,
        cpf: cpf,
        telefone: tel,
        data: datas,
        endereco: enderecos,
        nickname: nicknames,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  //Buscar / Get

  return (
    <div>
      <div className={classes.container}>
        <input
          type='number'
          placeholder='ID:'
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type='text'
          placeholder='Nome'
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password/Senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='CPF'
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type='tel'
          placeholder='Telefone'
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          type='date'
          placeholder='Data Nascimento'
          onChange={(e) => setData(e.target.value)}
        />
        <input
          type='text'
          placeholder='Endereço'
          onChange={(e) => setEndereco(e.target.value)}
        />
        <input
          type='text'
          placeholder='Nome de usuário'
          onChange={(e) => setNickname(e.target.value)}
        />

        <button onClick={post}>Insert</button>
        <button onClick={put}>Update</button>
        <button onClick={deleta}>Delete</button>
      </div>
    </div>
  );
}

export default Cadastro;
