import React from "react";
import { View, Text, AppRegistry, Button, Alert } from "react-native";

export class MySurvey extends React.Component {
  render() {
    return (
      <View>
        <Text> This is MySurvey.</Text>
        <Button
          title="Click here"
          onPress={() => {
            Alert.alert("You clicked the button");
          }}
        />
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
});

export default AppRegistry.registerComponent("MySurvey", MySurvey);
