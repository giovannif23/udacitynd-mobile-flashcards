import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native';
import { getDeck } from '../utils/api'
import * as color from '../utils/colors'

export default class DeckCard extends Component {
  state = {
    title: '',
    count: '',
  }
  componentDidMount() {
    const { deckId } = this.props
    getDeck(deckId)
      .then((deck) => {
        this.setState({
          deck,
        })
      })
  }

  render() {
    return(
      <Deck
        {...this.props}
        onPress={() => this.props.navigation.navigate('Deck')}>
        <DeckTitle>{this.state.deck}</DeckTitle>
        <DeckCardCount>20</DeckCardCount>
      </Deck>
    )
  }
}

// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;

const Deck = styled.TouchableOpacity`
  align-items: center;
  border: 1px solid ${color.lightGrey};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 20px;
`;

const DeckTitle = styled.Text`
  color: ${color.grey};
  fontSize: 18px;
`

const DeckCardCount = styled.Text`
  color: ${color.grey};
  fontSize: 18px;
  font-weight: bold;
`