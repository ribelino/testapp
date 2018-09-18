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
		{ label: "", value: "car" },
		{ label: "", value: "plane" },
		{ label: "", value: "bus" },
		{ label: "", value: "train" }
	],
	[
		{ label: "", value: "1" },
		{ label: "", value: "2" },
		{ label: "", value: "3" },
		{ label: "", value: "4+" }
	],
	[
		{ label: "", value: "$" },
		{ label: "", value: "$$" },
		{ label: "", value: "$$$" },
		{ label: "", value: "$$$+" }
	]
];

export default class createTripPreference extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	//Fix the error where if the default selected radio buttons are chosed as,
	//it crashes the app
	render() {
		const { navigation } = this.props;
		const toID = navigation.getParam("toID", "NULL");
		const fromID = navigation.getParam("fromID", "NULL");

		return (
			<View style={{ backgroundColor: "#28B48B" }}>
				<Text
					style={{
						fontSize: 27,
						marginTop: 20,
						marginBottom: 10,
						color: "white",
						textAlign: "center"
					}}
				>
					Trip Preferences
				</Text>
				<Text
					style={{
						marginLeft: 40,
						fontSize: 14,
						color: "white"
					}}
				>
					Method of travel
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly"
					}}
				>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('/Users/element/Documents/RibTesting/testapp/assets/carWhite.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('/Users/element/Documents/RibTesting/testapp/assets/planeWhite.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('/Users/element/Documents/RibTesting/testapp/assets/trainWhite.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('/Users/element/Documents/RibTesting/testapp/assets/busWhite.png')}
					/>
				</View>
				<RadioForm
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						marginBottom: 90
					}}
					radio_props={radio_props[0]}
					initial={0}
					onPress={value => {
						this.setState({ value1: value });
					}}
					borderWidth={0}
					buttonInnerColor={"#283F4F"}
					buttonSize={20}
					buttonOuterSize={24}
					buttonOuterColor={"#CCCCCC"}
					buttonWrapStyle={{ marginLeft: 10 }}
					formHorizontal={true}
					labelHorizontal={false}
					animation={true}
				>
					<RadioButtonInput />
				</RadioForm>

				<Text
					style={{
						marginLeft: 40,
						fontSize: 14,
						color: "white"
					}}
				>
					Number of People
				</Text>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						alignItems: "center"
					}}
				>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/peopleSoloWhite.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/peopleTwoWhite.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/peopleThreeWhite.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/peopleThreePlusWhite.png')}
					/>
				</View>
				<RadioForm
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						marginBottom: 90
					}}
					radio_props={radio_props[1]}
					initial={0}
					onPress={value => {
						this.setState({ value2: value });
					}}
					borderWidth={0}
					buttonInnerColor={"#283F4F"}
					buttonSize={20}
					buttonOuterSize={24}
					buttonOuterColor={"#CCCCCC"}
					buttonWrapStyle={{ marginLeft: 10 }}
					formHorizontal={true}
					labelHorizontal={false}
					animation={true}
				>
					<RadioButtonInput />
				</RadioForm>

				<Text
					style={{
						marginLeft: 40,
						fontSize: 14,
						color: "white"
					}}
				>
					Approximate price range
				</Text>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly"
					}}
				>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/$White.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/$$White.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/$$$White.png')}
					/>
					<Image
						style={{ height: 32, width: 32, resizeMode: "contain" }}
						source={require('./tripSequenceAssets/$$$+White.png')}
					/>
				</View>
				<RadioForm
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						marginBottom: 90
					}}
					radio_props={radio_props[2]}
					initial={0}
					onPress={value => {
						this.setState({ value3: value });
					}}
					borderWidth={0}
					buttonInnerColor={"#283F4F"}
					buttonSize={20}
					buttonOuterSize={24}
					buttonOuterColor={"#CCCCCC"}
					buttonWrapStyle={{ marginLeft: 10 }}
					formHorizontal={true}
					labelHorizontal={false}
					animation={true}
				>
					<RadioButtonInput />
				</RadioForm>
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