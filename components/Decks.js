import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import { AppLoading } from 'expo'
import { Feather } from '@expo/vector-icons'
import DeckCard from './DeckCard'
import { getDecks } from '../actions/'
import * as color from '../utils/colors'

class DeckView extends Component {
  state = {
    loaded: false,
  }

  componentDidMount () {
    const { dispatch } = this.props  
    dispatch(getDecks())
  }

  render() {
    const { decks, navigation } = this.props

    if (!Object.keys(decks).length) {
      return (
        <EmptyContainer>
          <Feather name='inbox' size={120} style={{ marginBottom: 20 }} color={color.lightGrey} />
          <Title>You have no decks.</Title>
          <AddButton onPress={() => this.props.navigation.navigate('NewDeck')}>
            <AddButtonText>ADD DECK</AddButtonText>
          </AddButton>
        </EmptyContainer>
      )
    }
    else {
      return (
        <Container>
          <ScrollView>
            {Object.keys(decks).map(
              (key) => <DeckCard key={key} deck={decks[key]} onPress={() => navigation.navigate('Deck', decks[key])} />
            )}
          </ScrollView>
        </Container>
      )
    }
  }
};

const mapStateToProps = (decks) => ({decks})

export default connect(mapStateToProps)(DeckView)


// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;

const EmptyContainer = styled.View`
  align-items: center;
  background-color: ${color.white};
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  color: ${color.grey};
  font-size: 28px;
`

const AddButton = styled.TouchableOpacity`
  align-items: center;
  background: ${color.primary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0 0;
  padding: 15px;
`;

const AddButtonText = styled.Text`
  align-items: center;
  color: ${color.white};
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 2px;
`;

