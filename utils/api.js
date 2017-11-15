import { AsyncStorage } from 'react-native'
import shortid from 'shortid'
import db from './db'

const DECKS = 'decks'
const FLASHCARDS = 'flashcards'

export function getDecks() {
  return AsyncStorage.getAllKeys()
    .then(results => results)
}

export function getDeck(id) {
  console.log('API', id)
  return AsyncStorage.getItem(id)
    .then(results => results)
}

export function addDeck(name) {
  return AsyncStorage.setItem(shortid.generate(), name)
    .then((results) => console.log(results))
}


// export function saveDeckTitle(title) {
//   return AsyncStorage.setItem(DECKS)
//     .then((results) => console.log(results))
// }

// export function addCardToDeck({ title, card}) {
//   return AsyncStorage.setItem(DECKS)
//     .then((results) => console.log(results))
// }