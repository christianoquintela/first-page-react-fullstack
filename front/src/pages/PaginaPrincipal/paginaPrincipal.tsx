//Components
import Header from '../Header/header';
import Main from '../Main/main';
import Sobre from '../sobre/sobre';
import Contatos from '../contatos/contatos';
import Footer from '../Footer/footer';

//Function principal
export default function PaginaPrincipal() {
  return (
    <div>
      <Header />
      <Main />
      <Sobre />
      <Contatos />
      <Footer />
    </div>
  );
}
