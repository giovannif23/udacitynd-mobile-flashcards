import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';
import * as color from '../utils/colors'

export default class CardAdd extends Component {
  render() {
    return (
      <Container>
        <Text>Add Card</Text>

        <Text>Question Field</Text>
        <Text>Answer Field</Text>
        
        <SubmitButton>
          <SubmitButtonText>SUBMIT</SubmitButtonText>
        </SubmitButton>
      </Container>
    )
  }
};    

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;

const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  background: ${color.secondary};
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  padding: 10px 20px;
`;

const SubmitButtonText = styled.Text`
  align-items: center;
  color: ${color.white};
  font-size: 13px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 2px;
`;
