import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import styled from 'styled-components/native';
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions/deckActions'
import * as color from '../utils/colors'

class CardAdd extends Component {
  state = {
    answer: '',
    deck: {},
    question: '',
  }
  componentDidMount() {
    const deck = this.props.navigation.state.params;
    this.setState({
      deck
    })
  }
  saveCard() {
    const { answer, deck, question } = this.state
    this.props.dispatch(addCardToDeck(deck.id, {answer, question}))
  }

  render() {
    const { deck } = this.state

    return (
      <Container>
        <Title>Add Card</Title>

        <Input
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
          placeholder='What is your question...'
        />
        
        <Input
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder='What is the answer...'
        />
        
        <SubmitButton onPress={() => this.saveCard()}>
          <SubmitButtonText>SUBMIT</SubmitButtonText>
        </SubmitButton>
      </Container>
    )
  }
};    

// State

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(
  mapStateToProps
)(CardAdd)


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
  margin: 0 0 10px;
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

