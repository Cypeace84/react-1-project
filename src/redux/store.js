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

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getColumnsByList = ({ columns }, id) =>
  columns.filter((column) => column.listId === id);

export const getAllLists = (state) => state.lists;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const updateSearch = (payload) => ({ type: 'UPDATE_SEARCH', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
///
export const toggleCardFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

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
        cards: [
          ...state.cards,
          { ...action.payload, id: shortid(), isFavorite: false },
        ],
      };

    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { ...action.payload, id: shortid() }],
      };

    case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
      };
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
