import styles from './SearchForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import { useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/searchRedux';

const SearchForm = ({ searchValue }) => {
  const [text, setText] = useState(searchValue);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateSearch(text));
    // ????????????????????????????????????JAK DAć '' do state.search???????????????????????????????????????????????
    // props.action({ title: title, icon: icon });
    // dispatch({ type: 'UPDATE_SEARCH', payload: text });
    // setText('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button>
        <span
          className='
      fa fa-search'
        />
      </Button>
      {/* <button className={styles.button}>Search</button> */}
    </form>
  );
};

export default SearchForm;
