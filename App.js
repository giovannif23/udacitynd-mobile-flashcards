import React from 'react';
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { MainNavigator } from './components/Navigator'
import * as color from './utils/colors'
import styled from 'styled-components/native'
import { Constants } from 'expo'
import { 
  View, 
  Text,
  StyleSheet, 
  StatusBar, 
  Platform, 
  TouchableOpacity 
} from 'react-native'


function TopBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducer, devToolsEnhancer());
export default class App extends React.Component {
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

const Container = styled.View`
  background-color: ${color.white};
  flex: 1;
`;