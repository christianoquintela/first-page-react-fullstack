//Components
import Footer from '../Footer';
import Header from '../Header';
//Css
import classes from './paginaPrincipal.module.css'

function PaginaPrincipal() {
  return (
    <body >
      <Header />
      <main className={classes.container_main}>

        <div className={` ${classes.container_model} ${classes.container_shadow} `}>
          <div>
            <h2>1 conteúdo</h2>
            <p>
              Lorem ipsum.
            </p>
          </div>


          <div>
            <h2>2 conteúdo</h2>
            <p>
              Lorem ipsum.
            </p>
          </div>
          <div>
            <h2>3 conteúdo</h2>
            <p>
              Lorem ipsum.
            </p>
          </div>
          <div>
            <h2>4 conteúdo</h2>
            <p>
              Lorem ipsum.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}

export default PaginaPrincipal;
