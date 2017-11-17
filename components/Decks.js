import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import { AppLoading } from 'expo'
import DeckCard from './DeckCard'
import * as api from '../actions/deckActions'
import * as color from '../utils/colors'

class DeckView extends Component {
  state = {
    loaded: false,
  }

  componentDidMount () {
    this.props.dispatch(api.getDecks())
  }

  render() {
    let { decks } = this.props
    console.log('render decks', decks)

    return (
      <Container>
        <ScrollView>
          {/* {Object.keys(decks).map(
            (key) => <DeckCard key={key} deck={decks[key]} onPress={() => this.props.navigation.navigate('Deck', decks[key])} />
          )} */}
        </ScrollView>
      </Container>
    )
  }
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    state
  }
}

export default connect(
  mapStateToProps
)(DeckView)


// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;
