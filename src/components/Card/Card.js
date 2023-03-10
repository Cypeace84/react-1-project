import { useState } from 'react';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  // const isFavoriteValue = useSelector((state) => state.card.isFavorite);
  // console.log('isFaValue', isFavoriteValue);

  const dispatch = useDispatch();

  const toggle = () => {
    setIsFavorite((current) => !current);
    dispatch(toggleCardFavorite(props.id));
  };

  const remove = () => {
    dispatch(removeCard(props.id));
  };

  console.log('isFavorite', isFavorite);
  const star = 'fa fa-star-o';
  const trash = 'fa fa-trash';
  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button className={styles.button} onClick={toggle}>
          <span className={clsx(star, isFavorite && styles.isActive)}></span>
        </button>
        <button className={styles.button} onClick={remove}>
          <span className={trash}></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
