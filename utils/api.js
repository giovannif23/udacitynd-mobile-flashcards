import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'FlashCards:cards'


/**
 * @description Gets all Decks
 */
export function getDecks () {
  return AsyncStorage.getItem (DECK_STORAGE_KEY)
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
  return AsyncStorage.mergeItem (DECK_STORAGE_KEY, JSON.stringify(deckObj))
}

/**
 * @description Adds card to a Deck
 */
export function addCardToDeck (title, { answer, question}) {
  const questionObj = {
    answer,
    question,
  }

  AsyncStorage.getItem (DECK_STORAGE_KEY)
    .then((response) => {
      const resp = JSON.parse(result)
      const newArr = [
        ...resp[title].questions, 
        questionObj
      ]
      return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [title]: {
          questions: newArr
        }
      }))
    })

  // getDeck(id)
  //   .then((result) => {
  //     return AsyncStorage.mergeItem(id, JSON.stringify(result))
  //       .then(result => result)
  //   })
}

