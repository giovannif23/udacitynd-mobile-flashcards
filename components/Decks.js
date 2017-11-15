import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import DeckCard from './DeckCard'
import { getDecks } from '../utils/api'
import * as color from '../utils/colors'

export default class DeckView extends Component {
  state = {
    decks: [],
    loaded: false,
  }
  componentDidMount () {
    getDecks()
      .then((decks) => {
        this.setState({
          decks,
          loaded: true
        })
      })
  }

  render() {
    return (
      <Container>
        {this.state.decks.map(
          (deck, index) => <DeckCard key={index} deckId={deck} onPress={() => this.props.navigation.navigate('Deck')} />
        )}
      </Container>
    )
  }
};


// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;
