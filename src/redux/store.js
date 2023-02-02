import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchRedux';

////////////////////////selectors/////////////////////////////////////////////////

// export const getAllColumns = (state) => state.columns;

// export const getFilteredCards = ({ cards, search }, columnId) =>
//   cards.filter(
//     (card) => card.columnId === columnId && strContains(card.title, search)
//   );

// export const getFavoriteCards = ({ cards }) =>
//   cards.filter((card) => card.isFavorite);

// export const getListById = ({ lists }, listId) =>
//   lists.find((list) => list.id === listId);

// export const getColumnsByList = ({ columns }, id) =>
//   columns.filter((column) => column.listId === id);

// export const getAllLists = (state) => state.lists;

//////////////////////// action creators //////////////////////////////////////

// export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
// export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
// export const updateSearch = (payload) => ({ type: 'UPDATE_SEARCH', payload });
// export const addList = (payload) => ({ type: 'ADD_LIST', payload });
// export const toggleCardFavorite = (payload) => ({
//   type: 'TOGGLE_CARD_FAVORITE',
//   payload,
// });

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  search: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

////////////Wydzielone do osobnych plików w /redux ////////////////////

// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     search: searchStringReducer(state.search, action),
//   };

//   return newState;
// };
/////////////przeniesione do oddzielnych plikow w /redux////////////////
// const listsReducer = (statePart = [], action) => {
//   switch (action.type) {
//     case 'ADD_LIST':
//       return [...statePart, { ...action.payload, id: shortid() }];
//     default:
//       return statePart;
//   }
// };

// const columnsReducer = (statePart = [], action) => {
//   switch (action.type) {
//     case 'ADD_COLUMN':
//       return [...statePart, { ...action.payload, id: shortid() }];
//     default:
//       return statePart;
//   }
// };

// const cardsReducer = (statePart = [], action) => {
//   switch (action.type) {
//     case 'ADD_CARD':
//       return [
//         ...statePart,
//         { ...action.payload, id: shortid(), isFavorite: false },
//       ];
//     case 'TOGGLE_CARD_FAVORITE':
//       return statePart.map((card) =>
//         card.id === action.payload
//           ? { ...card, isFavorite: !card.isFavorite }
//           : card
//       );
//     default:
//       return statePart;
//   }
// };

// const searchStringReducer = (statePart = '', action) => {
//   switch (action.type) {
//     case 'UPDATE_SEARCH':
//       return action.payload;
//     default:
//       return statePart;
//   }
// };
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
// const reducer = (state, action) => {
// // if (action.type === 'ADD_COLUMN')
// //   return {
// //     ...state,
// //     columns: [...state.columns, { ...action.newColumn, id: shortid() }],
// //   };
// // return state;
// switch (action.type) {
// case 'ADD_COLUMN':
//   return {
//     ...state,
//     columns: [...state.columns, { ...action.payload, id: shortid() }],
//   };

// case 'ADD_CARD':
//   return {
//     ...state,
//     cards: [
//       ...state.cards,
//       { ...action.payload, id: shortid(), isFavorite: false },
//     ],
//   };

// case 'UPDATE_SEARCH':
//   return {
//     ...state,
//     search: action.payload,
//   };

// case 'ADD_LIST':
//   return {
//     ...state,
//     lists: [...state.lists, { ...action.payload, id: shortid() }],
//   };

//   case 'TOGGLE_CARD_FAVORITE':
//     return {
//       ...state,
//       cards: state.cards.map((card) =>
//         card.id === action.payload
//           ? { ...card, isFavorite: !card.isFavorite }
//           : card
//       ),
//     };
//   default:
//     return state;
// }
// };
