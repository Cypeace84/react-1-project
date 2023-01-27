import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getAllColumns = (state) => state.columns;

export const getFilteredCards = ({ cards, search }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, search)
  );

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearch = (payload) => ({ type: 'UPDATE_SEARCH', payload });

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
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };

    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
