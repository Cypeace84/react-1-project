import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { useParams } from 'react-router';
import { Navigate } from 'react-router';

// import shortid from 'shortid';

const List = () => {
  const { listId } = useParams();
  const searchValue = useSelector((state) => state.search);

  // const columns = useSelector(getColumnsByList);
  const columns = useSelector((state) => getColumnsByList(state, listId));
  const listData = useSelector((state) => getListById(state, listId));
  // const cards = useSelector((state) => getFilteredCards(state, props.id));

  if (!listData) return <Navigate to='/' />;
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>

      <p className={styles.description}>{listData.description}</p>
      <SearchForm searchValue={searchValue} />

      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
