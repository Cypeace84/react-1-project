import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn, addList } from '../../redux/store';

const ListForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');

    // dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    // props.action({ title: title, icon: icon });
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div>
        <span className={styles.text}>Title:</span>
        <TextInput
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <span className={styles.text}>Description:</span>
        <TextInput
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
