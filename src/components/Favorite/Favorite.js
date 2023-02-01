import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  let cards = useSelector((state) => getFavoriteCards(state));
  console.log('cards', cards[0]);

  if (cards[0] === undefined) return <PageTitle> NO CARDS</PageTitle>;
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
              id={card.id}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
