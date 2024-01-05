import classes from './card.module.css';

type CardProps = {
  titulo?: string;
  imgs?: string;
  descricao?: string;
  stack?: string;
  link?: string;
};

const Card = ({ titulo, imgs, stack, descricao, link }: CardProps) => {
  return (
    <section className={classes.card}>
      <h1>{titulo}</h1>
      <div className={classes.container_img}>
        <img src={imgs} alt={titulo} />
      </div>
      <p>{descricao}</p>
      <ul>{stack}</ul>
      <p>{link}</p>
    </section>
  );
};

export default Card;
