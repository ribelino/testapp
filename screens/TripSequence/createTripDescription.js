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

import firebase from "firebase";


export default class createTripDescription extends React.Component {
	render() {
		const { navigation } = this.props;

		const budgetInput = navigation.getParam("budgetInput", "NULL");
		const travelTypeInput = navigation.getParam("travelTypeInput", "NULL");
		const peopleCountInput = navigation.getParam("peopleCountInput", "NULL");
		const toID = navigation.state.params.toID;
		const fromID = navigation.state.params.fromID;

		return (
			<View style={styles.homepage}>
				<Text style={{ fontSize: 27, color: "white", marginTop: -200 }}>
					{" "}
					Trip Description{" "}
				</Text>
				<TextInput
					style={{
						marginTop: 75,
						height: 193,
						width: 303,
						borderColor: "white",
						borderWidth: 1,
						backgroundColor: "white"
					}}
					underlineColorAndroid={"rgba(0,0,0,0)"}
					onChangeText={text => this.setState({ tripDescriptionInput: text })}
				/>
				<Button
					style={{ marginBottom: 200 }}
					title={"Confirm Trip Description"}
					disabled={false}
					onPress={() => {
						writeDestinationData(
							travelTypeInput,
							peopleCountInput,
							budgetInput,
							toID,
							fromID,
							this.state.tripDescriptionInput
						);
						this.props.navigation.navigate('CreateTrip');
					}}
				/>
			</View>
		);
	}
}

function writeDestinationData(
	travelType,
	peopleCount,
	budget,
	toID,
	fromID,
	tripDescription
	) {
	firebase
		.database()
		.ref("trips/" + toID)
		.set({
			travelType: travelType,
			amountOfPeople: peopleCount,
			budget: budget,
			toID: toID,
			fromID: fromID,
			tripDescription: tripDescription,
			interest: 0
		});
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
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