import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)
const store = createStore(rootReducer, middleware)

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    Profile: {
      screen: Profile,
    }
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
