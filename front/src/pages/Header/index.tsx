//libs
import { Link } from 'react-router-dom';
//Css
import classes from './header.module.css';
//img
import flag_brasil from '../../assets/brazil_flag_48px.png';
//Components
import Logo70x7 from '../../components/logo70x7/logo70x7';

function Header() {
  return (
    <header className={classes.topo}>
      <Logo70x7 />
      <ul className={classes.container_ul_topo}>
        <li>Carreiras</li>
        <li>Bootcamps</li>
        <li>Projetos</li>
        <li>Comunidade</li>
        <li>Planos</li>
        <li>Para Empresas</li>
      </ul>
      <div className={classes.container_button}>
        <Link to='/login'>
          <button className={classes.style_button}>Login</button>
        </Link>
        <Link to='/cadastro'>
          <button className={classes.style_button}>Criar Conta</button>
        </Link>
      </div>
      <img
        src={flag_brasil}
        alt='bandeira do brasil'
        className={classes.logo_png}
      />
    </header>
  );
}

export default Header;
