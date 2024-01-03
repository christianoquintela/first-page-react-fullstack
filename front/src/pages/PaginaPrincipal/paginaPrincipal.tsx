//Components
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card from '../../components/card/card';
import Sobre from '../sobre/sobre';
import Contatos from '../contatos/contatos';

//Array de objetos com informações
import { infos_cards } from '../../infos/infos_cards';

//Css
import classes from './paginaPrincipal.module.css';

//Axios, na pasta service com nome api
// import api from '../../service';

//Function principal
function PaginaPrincipal() {
  // const teste = async () => {
  //   await api
  //     .get('/')
  //     .then(function (res) {
  //       console.log(res);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       console.log('funfou!');
  //     });
  // };
  // <button onClick={teste}>Teste</button>

  const listStack0 = infos_cards[0].stacks.map((stacks) => <li>{stacks}</li>);
  const listStack1 = infos_cards[1].stacks.map((stacks) => <li>{stacks}</li>);
  return (
    <body>
      <Header />
      <main className={classes.container_main}>
        <section className={classes.carrossel}>
          <p>Colocar aqui as tecnologias que estou estudando</p>
          <p>
            Fazer o card com as infos da tec + img + link para a pagina oficial
          </p>
          <p>Fazer menção nos projetos de todos os criadores</p>
          <p>
            cada card de projetos criados, citar e buscar na api do github seus
            dados.
          </p>

          <p>
            Ao invés de usar uma variável/objeto, fazer a conexão com o banco de
            dados e buscar e preencher com dados do backend. Implementar na
            próxima vez que parar para trabalhar no projeto aqui.
          </p>
        </section>

        <section className={classes.container_model}>
          <Card
            titulo={infos_cards[0].titulo}
            imgs={infos_cards[0].imgs}
            descricao={infos_cards[0].descricao}
            stack={listStack0}
          />
          <Card
            titulo={infos_cards[1].titulo}
            imgs={infos_cards[1].imgs}
            descricao={infos_cards[1].descricao}
            stack={listStack1}
          />
          <Card
            titulo={infos_cards[1].titulo}
            imgs={infos_cards[1].imgs}
            descricao={infos_cards[1].descricao}
            stack={listStack1}
          />
          <Card
            titulo={infos_cards[1].titulo}
            imgs={infos_cards[1].imgs}
            descricao={infos_cards[1].descricao}
            stack={listStack1}
          />
          <Card
            titulo={infos_cards[1].titulo}
            imgs={infos_cards[1].imgs}
            descricao={infos_cards[1].descricao}
            stack={listStack1}
          />
          <Card
            titulo={infos_cards[1].titulo}
            imgs={infos_cards[1].imgs}
            descricao={infos_cards[1].descricao}
            stack={listStack1}
          />
        </section>
      </main>

      <Sobre />
      <Contatos />
      <Footer />
    </body>
  );
}

export default PaginaPrincipal;
