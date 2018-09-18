import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagingScreen from '../screens/MessagingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateTrip from '../screens/CreateTrip';
//Imports for HomeTab
import TripViewDemo from '../screens/HomeFeed/TripView';

//Imports for CreateTrip Tab
import CalenderDemo from '../screens/TripSequence/calenderPage';
import createTripDescription from '../screens/TripSequence/createTripDescription';
import createTripPreference from '../screens/TripSequence/createTripPreference';

//Import for Messaging Tab

//Imports for Profile Tab



const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  TripView: TripViewDemo,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Image
      focused={focused}
      source={require('../assets/navBarImages/greenHome.png')}
      style={{width: 35.15, height: 29.84}}
    />
  ),
};

const MessageStack = createStackNavigator({
  Messages: MessagingScreen,
});

MessageStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <Image
      focused={focused}
      source={require('../assets/navBarImages/greenMsg.png')}
      style={{width: 31.8, height: 22.75}}
    />
  ),
};

const ProfileStack = createStackNavigator({
  ProfileTab: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <Image
      focused={focused}
      source={require('../assets/navBarImages/greenProfile.png')}
      style={{width: 18.92, height: 29.65}}
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
    <Image
      focused={focused}
      source={require('../assets/navBarImages/greenTrip.png')}
      style={{width: 29.65, height: 29.65}}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CreateTripStack,
  MessageStack,
  ProfileStack,
});
