import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { primary, white, black } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

function Home () {
  return (
    <View>
      <Text style={styles.text}>HOME!</Text>
    </View>
  )
}

function Contact () {
  return (
    <View>
      <Text style={styles.text}>Contact!</Text>
    </View>
  )
}

const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  Contact: {
    screen: Contact
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: white,
    fontSize: 40
  }
});