//Array de objetos com informações
import { infos_cards } from '../../infos/infos_cards';
//Components
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Card from '../../components/card/card';
import Sobre from '../sobre/sobre';
import Contatos from '../contatos/contatos';
//Imgs
import logo_html5 from '../../assets/logo_HTML5.png';
import logo_css from '../../assets/logo_css.png';
import logo_js from '../../assets/logo_js.png';
import logo_react from '../../assets/logo_react.png';
import logo_node from '../../assets/logo_node.png';
import logo_ts from '../../assets/logo_ts.png';
import logo_mysql from '../../assets/logo_mysql.png';
//Css
import classes from './paginaPrincipal.module.css';

//Axios, na pasta service com nome api
import api from '../../service';

//Function principal
function PaginaPrincipal() {
  //Insert / post
  const post = async () => {
    await api
      .post('/', {
        username: 'Jonas',
        email: 'bla@vla.cla',
        senha: 3334567,
        cpf: 99124444,
        telefone: 11117766,
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

  //Buscar / Get

  const listStack0 = infos_cards[0].stacks.map((stacks) => <li>{stacks}</li>);
  const listStack1 = infos_cards[1].stacks.map((stacks) => <li>{stacks}</li>);

  return (
    <body>
      <Header />
      <button onClick={post}>Insert</button>
      <button onClick={deleta}>Delete</button>
      <main className={classes.container_main}>
        <h1>Tecnologias que estou aprendendo, apreendendo e me especializando.</h1>
        <section className={classes.carrossel}>
          <Card
            titulo='HTML'
            imgs={logo_html5}
            descricao='Linguagem de marcação'
            link='https://dev.w3.org/html5/spec-LC/'
          />
          <Card
            titulo='CSS'
            imgs={logo_css}
            descricao='Cascading Style Sheets (CSS)'
            link='https://www.w3.org/Style/CSS/'
          />
          <Card
            titulo='JavaScript'
            imgs={logo_js}
            descricao='Linguagem de marcação'
            link='https://dev.w3.org/html5/spec-LC/'
          />
          <Card
            titulo='React Js'
            imgs={logo_react}
            descricao='React is a free and open-source front-end JavaScript library'
            link='https://legacy.reactjs.org/'
          />
          <Card
            titulo='Node Js'
            imgs={logo_node}
            descricao='Node.js is a cross-platform, open-source JavaScript runtime environment'
            link='https://nodejs.org/en'
          />

          <Card
            titulo='TypeScript'
            imgs={logo_ts}
            descricao='TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale'
            link='https://www.typescriptlang.org/'
          />
          <Card
            titulo='Mysql'
            imgs={logo_mysql}
            descricao='MySQL is an open-source relational database management system.'
            link='https://www.mysql.com/'
          />
        </section>

        <section>
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
<h1>Projetos que desenvolvi academicamente.</h1>
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
