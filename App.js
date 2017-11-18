import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import { MainNavigator } from './components/Navigator'
import TopBar from './components/TopBar'
import * as color from './utils/colors'
import styled from 'styled-components/native'
import { setLocalNotification } from './utils/helpers'
import { 
  View, 
  Text,
  StyleSheet, 
  StatusBar, 
  Platform, 
  TouchableOpacity 
} from 'react-native'

const store = createStore(
  reducer, 
  devToolsEnhancer(),
  applyMiddleware(thunk)
);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <TopBar />
          <MainNavigator />
        </Container>
      </Provider>
    );
  }
}

// Styles

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
`;