import Calendar from "react-native-calendar-select";
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


export default class CalendarDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(2017, 6, 12),
			endDate: new Date(2017, 8, 2)
		};
		this.confirmDate = this.confirmDate.bind(this);
		this.openCalendar = this.openCalendar.bind(this);
	}

	// when confirm button is clicked, an object is conveyed to outer component
	// contains following property:
	// startDate [Date Object], endDate [Date Object]
	// startMoment [Moment Object], endMoment [Moment Object]
	confirmDate({ startDate, endDate, startMoment, endMoment }) {
		this.setState({
			startDate,
			endDate
		});
	}

	openCalendar() {
		this.calendar && this.calendar.open();
	}

	// in render function
	render() {
		const { navigation } = this.props;
		const toID = navigation.getParam("toID", "NULL");
		const fromID = navigation.getParam("fromID", "NULL");

		// It's an optional property, I use this to show the structure of customI18n object.
		let customI18n = {
			w: ["", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"],
			weekday: [
				"",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			text: {
				start: "Leave Date",
				end: "Return Date",
				date: "Date",
				save: "Confirm",
				clear: "Reset"
			},
			date: "MM / DD" // date format
		};
		// optional property, too.
		let color = {
			mainColor: "#28B48B",
			subColor: "#28967C"
		};

		return (
			<View>
				<Button title="Open Calendar" onPress={this.openCalendar} />
				<Calendar
					i18n="en"
					ref={calendar => {
						this.calendar = calendar;
					}}
					customI18n={customI18n}
					color={color}
					format="YYYYMMDD"
					minDate="20180731"
					maxDate="20190312"
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					onConfirm={this.confirmDate}
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