import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import MainTabNavigator from './navigation/MainTabNavigator';
import LoginScreen from './screens/loginScreen.js'
import HubClass from './navigation/hubFile';
import {createStackNavigator} from 'react-navigation'

console.disableYellowBox = true;

const Rootstack = createStackNavigator (
  {
    Hub: {screen: HubClass},
    Login: {screen: LoginScreen},
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Rootstack />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
