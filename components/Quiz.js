import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { getDeck } from '../actions/'
import styled from 'styled-components/native';
import * as color from '../utils/colors'

class Quiz extends Component {
  state = {
    step: 0,
    score: 0,
  }
  componentDidMount() {
  }
  thumbsUp = () => {
    this.setState({
      step: this.state.step + 1,
      score: this.state.score + 1,
    })
  }
  thumbsDown = () => {
    this.setState({
      step: this.state.step + 1,
      score: this.state.score,
    })
  }
  reset = () => {
    this.setState({
      step: 0,
      score: 0,
    })
  }
  render() {
    const { score, step } = this.state
    const { title, questions } = this.props

    if (step >= questions.length) {
      return (
        <Confirmation>
          {(score/questions.length > .6) && <Title>Awesome Job!</Title>}
          {(score/questions.length < .4) && <Title>Keep Studying</Title>}
          <SubTitle>You scored {(score / questions.length * 100)}%</SubTitle>
        </Confirmation>
      )
    } 
   
    return (
      <Container>
        <CardPosition>{step + 1} OF {questions.length}</CardPosition>
        <CardQuestion>
          <Title>{questions[step].question}</Title>
          <ShowAnswer>
            <ShowAnswerText>ANSWER</ShowAnswerText>
          </ShowAnswer>

          <Selection>
            
            <FalseButton onPress={() => this.thumbsDown()}>
              <FalseButtonText>
                <Feather name='thumbs-down' size={20} />
              </FalseButtonText>
            </FalseButton>

            <TrueButton onPress={() => this.thumbsUp()}>
              <TrueButtonText>
                <Feather name='thumbs-up' size={20} />
              </TrueButtonText>
            </TrueButton>

          </Selection>

        </CardQuestion>
      </Container>
    )

  }
};    

function mapStateToProps(state, {navigation}) {
  const { 
    title, 
    questions 
  } = navigation.state.params;
  return {
    title, 
    questions 
  }
}

export default connect(mapStateToProps)(Quiz)


// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
  padding: 20px;
`;

const Confirmation = styled.View`
  align-items: center;
  background-color: ${color.white};
  flex: 1;
  justify-content: center;
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

const SubTitle = styled.Text`
  color: ${color.grey};
  font-size: 18px;
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

