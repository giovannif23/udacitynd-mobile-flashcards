import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Deck from './components/Deck'
import DeckAdd from './components/DeckAdd'
import CardAdd from './components/CardAdd'
import Quiz from './components/Quiz'
import { primary, white, black, grey } from './utils/colors'
import { Feather } from '@expo/vector-icons'
import { Constants } from 'expo'

function StatusBarWrap ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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

const MainNavigator = StackNavigator({
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarWrap />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  text: {
    color: grey,
    fontSize: 40
  }
});