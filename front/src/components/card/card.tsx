import classes from './card.module.css';

type CardProps = {
  titulo?: string;
  imgs?: string;
  descricao?: string;
  stack?: any[] | null;
};

const Card = ({ titulo, imgs, stack, descricao }: CardProps) => {
  return (
    <section className={classes.card}>
      <h1>{titulo}</h1>
      <div className={classes.container_img}>
      <img src={imgs} alt={titulo} />
      </div>
      <p>{descricao}</p>
      <ul>{stack}</ul>
    </section>
  );
};

export default Card;
