import { AsyncStorage } from 'react-native'
import shortid from 'shortid'
import db from './db'

const DECKS = 'decks'
const FLASHCARDS = 'flashcards'

export function getDecks() {
  return AsyncStorage.getAllKeys()
    .then(results => results)
  
  // clear for testing
  // return AsyncStorage.clear()
}

export function getDeck(id) {
  console.log('API', id)
  return AsyncStorage.getItem(id)
    .then(result => JSON.parse(result))
}

export function addDeck(name) {
  const deckObj = {
    cards: [],
    created_at: Date.now(),
    name,
  }
  return AsyncStorage.setItem(shortid.generate(), JSON.stringify(deckObj))
    .then(result => result)
}


// export function saveDeckTitle(title) {
//   return AsyncStorage.setItem(DECKS)
//     .then((results) => console.log(results))
// }

// export function addCardToDeck({ title, card}) {
//   return AsyncStorage.setItem(DECKS)
//     .then((results) => console.log(results))
// }