import { 
  ADD_DECK,
  GET_DECKS,
  ADD_CARD_TO_DECK,
} from '../actions'

function decks (state = {}, action) {
  let currentDeckIndex
  switch (action.type) {
    case ADD_DECK :
      return {
        ...state,
        [action.deck.title]: action.deck
      }
    
    case GET_DECKS :
      return {
        ...state,
        [action.deck.title]: action.decks
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