import { 
  ADD_DECK,
  GET_DECKS,
  ADD_CARD_TO_DECK,
} from '../actions'

function decks (state = {}, action) {
  let currentDeckIndex
  switch (action.type) {

    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case ADD_DECK :
      return {
        ...state,
        [action.deck]: { title: action.deck, questions: [] }
      }

    case ADD_CARD_TO_DECK :
      console.log('ADD_CARD_TO_DECK', action)
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: [
            ...state[action.deck].questions,
            action.question
          ]
        }
      }

    default :
      return state
  }
}

export default decks