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

export function addCardToDeck(title, question) {
  return (dispatch) => {
    api.addCardToDeck(title, question)
      .then(() => {
        dispatch({
          type: ADD_CARD_TO_DECK,
          deck: title,
          question,
        })
      })
  }
}