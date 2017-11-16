import shortid from 'shortid'
import {
  ADD_DECK,
  GET_DECKS,
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