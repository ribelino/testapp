import React, { Component } from "react";
import {
	Image,
	Icon,
	ActivityIndicator,
	StyleSheet,
	FlatList,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	ScrollView,
	AppRegistry,
	TextInput,
	TouchableWithoutFeedback,
	Alert,
	Button
} from "react-native";
import { StackNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";
import { _ } from "lodash";
import { Header, Container, Title, Content, Card, CardItem } from "native-base";

import Expo from "expo";
import firebase from "firebase";

console.disableYellowBox = true;
const id = "796882037187132"; //This is the Facebook project ID, do not change
//const {navigate} = this.props.navigation;



//var database = firebase.database();

export default class ProfileScreen extends React.Component {
	constructor(props) {
		super(props);
		this.setUserData = this.setUserData.bind(this);
		this.state = {
			profileLoading: true
		};
	}
	componentDidMount() {
		this.setUserData();
	}

	setUserData = () => {
		let tripRef = firebase
			.database()
			.ref("users/" + this.props.navigation.state.params.tripCreator);
		tripRef.on("value", snapshot => {
			let data = snapshot.val();
			let userProfile = Object.values(data);
			console.log(userProfile[1]);
			this.setState({
				userProfile,
				profileLoading: false
			});
		});
	};

	render() {
		if (this.state.profileLoading) {
			return (
				<View
					style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
				>
					<ActivityIndicator size="large" color="dodgerblue" />
				</View>
			);
		}
		return (
			<View style={{ flex: 1 }}>
				<Image
					style={{
						flex: 1
					}}
					source={{ uri: this.state.userProfile[1] }}
				/>
				<Text style={{ flex: 1, alignSelf: "center" }}>
					{this.state.userProfile[0]}
				</Text>
				<Text style={{ flex: 1, alignSelf: "center" }}>
					{this.state.userProfile[0]}
				</Text>
			</View>
		);
	}
}