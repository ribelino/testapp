import RadioForm, {
	RadioButton,
	RadioButtonInput,
	RadioButtonLabel
} from "react-native-simple-radio-button";

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

var radio_props = [
	[
		{ label: "car", value: "car" },
		{ label: "plane", value: "plane" },
		{ label: "bus", value: "bus" },
		{ label: "train", value: "train" }
	],
	[
		{ label: "1", value: "1" },
		{ label: "2", value: "2" },
		{ label: "3", value: "3" },
		{ label: "4+", value: "4+" }
	],
	[
		{ label: "$", value: "$" },
		{ label: "$$", value: "$$" },
		{ label: "$$$", value: "$$$" },
		{ label: "$$$+", value: "$$$+" }
	]
];

var createReactClass = require("create-react-class");
var RadioButtonProject = createReactClass({
	getInitialState: function() {
		return {
			value1: 0,
			value2: 0,
			value3: 0
		};
	},
	render: function() {
		return (
			<View>
				<RadioForm
					radio_props={radio_props[0]}
					initial={0}
					onPress={value => {
						this.setState({ value: value });
					}}
				/>
				<RadioForm
					radio_props={radio_props[1]}
					initial={0}
					onPress={value => {
						this.setState({ value: value });
					}}
				/>
				<RadioForm
					radio_props={radio_props[2]}
					initial={0}
					onPress={value => {
						this.setState({ value: value });
					}}
				/>
			</View>
		);
	}
});

export default class createTripPreference extends React.Component {
	//Fix the error where if the default selected radio buttons are chosed as,
	//it crashes the app
	render() {
		const { navigation } = this.props;
		const toID = navigation.getParam("toID", "NULL");
		const fromID = navigation.getParam("fromID", "NULL");

		return (
			<View style={styles.homepage}>
				<RadioForm
					radio_props={radio_props[0]}
					initial={0}
					formHorizontal={true}
					labelHorizontal={false}
					labelColor={"white"}
					animation={true}
					buttonColor={"white"}
					onPress={value => {
						this.setState({ value1: value });
					}}
				/>
				<RadioForm
					radio_props={radio_props[1]}
					initial={0}
					formHorizontal={true}
					labelHorizontal={false}
					labelColor={"white"}
					animation={true}
					buttonColor={"white"}
					onPress={value => {
						this.setState({ value2: value });
					}}
				/>
				<RadioForm
					radio_props={radio_props[2]}
					initial={0}
					formHorizontal={true}
					labelHorizontal={false}
					labelColor={"white"}
					animation={true}
					buttonColor={"white"}
					onPress={value => {
						this.setState({ value3: value });
					}}
				/>
				<Button
					title={"Confirm Trip Creation"}
					disabled={false}
					onPress={() => {
						this.props.navigation.navigate("TripDescription", {
							travelTypeInput: this.state.value1,
							peopleCountInput: this.state.value2,
							budgetInput: this.state.value3,
							toID: toID,
							fromID: fromID
						});
					}}
				/>
			</View>
		);
	}
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
