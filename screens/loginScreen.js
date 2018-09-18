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

const firebaseConfig = {
	apiKey: "AIzaSyCadbh--T975gUxvvslcyeEwo8e2TSJodY",
	authDomain: "gownowtest.firebaseapp.com",
	databaseURL: "https://gownowtest.firebaseio.com",
	storageBucket: "gownowtest.appspot.com"
};

firebase.initializeApp(firebaseConfig);
var user = firebase.auth().currentUser;
var database = firebase.database();

export default class LoginScreen extends React.Component {
	login = async () => {
		const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
			id,
			{ permissions: ["public_profile", "email", "user_friends"] }
		);
		if (type === "success") {
			//Handle successful authenticatino here
			const response = await fetch(
				`https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,picture.height(400)`
			);
			//const {picture, name, birthday} = await response.json
			//Alert.alert(Hi ${(await response.json()).name}!)
			const credential = firebase.auth.FacebookAuthProvider.credential(token);

			//currentName = (await response.json().name);
			let userJSON = await response.json();
			let userData = Object.values(userJSON);
			let pictureDataRAW = Object.values(userData[2]);
			let pictureData = Object.values(pictureDataRAW[0]);
			const profilePicture = pictureData[2];
			console.log(pictureData[2]);
			const currentName = userData[1];
			const userID = userData[0];
			//const profilePicture = https://graph.facebook.com/${userID}?fields=picture.type(large);

			firebase
				.auth()
				.signInWithCredential(credential)
				.catch(error => {
					//Handle errors here bonehead
					console.log(error);
				});
			const currentUser = "";
			currentUser = firebase.auth().currentUser.uid;

			firebase
				.database()
				.ref("users/" + currentUser)
				.set({
					name: currentName,
					pictureURL: profilePicture
				});

			this.props.navigation.navigate("Hub");
		} else {
			alert(type);
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Image
					style={{ height: 207, width: 167, resizeMode: "contain" }}
					source={require("../assets/logoStacked.jpg")}
				/>
				<Text>Find your next travel partner</Text>

				<TouchableOpacity onPress={() => this.login()}>
					<View
						style={{
							width: "50%",
							borderRadius: 0,
							padding: 24,
							color: "#28B48B",
							backgroundColor: "white"
						}}
					>
						<Text style={{ color: "#28B48B" }}> Login to Facebook </Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",

		backgroundColor: "#28B48B",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
		color: "#34495e"
	},
	buttonStar: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		margin: 0,
		width: 40,
		height: 40
	},
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
		width: 40,
		height: 40
	},

	tripScrollContainer: {
		flex: 0,
		height: 50,
		//display: flex,
		flexDirection: "row"
	},

	container2: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ecf0f1"
	}
});