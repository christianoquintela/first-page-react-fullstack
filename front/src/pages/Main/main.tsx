import React from 'react';

//Css
import classes from './main.module.css';
//Components
import Card from '../../components/card/card';
//Imgs
import logo_html5 from '../../assets/logo_HTML5.png';
import logo_css from '../../assets/logo_css.png';
import logo_js from '../../assets/logo_js.png';
import logo_react from '../../assets/logo_react.png';
import logo_node from '../../assets/logo_node.png';
import logo_ts from '../../assets/logo_ts.png';
import logo_mysql from '../../assets/logo_mysql.png';

const Main = () => {
  return (
    <main className={classes.container_main}>
      <section className={classes.tasks}>
        <h1>Aqui em enfase:</h1>
        <h2>Para hoje dia 4/jan/24</h2>
        <p>
          **************************************************************************************************
        </p>

        <p>implementar pagina de cadastro de cards</p>

        <p>
          <s>Fazer o carrossel dos cards abaixo</s> Deu muito ruim, erro de
          hooks
        </p>

        <p>
          Todas as informações dos cards do projeto tem que ser inseridas e
          buscadas no DB(data base).
        </p>

        <p>
          Criar a interface(uma pagina só para alimentar o DB), com C.R.U.D. das
          infos usadas no portfólio. (((Doing)))
        </p>

        <p>
          **************************************************************************************************
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
        <p>
          Estilização dos cards individualmente, buscando os dados no DB, cada
          card terá suas próprias cores de borda, tipo neon, fazendo jús ao seu
          brasão.
        </p>
        <p>
          Aprender como fazer para que ao clicar no card, ele suba em z-index
          para frente, tomando toda a tela, e colocar alguns exemplos em formado
          de imagens, talvez em carrossel, mostrando os principais comandos/tags
          e seus usos.
        </p>
        <p>
          <s>Colocar aqui as tecnologias que estou estudando</s>{' '}
        </p>
        <p>
          <s>
            Fazer o card com as infos da tec + img + link para a pagina oficial
          </s>
        </p>
      </section>
      <h1>
        Tecnologias que estou aprendendo, apreendendo e me especializando.
      </h1>

      <section className={classes.list_card}>
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

      <h1>Projetos que desenvolvi academicamente.</h1>
      <section className={classes.container_model}>
        <Card
          titulo='Github Finder'
          imgs='#'
          descricao='Projeto realizado em React + Vite, Adicionar o projeto github finder / usar o próprio projeto dentro deste portfólio Usar a api do github para preencher o card, e adicionar um link para o repositório. Mesclar tudo!'
          stack='HTML, Css, React + Vite, TypeScript, Mysql, Node'
        />
      </section>
    </main>
  );
};

export default Main;
