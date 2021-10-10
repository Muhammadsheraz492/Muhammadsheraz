import React from "react";
import { View, Image } from "react-native";
import First from "./First";

const SplashPicture = require("../Image/splash.png");

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("First");
  }, 2000);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Image style={{ height: "50%", width: "100%" }} source={SplashPicture} />
    </View>
  );
};
export default Splash;
