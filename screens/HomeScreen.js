import React from 'react';
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
import { WebBrowser } from 'expo';
import { List, ListItem } from "react-native-elements";
import { _ } from "lodash";
import firebase from 'firebase';

import { Header, Container, Title, Content, Card, CardItem } from "native-base";

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
		super(props);

		this.state = {
			loading: false,
			data: [],
			trips: [],
			page: 1,
			seed: 1,
			error: null,
			refreshing: false,
			loadingTSRC: true,
			loadingBSRC: true,
			loadingPSRC: true,
			navigation: this.props.navigation
		};
	}

	componentDidMount() {
		this.getTrips();
	}

	//getTrips(){
	//const tripRef = firebase.database().ref('users/').limitToFirst(20);
	//}

	getTrips() {
		firebase
			.database()
			.ref(`trips/`)
			.on("value", snapshot => {
				const trips = _.map(snapshot.val(), tripId => {
					return { tripId };
				});
				this.setState({ trips, loading: false });
			});
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "86%",
					backgroundColor: "#CED0CE",
					marginLeft: "14%"
				}}
			/>
		);
	};
	_onPressItem() {}

	_onPressInterest() {
		Alert.alert(Help);
  }
  _renderItem = ({ item }) => {
		//let location = pullLocationData(item)

		let loadingBSRC = true;
		let loadingPSRC = true;
		let loadingTSRC = true;

		if (item.tripId.budget == "$") {
			var budgetSRC = require("../assets/dollarOne.png");
			loadingBSRC = false;
		} else if (item.tripId.budget == "$$") {
			var budgetSRC = require("../assets/$$.png");
			loadingBSRC = false;
		} else if (item.tripId.budget == "$$$") {
			var budgetSRC = require("../assets/$$$.png");
			loadingBSRC = false;
		} else {
			var budgetSRC = require("../assets/$$$+.png");
			loadingBSRC = false;
		}

		if (item.tripId.amountOfPeople == "1") {
			var amountOfPeopleSRC = require("../assets/peopleSolo.png");
			loadingPSRC = false;
		} else if (item.tripId.amountOfPeople == "2") {
			var amountOfPeopleSRC = require("../assets/peopleTwo.png");
			loadingPSRC = false;
		} else if (item.tripId.amountOfPeople == "3") {
			var amountOfPeopleSRC = require("../assets/peopleThree.png");
			loadingPSRC = false;
		} else {
			var amountOfPeopleSRC = require("../assets/peopleThreePlus.png");
			loadingPSRC = false;
		}

		if (item.tripId.travelType == "car") {
			var travelSRC = require("../assets/car.png");
			loadingTSRC = false;
		} else if (item.tripId.travelType == "bus") {
			var travelSRC = require("../assets/bus.png");
			loadingTSRC = false;
		} else if (item.tripId.travelType == "train") {
			var travelSRC = require("../assets/train.png");
			loadingTSRC = false;
		} else {
			var travelSRC = require("../assets/plane.png");
			loadingTSRC = false;
		}

		if (loadingBSRC && loadingPSRC && loadingTSRC) {
			return (
				<View
					style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
				>
					<ActivityIndicator size="large" color="dodgerblue" />
				</View>
			);
		}
		return (
			<ScrollView style={{ backgroundColor: "#28B48B" }}>
				<Container flex style={styles.tripScrollContainer}>
					<Image
						style={styles.buttonStar}
						source={require("../assets/logoSmall.jpg")}
					/>

					<Text style={{ margin: 10, textAlign: "right", color: "white" }}>
						Browse Trips
					</Text>
				</Container>

				<Card>
					<Button
						title={"Move to Trip View"}
						disabled={false}
						onPress={() => {
							this.props.navigation.navigate("TripView", {
								tripId: item.tripId.tripId
							});
						}}
					/>

					<Button
						title={"Move to Profile"}
						disabled={false}
						onPress={() => {
							this.props.navigation.navigate("Profile", {
								tripCreator: item.tripId.tripCreator
							});
						}}
					/>

					<CardItem style={{ alignItems: "center", justifyContent: "center" }}>
						<View>
							<Image
								style={{
									alignItems: "center",
									height: 300,
									width: 400,
									marginTop: 0
								}}
								source={require("../assets/chicago.jpg")}
								resizeMode="center"
							/>
							<Text
								style={{
									textAlign: "center",
									color: "black",
									fontSize: 22,
									marginBottom: 15
								}}
							>
								{item.tripId.location}
							</Text>
							<Container
								flex
								style={{
									flexDirection: "row",
									height: 30,
									justifyContent: "center"
								}}
							>
								<Image
									style={{
										alignItems: "center",
										height: 25,
										width: 50,
										marginRight: 5
									}}
									source={require("../assets/goingArrow.png")}
									resizeMode="center"
								/>
								<Text style={{ textAlign: "center", color: "black" }}>
									{item.tripId.leaveDate}
								</Text>
							</Container>

							<Container
								flex
								style={{
									flexDirection: "row",
									height: 30,
									justifyContent: "center",
									marginBottom: 10
								}}
							>
								<Image
									style={{
										alignItems: "center",
										height: 25,
										width: 50,
										marginRight: 5
									}}
									source={require("../assets/returningArrow.png")}
									resizeMode="center"
								/>

								<Text style={{ textAlign: "center", color: "black" }}>
									{item.tripId.returnDate}
								</Text>
							</Container>

							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									flex: 1
								}}
							>
								<View
									style={{
										marginLeft: 10
									}}
								>
									<Image
										style={{ width: 25, height: 25 }}
										source={budgetSRC}
										resizeMode="center"
									/>
								</View>
								<View
									style={{
										marginLeft: 25
									}}
								>
									<Image
										style={{ width: 25, height: 25 }}
										source={travelSRC}
										resizeMode="center"
									/>
								</View>
								<View
									style={{
										marginLeft: 25
									}}
								>
									<Image
										style={{ width: 25, height: 25 }}
										source={amountOfPeopleSRC}
										resizeMode="center"
									/>
								</View>

								<View
									style={{
										justifyContent: "flex-end",
										flex: 2
									}}
								/>

								<Text>{item.tripId.interest}</Text>

								<Image
									style={{ width: 50, height: 50 }}
									source={require("../assets/uncheckedStar.png")}
									resizeMode="center"
								/>
							</View>
						</View>
					</CardItem>
				</Card>
			</ScrollView>

			/*
      <TouchableOpacity>
        <ListItem

        item={item}

        roundAvatar
        id = {item.tripId}
        //title={`${item.name.first} ${item.name.last}`}
        title = {item.tripId.location}
        //Icon = {require('./assets/check.png')} style = {{width: 40, height: 40}}
        subtitle = {`${item.tripId.leaveDate} ${'-'} ${item.tripId.returnDate}`}
        //onPressItem={this._onPressItem}
        //subtitle={_.values(item.tripId}
        avatar={require('./assets/gonowlogo.jpg')} style = {{width: 40, height: 40}}
        />
        </TouchableOpacity>*/
		);
	};

	render() {
		if (this.state.loading) {
			return (
				<View
					style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
				>
					<ActivityIndicator size="large" color="dodgerblue" />
				</View>
			);
		}
		const { trips } = this.state.trips;
		let tripArray = Object.values(this.state.trips);
		//console.log(this.state.trips)
		return (
			<View>
				<FlatList
					data={tripArray}
					title={this.renderItem}
					renderItem={this._renderItem}
					keyExtractor={item => item.tripId}
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