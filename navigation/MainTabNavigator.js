import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagingScreen from '../screens/MessagingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateTrip from '../screens/CreateTrip';
//Imports for HomeTab

//Imports for CreateTrip Tab
import CalenderDemo from '../screens/TripSequence/calenderPage';
import createTripDescription from '../screens/TripSequence/createTripDescription';
import createTripPreference from '../screens/TripSequence/createTripPreference';

//Import for Messaging Tab

//Imports for Profile Tab



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const MessageStack = createStackNavigator({
  Messages: MessagingScreen,
});

MessageStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  ProfileTab: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const CreateTripStack = createStackNavigator({
  CreateTrip: {screen: CreateTrip},
  Calender: {screen: CalenderDemo},
  TripDescription: {screen: createTripDescription},
  TripPreference: {screen: createTripPreference},
},
{
  initialRouteName: 'CreateTrip',
});

CreateTripStack.navigationOptions = {
  tabBarLabel: 'CreateTrip',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MessageStack,
  ProfileStack,
  CreateTripStack,
});
