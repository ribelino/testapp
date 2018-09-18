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



export default class TripViewDemo extends React.Component {
	constructor(props) {
		super(props);

		this.setTripData = this.setTripData.bind(this);

		this.state = {
			trip: [],
			loadingTSRC: true,
			loadingBSRC: true,
			loadingPSRC: true,
			user: []
		};
	}

	//setTripData(tripId){
	//  var tripId = this.props.navigation.state.params.tripId;
	//  var tripLocation = firebase.database().ref('trips/' + tripId  );
	//  console.log(tripLocation);
	//  }
	componentDidMount() {
		this.setTripData();
	}

	setTripData = () => {
		this.setState({ location: "nope" });
		//console.log(this.state.location);
		//return firebase.database().ref('trips/' + this.props.navigation.state.params.tripId ).once('value').then(function(snapshot){
		//  var locationData = snapshot.val().location;
		//  console.log(locationData);
		//});

		let tripRef = firebase
			.database()
			.ref("trips/" + this.props.navigation.state.params.tripId);
		tripRef.on("value", snapshot => {
			let data = snapshot.val();
			let trip = Object.values(data);

			console.log(trip[7]);
			let userRef = firebase.database().ref("users/" + trip[7]);
			userRef.on("value", snapshot => {
				let userData = snapshot.val();

				let user = Object.values(userData);
				//console.log(user[0]);
				this.setState({ user });
			});

			if (trip[1] == "$") {
				this.setState({
                    budgetSRC: require('./homeFeedAssets/dollarOne.png'),
					loadingBSRC: false
				});
				console.log("SET $");
			} else if (trip[1] == "$$") {
				this.setState({
					budgetSRC: require("./homeFeedAssets/$$.png"),
					loadingBSRC: false
				});
				console.log("SET $$");
			} else if (trip[1] == "$$$") {
				this.setState({
					budgetSRC: require("./homeFeedAssets/$$$.png"),
					loadingBSRC: false
				});
				console.log("SET $$$");
			} else {
				this.setState({
					budgetSRC: require("./homeFeedAssets/$$$+.png"),
					loadingBSRC: false
				});
				console.log("SET $$$$$");
			}

			if (trip[6] == "bus") {
				this.setState({
					travelSRC: require("./homeFeedAssets/bus.png"),
					loadingTSRC: false
				});
				console.log("SET BUS");
			} else if (trip[6] == "car") {
				this.setState({
					travelSRC: require("./homeFeedAssets/car.png"),
					loadingTSRC: false
				});
				console.log("SET CAR");
			} else if (trip[6] == "plane") {
				this.setState({
					travelSRC: require("./homeFeedAssets/plane.png"),
					loadingTSRC: false
				});
				console.log("SET PLANE");
			} else {
				this.setState({
					travelSRC: require("./homeFeedAssets/train.png"),
					loadingTSRC: false
				});
				console.log("SET TRAIN");
			}

			if (trip[0] == "1") {
				this.setState({
					amountOfPeopleSRC: require("./homeFeedAssets/peopleSolo.png"),
					loadingPSRC: false
				});
				console.log("SET One Person");
			} else if (trip[0] == "2") {
				this.setState({
					amountOfPeopleSRC: require("./homeFeedAssets/peopleTwo.png"),
					loadingPSRC: false
				});
				console.log("SET Two Person");
			} else if (trip[0] == "3") {
				this.setState({
					amountOfPeopleSRC: require("./homeFeedAssets/peopleThree.png"),
					loadingPSRC: false
				});
				console.log("SET Three Person");
			} else {
				this.setState({
					amountOfPeopleSRC: require("./homeFeedAssets/peopleThreePlus.png"),
					loadingPSRC: false
				});
				console.log("SET More Person");
			}

			this.setState({ trip });
		});

		/*console.log(tripLocation);
      tripLocation.on('value', function(snapshot) {
        if(!snapshot){
          console.log('An error occured');
        } else {
      const tripRaw = snapshot.val();
      var location = tripRaw.location;

      //console.log(location);
        //this.setState({location});
        //var trip = {
        //  location : tripRaw.location,

        //  leaveDate : tripRaw.leaveDate,
        //  returnDate : tripRaw.returnDate,
        //}
        //console.log(trip)
        return tripRaw;*/
	};

