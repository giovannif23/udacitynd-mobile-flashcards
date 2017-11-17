// import * as api from '../utils/api'
// import {
//   ADD_DECK,
//   GET_DECKS,
//   ADD_CARD_TO_DECK,
// } from './index';

// export function getDecks () {
//   return (dispatch) => {
//     api.getDecks()
//       .then((response) => {
//         dispatch({
//           type: GET_DECKS,
//           decks: response
//         })
//       })
//     }
// }

// export function addDeck (deck) {
//   return (dispatch) => {
//     api.addDeck (deck)
//       .then(() => {
//         dispatch({
//           type: ADD_DECK,
//           deck
//         })
//       })
//     }
// }

// export function addCardToDeck (id, { answer, question }) {
//   return {
//     type: ADD_CARD_TO_DECK,
//     id, 
//     payload: {
//       question: {
//         answer,
//         question,
//       },
//     },
//   }
// }