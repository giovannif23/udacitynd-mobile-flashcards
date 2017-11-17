import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'FlashCards:cards'


/**
 * @description Gets all Decks
 */
export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((reponse) => {
      return JSON.parse(reponse)
    })

  // clear for testing
  // return AsyncStorage.clear()
}

/**
 * @description Adds a new Deck
 */
export function addDeck (title) {
  const deckObj = {
    [title]: {
      title,
      questions: [],
    }
  }
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deckObj))
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
