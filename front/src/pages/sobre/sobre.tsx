import classes from './sobre.module.css';

const Sobre = () => {
  return (
    <section className={classes.container_sobre}>
      <h1>
        Olá, eu sou
        <br /> Christiano Quintela
      </h1>
      <p>Desenvolvedor Web Fullstack.</p>

      <h3>Sobre mim:</h3>
      <p>
        Apaixonado com tecnologia, sempre tive aquele brilho nos olhos para o
        mundo TECH. <br />E agora não me limito aos olhos...
      </p>
    </section>
  );
};

export default Sobre;
