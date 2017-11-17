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
    api.addDeck(deck).then((result) => {
      console.log('response', result)
      dispatch({
        type: ADD_DECK,
        deck: newObj
      })
    })
  }


  // redux
  // return {
  //   type: ADD_DECK,
  //   deck: newObj,
  // }
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