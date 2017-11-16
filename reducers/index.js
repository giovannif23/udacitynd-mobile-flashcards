import shortid from 'shortid'
import { 
  ADD_DECK,
} from '../actions'

const INITIAL_STATE = {
  decks: {},
  active: {}
}

function decks (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        decks: [...state.decks, action.deck]
      }
    default:
      return state
  }
}

export default decks