	renderAdditionalData = () => {
		return <View />;
	};
	render() {
		/**
      DATA KEY
      amountOfPeople = this.state.trip[0];
      budget = this.state.trip[1];
      interest = this.state.trip[2];
      leaveDate = this.state.trip[3];
      location = this.state.trip[4];
      returnDate = this.state.trip[5];
      travelType = this.state.trip[6];
      tripCreator = this.state.trip[7];
			tripDetails = this.state.trip[8];
    */

		//console.log(this.state.trip[7]);
		var tripId = this.props.navigation.state.params.tripId;
		console.log(this.state.user[0]);
		console.log(this.state.user[1]);
		console.log(this.state.trip[8]);
		//console.log(this.props.navigation.state.params.tripId);
		//console.log(this.state.location);
		//console.log(this.state.trip);

		if (
			this.state.loadingBSRC &&
			this.state.loadingPSRC &&
			this.state.loadingTSRC
		) {
			return (
				<View
					style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
				>
					<ActivityIndicator size="large" color="dodgerblue" />
				</View>
			);
		}

		return (
			<ScrollView>
				<Container>
					<Content>
						<Card>
							<CardItem
								style={{ alignItems: "center", justifyContent: "center" }}
							>
								<View>
									<Image
										style={{
											alignItems: "center",
											height: 300,
											width: 400,
											marginTop: 0
										}}
										source={require("./homeFeedAssets/chicago.jpg")}
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
										{this.state.trip[4]}
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
											source={require("./homeFeedAssets/goingArrow.png")}
											resizeMode="center"
										/>
										<Text style={{ textAlign: "center", color: "black" }}>
											{this.state.trip[3]}
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
											source={require("./homeFeedAssets/returningArrow.png")}
											resizeMode="center"
										/>

										<Text style={{ textAlign: "center", color: "black" }}>
											{this.state.trip[5]}
										</Text>
									</Container>

									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											alignSelf: "stretch",
											justifyContent: "space-around",
											flex: 1
										}}
									>
										<View
											style={{
												flexDirection: "column",
												flex: 0,
												alignItems: "center"
											}}
										>
											<Image
												style={{ width: 25, height: 25 }}
												source={this.state.budgetSRC}
												resizeMode="center"
											/>
											<Text
												style={{ color: "black", justifyContent: "flex-end" }}
											>
												TEMP
											</Text>
										</View>
										<View
											style={{
												flexDirection: "column",
												flex: 0,
												alignItems: "center"
											}}
										>
											<Image
												style={{ width: 25, height: 25 }}
												source={this.state.travelSRC}
												resizeMode="center"
											/>
											<Text
												style={{ color: "black", justifyContent: "flex-end" }}
											>
												TEMP
											</Text>
										</View>
										<View
											style={{
												flexDirection: "column",
												flex: 0,
												alignItems: "center"
											}}
										>
											<Image
												style={{ width: 25, height: 25 }}
												source={this.state.amountOfPeopleSRC}
												resizeMode="center"
											/>
											<Text
												style={{ color: "black", justifyContent: "flex-end" }}
											>
												TEMP
											</Text>
										</View>
									</View>

									<View
										flex
										style={{
											flexDirection: "row",
											flex: 1,
											justifyContent: "center",
											alignItems: "center"
										}}
									>
										<Image
											style={{ width: 25, height: 25 }}
											source={require("./homeFeedAssets/star.png")}
											resizeMode="center"
										/>
										<Text> {this.state.trip[2]} Interested</Text>
									</View>

									<View
										flex
										style={{
											flexDirection: "row",
											flex: 1,
											alignItems: "center"
										}}
									>
										<Text>Trip Details:</Text>
									</View>
									<View
										flex
										style={{
											flexDirection: "column",
											flex: 1,
											alignItems: "center"
										}}
									>
										<Text style={{ marginBottom: 20 }}>
											{this.state.trip[8]}
										</Text>
									</View>

									<View
										flex
										style={{
											flexDirection: "row",
											flex: 1,
											alignItems: "center"
										}}
									>
										<Image
											style={{
												height: 60,
												width: 60,
												borderRadius: 60,
												borderWidth: 1
											}}
											source={{ uri: this.state.user[1] }}
										/>
										<Text style={{ marginLeft: 10 }}>{this.state.user[0]}</Text>
									</View>
								</View>
							</CardItem>
						</Card>
					</Content>
				</Container>
			</ScrollView>
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