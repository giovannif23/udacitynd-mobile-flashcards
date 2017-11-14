import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import * as color from '../utils/colors'

export default class Quiz extends Component {
  render() {
    return (
      <Container>
        <CardPosition>1 OF 4</CardPosition>
        <CardQuestion>
          <Title>Does React Native work with Android?</Title>
          <ShowAnswer>
            <ShowAnswerText>ANSWER</ShowAnswerText>
          </ShowAnswer>

          <Selection>
            <FalseButton><FalseButtonText>FALSE</FalseButtonText></FalseButton>
            <TrueButton><TrueButtonText>TRUE</TrueButtonText></TrueButton>
          </Selection>
        </CardQuestion>
      </Container>
    )
  }
};    

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;

const CardPosition = styled.Text`
  color: ${color.primaryLight};
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 5px 0 25px;
`

const CardQuestion = styled.View`
  align-items: center;
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  color: ${color.grey};
  font-size: 32px;
`

const ShowAnswer = styled.TouchableOpacity`
  align-items: center;
  border: 2px solid ${color.lightGrey};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0 0;
  padding: 5px 7px;
  width: 65px;
`;

const ShowAnswerText = styled.Text`
  color: ${color.grey};
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 1px;
`

const Selection = styled.View`
  background-color: ${color.white};
  flex-direction: row;
  margin-top: 50px;
  padding: 20px;
`;

const TrueButton = styled.TouchableOpacity`
  align-items: center;
  background: ${color.secondary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 10px 20px;
`;

const TrueButtonText = styled.Text`
  align-items: center;
  color: ${color.white};
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 2px;
`;

const FalseButton = styled.TouchableOpacity`
  align-items: center;
  background: ${color.red};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 0 10px 0 0;
  padding: 10px 20px;
`;

const FalseButtonText = styled.Text`
  align-items: center;
  color: ${color.white};
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 2px;
`;

