import { AsyncStorage } from 'react-native'

const DECKS = 'decks'


/**
 * @description Adds a new Deck
 */
export function addDeck (title) {
  const deckObj = {
    [title]: {
      title,
      questions: []
    }
  }
  return AsyncStorage.setItem(title, JSON.stringify(deckObj));
  })
}


export function getDecks() {
  return AsyncStorage.getAllKeys()
    .then(results => results)
  
  // clear for testing
  // return AsyncStorage.clear()
}

export function getDeck(id) {
  return AsyncStorage.getItem(id)
    .then(result => JSON.parse(result))
}

// export function addDeck(name) {
//   const deckObj = {
//     cards: [],
//     created_at: Date.now(),
//     name,
//     updated_at: Date.now(),
//   }
//   return AsyncStorage.setItem(shortid.generate(), JSON.stringify(deckObj))
//     .then(result => result)
// }

export function addCardToDeck(id, { answer, question}) {
  const questionObj = {
    answer,
    question,
  }

  getDeck(id)
    .then((result) => {
      result.updated_at = Date.now()
      result.cards.push(questionObj);
      return AsyncStorage.mergeItem(id, JSON.stringify(result))
        .then(result => result)
    })
}
