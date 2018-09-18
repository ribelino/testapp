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

export default class TripCreation extends React.Component {
    render() {
        //FUTURE: Will create a random token for a trip ID, without duplication

        return (
            <ScrollView
                style={{
                    backgroundColor: "#28B48B"
                }}
            >
                <View>
                    <TextInput
                        style={{
                            height: 60,
                            color: "White",
                            fontSize: 27,
                            marginLeft: 40,
                            marginRight: 40,
                            marginTop: 30
                        }}
                        underlineColorAndroid="transparent"
                        placeholder={"Destination"}
                        onChangeText={text => this.setState({ toID: text })}
                    />

                    <TextInput
                        style={{
                            height: 60,
                            fontSize: 27,
                            marginBottom: 50,
                            marginLeft: 40,
                            marginRight: 40,
                            marginTop: 30
                        }}
                        placeholder={"From where?"}
                        onChangeText={text => this.setState({ fromID: text })}
                    />
                    <Button
                        title={"Go to TripPreference"}
                        disable={false}
                        onPress={() => {
							if(this.state.toID === '' || this.state.fromID === ''){
								Alert.alert('Please fill in both fields, thank you.');
							} else {
								this.props.navigation.navigate("TripPreference", {
								toID: this.state.toID,
								fromID: this.state.fromID
							});
							}
						}}
							
                    />
                    <Button
                        title={"Calendar"}
                        disable={false}
                        onPress={() => {
                            this.props.navigation.navigate("Calender");
                        }}
                    />
                </View>
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