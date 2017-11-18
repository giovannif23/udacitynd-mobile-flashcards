import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native';
import * as color from '../utils/colors'
import { connect } from 'react-redux'
import { addDeck } from '../actions/'

class DeckAdd extends Component {
  state = {
    name: '',
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'ADD DECK',
  })
  saveDeck () {
    const { name } = this.state
    const { dispatch } = this.props
    dispatch(addDeck(name))
    this.setState({ name: '' });
    this.props.navigation.navigate('Decks')
  }

  render() {
    return (
      <Container>
        <Title>What is the name of your new deck?</Title>

        <Input
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
          placeholder='Deck name...'
        />

        <SubmitButton onPress={() => this.saveDeck()}>
          <SubmitButtonText>SUBMIT</SubmitButtonText>
        </SubmitButton>
      </Container>
    )
  }
}

export default connect()(DeckAdd)

// Styles
const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  color: ${color.grey};
  font-size: 28px;
  margin-bottom: 20px;
`

const Input = styled.TextInput`
  align-items: center;
  border: 2px solid ${color.primary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  background: ${color.primary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 0;
  padding: 15px;
`;

const SubmitButtonText = styled.Text`
  align-items: center;
  color: ${color.white};
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 2px;
`;
