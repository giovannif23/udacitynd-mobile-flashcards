import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import { AppLoading } from 'expo'
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
    let { decks, navigation } = this.props

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
};

const mapStateToProps = (decks) => ({decks})

export default connect(mapStateToProps)(DeckView)


// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;
