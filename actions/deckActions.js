import shortid from 'shortid'
import {
  ADD_DECK,
  GET_DECKS,
  ADD_CARD_TO_DECK,
} from './index';

export function addDeck (deck) {
  const newObj = {
    created_at: Date.now(),
    id: shortid.generate(),
    title: deck
  }
  return {
    type: ADD_DECK,
    deck: newObj,
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