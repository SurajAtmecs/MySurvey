import React from "react";
import {
  View,
  Text,
  AppRegistry,
  Button,
  Alert,
  StyleSheet,
} from "react-native";

export class MySurvey extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}> This is MySurvey.</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Click here"
            onPress={() => {
              Alert.alert("You clicked the button");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "red",
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "white",
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default AppRegistry.registerComponent("MySurvey", MySurvey);
