import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
//import HeaderTitle from "../../KickAssComponents/ProfileManagement/HeaderTitle";
import HeaderTitle from "./HeaderTitle";
//import HeaderTitle from "../Svg/KickAssSvg/header_title_bg.svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const HeaderWithIcons = (props) => {
  const customFonts = {
    "introrust-base": require("../assets/Fonts/introrust-base.otf"),
    Javiera: require("../assets/Fonts/Javiera-Regular.otf"),
  };
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "#000",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          top: "0%",
          //   position: "absolute",
          height: hp("20%"),
          width: wp("100%"),
          //   backgroundColor: "#000",
        }}
      >
        <HeaderTitle />
        <View
          style={{
            // backgroundColor: "yellow",
            height: hp("10%"),
            width: wp("100%"),
            top: "-30%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              left: "30%",
              justifyContent: "center",
              // backgroundColor: "#000",
              width: wp("30%"),
              height: hp("8%"),
              // top: "2%",
            }}
          >
            <Text>{props.icon}</Text>
            <Text
              style={{
                position: "absolute",
                left: "20%",
                width: wp("40%"),
                // backgroundColor: "#000",
                color: "white",
              }}
            >
              {props.icontext}
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              color: "#fff",
              fontFamily: "Javiera",
              position: "absolute",
              left: "35%",
              bottom: "40%",
            }}
          >
            {props.title}
          </Text>
          <TouchableOpacity
            onPress={props.onPress1}
            style={{ right: "30%", justifyContent: "center" }}
          >
            <Text style={{ color: "white", bottom: "10%" }}>{props.icon1}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default HeaderWithIcons;
