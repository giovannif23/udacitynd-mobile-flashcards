import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import * as color from '../utils/colors'

export default class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'DECK',
  })
  state = {
    deck: {
      cards: [],
    },
  }
  componentDidMount() {
    const deck = this.props.navigation.state.params;
    this.setState({ deck })
  }

  render() {
    const { deck } = this.state

    return (
      <Container>
        <Title>{deck.title}</Title>
        <CardCount>{deck.questions ? deck.questions.length : 0} CARDS</CardCount>
        <AddButton onPress={() => this.props.navigation.navigate('AddCard', deck)}>
          <AddButtonText>ADD CARD</AddButtonText>
        </AddButton>
        <QuizButton onPress={() => this.props.navigation.navigate('Quiz', deck)}>
          <QuizButtonText>START QUIZ</QuizButtonText>
        </QuizButton>
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

const Title = styled.Text`
  color: ${color.grey};
  font-size: 28px;
`

const CardCount = styled.Text`
  color: ${color.primaryLight};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 5px 0 25px;
  opacity: .8;
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

const QuizButton = styled.TouchableOpacity`
  align-items: center;
  background: ${color.secondary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0;
  padding: 15px;
`;

const QuizButtonText = styled.Text`
  align-items: center;
  color: ${color.white};
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 2px;
`;