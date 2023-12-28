//Components
import Footer from '../Footer/footer';
import Header from '../Header/header';

//Css
import classes from './login.module.css';

//Img's
import login from '../../assets/login.png';

//libs
import { Link } from 'react-router-dom';

// >>>>>>>>>> Function main <<<<<
function Login() {
  return (
    <section>
      <Header />

      <div className={classes.container_login}>
        
        <div className={classes.container_field}>
          <form action='http://localhost:8080/login' method='POST'>
            <p>Bora logar e ter acesso a todo o conteúdo!!!</p>
            <img
              src={login}
              alt='imagem simbolo de login'
              className={classes.img_login}
            />
            <label htmlFor='email'>Email ou nome de usuário estilizado</label>
            <input
              type='text'
              name='email-user'
              id='email'
              placeholder='Digite o nome de usuário ou email cadastrado'
            />
            <label htmlFor='pss'>Entre com a senha cadastrada</label>
            <input type='password' name='pass' id='pass' />

            <button type='submit'>Logar</button>
          </form>
        </div>
        <Link to='/'>Voltar para a página principal.</Link>
        <Link to='/Cadastro'>Não tem conta? Click aqui para criar a sua!</Link>
      </div>

      <Footer />
    </section>
  );
}

export default Login;
