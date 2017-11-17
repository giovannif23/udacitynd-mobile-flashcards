import * as api from '../utils/api'
import {
  ADD_DECK,
  GET_DECKS,
  ADD_CARD_TO_DECK,
} from './index';

export function addDeck (deck) {
  const newObj = {
    title: deck,
    quetsions: []
  }

  return (dispatch) => {
    api.addDeck (deck)
      .then( () => {
        dispatch({
          type: ADD_DECK,
          deck: newObj
        })
      })
  }
}

export function getDecks () {
  return (dispatch) => {
    api.getDecks()
      .then((response) => {
        console.log('response', response)
        dispatch({
          type: GET_DECKS,
          decks: response
        })
      })
  }
}

export function addCardToDeck (id, { answer, question }) {
  return {
    type: ADD_CARD_TO_DECK,
    id, 
    payload: {
      question: {
        answer,
        question,
      },
    },
  }
}