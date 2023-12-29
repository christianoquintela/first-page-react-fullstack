//Components
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card from '../../components/card/card';

//Css
import classes from './paginaPrincipal.module.css';

//Axios, na pasta service com nome api
import api from '../../service';

//Function principal
function PaginaPrincipal() {
  const teste = async () => {
    await api
      .get('/')
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('funfou!');
      });
  };
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
          <button onClick={teste}>Teste</button>
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default PaginaPrincipal;
