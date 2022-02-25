import React from "react";
import { View, Text, AppRegistry } from "react-native";

export class MySurvey extends React.Component {
  render() {
    return (
      <View>
        <Text> This is MySurvey.</Text>
      </View>
    );
  }
}

export default AppRegistry.registerComponent("MySurvey", MySurvey);
