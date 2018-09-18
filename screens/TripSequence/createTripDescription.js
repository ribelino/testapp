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
			<View
				style={{
					backgroundColor: "#28B48B",
					flexDirection: "column",
					justifyContent: "space-evenly",
					alignItems: "center"
				}}
			>
				<Text
					style={{
						fontSize: 27,
						color: "white",
						marginTop: 40,
						textAlign: "center"
					}}
				>
					{" "}
					Trip Description{" "}
				</Text>
				<TextInput
					style={{
						alignSelf: "center",
						marginTop: 75,
						marginBottom: 200,
						height: 190,
						width: 300,
						fontSize: 12,
						padding: 8,
						borderColor: "white",
						backgroundColor: "white",
						textAlignVertical: "top"
					}}
					multiline={true}
					numberOfLines={4}
					onChangeText={text => this.setState({ tripDescriptionInput: text })}
				/>
				<Button
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
						this.props.navigation.navigate("Details");
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