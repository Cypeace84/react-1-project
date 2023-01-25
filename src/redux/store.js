import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import Column from '../components/Column/Column';

const reducer = (state, action) => {
  // if (action.type === 'ADD_COLUMN')
  //   return {
  //     ...state,
  //     columns: [...state.columns, { ...action.newColumn, id: shortid() }],
  //   };
  // return state;
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    default:
      return state;

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload }],
        // cards: [...state.cards, { ...action.payload }],
      };
  }

  // switch (action.type) {
  //   case 'ADD_CARD':
  //     return {
  //       ...state: [...state.cards, {...action.payload}]
  //     };
  //     default state;
  // }
};

// const initialState = {
//   columns: [],
// };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
