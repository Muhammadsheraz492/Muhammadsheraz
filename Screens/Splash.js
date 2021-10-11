import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import AfterSplash from "./AfterSplash";
import { TouchableOpacity } from "react-native-gesture-handler";

const SplashPicture = {
  uri: "https://web.facebook.com/photo/?fbid=736062460518285&set=pob.100023436137388",
};

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("AfterSplash");
  }, 2000);
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Animatable.Image
          animation="bounceInRight"
          // duration="2000"
          style={style.logo}
          source={{
            uri: "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.6435-9/119168178_790408478417016_779506481472359204_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGecmVNNce5I7ytGw5mVV80nqNy0tpeLrOeo3LS2l4us_fFVWa76928iVs32bG15jU4UcUXCY7xjHLIGLOAOmjS&_nc_ohc=7iPUHaYgk0kAX9aC8SS&_nc_ht=scontent.flhe2-1.fna&oh=eb5a2cc0e41c2576be90c32fda9d8556&oe=6189D263",
          }}
        />
      </View>
    </View>
  );
};
export default Splash;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const style = StyleSheet.create({
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo,
  },
});
