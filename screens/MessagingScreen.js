import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class MessagingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <View> 
          <Text style={{color: 'black', marginTop: 200}}> Messaging  Tab </Text>
        </View>
    )
  }
}
