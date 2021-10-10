import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import About from "./About";
const Home = ({ navigation }) => {
  return (
    <View>
      <Text>This is Home Page</Text>

      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};
export default Home;
const Style = StyleSheet.create({
  Button: {
    margin: 20,
    alignItems: "center",
  },
});
