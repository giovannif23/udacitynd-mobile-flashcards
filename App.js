import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Deck from './components/Deck'
import { primary, white, black, grey } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
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
  },
  Deck: {
    screen: Deck,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarWrap />
        <Tabs />
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