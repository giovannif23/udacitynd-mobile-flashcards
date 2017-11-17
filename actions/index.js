import * as api from '../utils/api'
export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

export function getDecks() {
  return (dispatch) => {
    api.getDecks()
      .then((response) => {
        dispatch({
          type: GET_DECKS,
          decks: response
        })
      })
  }
}

export function addDeck(deck) {
  return (dispatch) => {
    api.addDeck(deck)
      .then(() => {
        dispatch({
          type: ADD_DECK,
          deck
        })
      })
  }
}

export function addCardToDeck (id, { answer, question }) {
  return (dispatch) => {
    api.addCardToDeck(deck)
      .then(() => {
        dispatch({
          type: ADD_CARD_TO_DECK,
          deck: id,
          question
        })
      })
  }
}

// export function addCard(deckId, card) {
//   addCardToDeck(deckId, card)
//   return {
//     type: ADD_CARD,
//     deck: deckId,
//     card: card,
//   }
// }