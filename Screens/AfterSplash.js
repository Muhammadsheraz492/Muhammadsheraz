import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";
import First from "./First";
import { TouchableOpacity } from "react-native-gesture-handler";
import Signin from "./Signin";
const SplashPicture = {
  uri: "https://web.facebook.com/photo/?fbid=736062460518285&set=pob.100023436137388",
};

const AfterSplash = ({ navigation }) => {
  // setTimeout(() => {
  //   navigation.replace("First");
  // }, 2000);
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#008387" }}
    >
      <View style={style.Header}>
        <Animatable.Image
          animation="bounceInLeft"
          /// duration="1500"
          style={style.logo}
          source={{
            uri: "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.6435-9/119168178_790408478417016_779506481472359204_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGecmVNNce5I7ytGw5mVV80nqNy0tpeLrOeo3LS2l4us_fFVWa76928iVs32bG15jU4UcUXCY7xjHLIGLOAOmjS&_nc_ohc=7iPUHaYgk0kAX9aC8SS&_nc_ht=scontent.flhe2-1.fna&oh=eb5a2cc0e41c2576be90c32fda9d8556&oe=6189D263",
          }}
        />
      </View>
      <View style={style.foot}>
        <View style={{ alignItems: "center", top: "9%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            Stay Connected with EveryOne
          </Text>
        </View>
        <View
          style={{
            top: "20%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            left: "-10%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.replace("Signin")}>
            <Text
              style={{
                marginTop: 16,
                paddingVertical: 10,
                paddingHorizontal: 25,
                borderWidth: 4,
                borderColor: "white",
                borderRadius: 30,
                backgroundColor: "#61dafb",
                color: "white",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Get Started
            </Text>

            <MaterialIcons
              style={{
                top: "-44%",
                alignItems: "flex-end",
                textAlign: "right",
              }}
              name="navigate-next"
              size={35}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AfterSplash;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const style = StyleSheet.create({
  Header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  foot: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  getStart: {},
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo,
  },
});
