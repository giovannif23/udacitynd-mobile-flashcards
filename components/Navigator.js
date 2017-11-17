import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './Decks'
import Deck from './Deck'
import DeckAdd from './DeckAdd'
import CardAdd from './CardAdd'
import Quiz from './Quiz'
import { Feather } from '@expo/vector-icons'
import { primary, white, black, grey } from '../utils/colors'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Feather name='layers' size={20} color={tintColor} />
    },
  },
  NewDeck: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) => <Feather name='plus-square' size={20} color={tintColor} />
    },
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        backgroundColor: primary,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
});

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
  },
  AddCard: {
    screen: CardAdd,
  },
  Quiz: {
    screen: Quiz,
  },
})