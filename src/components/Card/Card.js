import { useState } from 'react';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  // const isFavoriteValue = useSelector((state) => state.card.isFavorite);
  // console.log('isFaValue', isFavoriteValue);

  const dispatch = useDispatch();
  dispatch(toggleCardFavorite(props.id));

  const toggle = () => {
    setIsFavorite((current) => !current);
  };

  console.log('isFavorite', isFavorite);
  const star = 'fa fa-star-o';
  return (
    <li className={styles.card}>
      {props.title}
      <button className={styles.button} onClick={toggle}>
        <span className={clsx(star, isFavorite && styles.isActive)}></span>
      </button>
    </li>
  );
};

export default Card;
