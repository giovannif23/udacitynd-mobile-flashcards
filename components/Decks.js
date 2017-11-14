import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import * as color from '../utils/colors'

export default class DeckView extends Component {
  render() {
    return (
      <Container>
        <Deck
          onPress={() => this.props.navigation.navigate('Deck')}>
          <DeckTitle>React Native</DeckTitle>
          <DeckCardCount>20</DeckCardCount>
        </Deck>
      </Container>
    )
  }
};

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