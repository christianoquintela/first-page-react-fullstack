//Components
import Header from '../Header/header';
import Footer from '../Footer/footer';
//Css
import classes from './paginaPrincipal.module.css';
import Card from '../../components/card/card';

function PaginaPrincipal() {
  return (
    <body>
      <Header />
      <main className={classes.container_main}>
        <div
          className={` ${classes.container_model} ${classes.container_shadow} `}
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default PaginaPrincipal;
