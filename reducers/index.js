import shortid from 'shortid'
import { 
  ADD_DECK,
  ADD_CARD_TO_DECK,
} from '../actions'

const INITIAL_STATE = {
  decks: {},
  active: {},
}

function decks (state = INITIAL_STATE, action) {
  let currentDeckIndex
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        decks: [...state.decks, action.deck]
      }
    case ADD_CARD_TO_DECK :
      for (let key in state.decks) {
        if (state.decks[key].id === action.id) {
          currentDeckIndex = key;
        }
      }

      return {
        ...state,
        decks: {
          ...state.decks,
          [currentDeckIndex]: {
            ...state.decks[currentDeckIndex],
            questions: [
              ...state.decks[currentDeckIndex].questions,
              ...action.payload
            ]
          }
        }
      }

    default :
      return state
  }
}

export default decks