import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Templates from "../../KickAssComponents/Templates";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ColorStyles from "../../Color.Styles";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { setIndex } from "../../redux/dataSlice";
import { ColorPropType } from "react-native";
import UseTemplate from "../../KickAssSVG/usetemplate.svg";
const FirstTemplate = () => {
  const [level, setLevel] = useState("ZeroLevel");
  const [fontsize, setFontsize] = useState(5);
  const [margin, setMargin] = useState(0);
  const [color, setColor] = useState(ColorStyles.primaryColor);
  const [newindex, setNewindex] = useState(0);
  const DATA = [
    ColorStyles.primaryColor,
    ColorStyles.pink,
    ColorStyles.blue,
    ColorStyles.yellow,
    ColorStyles.green,
    ColorStyles.voilet,
    ColorStyles.choclate,
    ColorStyles.darkbrown,
    ColorStyles.lightblue,
  ];
  const customFonts = {
    "introrust-base": require("../../assets/fonts/introrust-base.otf"),
    Javiera: require("../../assets/fonts/Javiera-Regular.otf"),
  };
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <View style={{ height: "80%", zIndex: 1 }}>
        <Templates newcolor={color} />
      </View>
      <ScrollView style={{ height: "20%", width: wp("100%") }}>
        <Text style={{ left: "5%", fontFamily: "Javiera", fontSize: 12 }}>
          Margin
        </Text>
        <View
          style={{
            top: "15%",
            width: wp("90%"),
            height: hp("0.5%"),
            alignSelf: "center",
            backgroundColor: ColorStyles.primaryColor,
            // position: "absolute",
            zIndex: 0,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
          <TouchableOpacity
            onPress={() => setMargin(3)}
            style={{
              // backgroundColor: "#000",
              height: hp("6%"),
              width: wp("5%"),
              //   position: "absolute",
              zIndex: 1,
              top: "-2%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: ColorStyles.primaryColor,
                height: hp("4%"),
                width: wp("0.5%"),
              }}
            ></View>
            {margin === 3 ? (
              <View
                style={{
                  width: wp("4%"),
                  height: hp("2%"),
                  borderRadius: 10,
                  // alignSelf: "center",
                  backgroundColor: ColorStyles.primaryColor,
                  position: "absolute",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
        <Text style={{ left: "5%", fontFamily: "Javiera", fontSize: 12 }}>
          FontSize
        </Text>
        <View
          style={{
            top: "15%",
            width: wp("90%"),
            height: hp("0.5%"),
            alignSelf: "center",
            backgroundColor: ColorStyles.primaryColor,
            // position: "absolute",
            zIndex: 0,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp("95%"),
            alignSelf: "center",
            // top: "-15%",
          }}
        >
          <TouchableOpacity
            onPress={() => setFontsize(5)}
            style={{
              // backgroundColor: "#000",
              height: hp("6%"),
              width: wp("5%"),
              //   position: "absolute",
              // zIndex: 2,
              top: "-2%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: ColorStyles.primaryColor,
                height: hp("4%"),
                width: wp("0.5%"),
              }}
            ></View>
            {fontsize === 5 ? (
              <View
                style={{
                  width: wp("4%"),
                  height: hp("2%"),
                  borderRadius: 10,
                  alignSelf: "center",
                  backgroundColor: ColorStyles.primaryColor,
                  position: "absolute",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFontsize(10)}
            style={{
              // backgroundColor: "#000",
              height: hp("6%"),
              width: wp("5%"),
              //   position: "absolute",
              // zIndex: 2,
              top: "-2%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: ColorStyles.primaryColor,
                height: hp("4%"),
                width: wp("0.5%"),
              }}
            ></View>
            {fontsize === 10 ? (
              <View
                style={{
                  width: wp("4%"),
                  height: hp("2%"),
                  borderRadius: 10,
                  // alignSelf: "center",
                  backgroundColor: ColorStyles.primaryColor,
                  position: "absolute",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFontsize(13)}
            style={{
              // backgroundColor: "#000",
              height: hp("6%"),
              width: wp("5%"),
              //   position: "absolute",
              zIndex: 2,
              top: "-2%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: ColorStyles.primaryColor,
                height: hp("4%"),
                width: wp("0.5%"),
              }}
            ></View>
            {fontsize === 13 ? (
              <View
                style={{
                  width: wp("4%"),
                  height: hp("2%"),
                  borderRadius: 10,
                  // alignSelf: "center",
                  backgroundColor: ColorStyles.primaryColor,
                  position: "absolute",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFontsize(15)}
            style={{
              // backgroundColor: "#000",
              height: hp("6%"),
              width: wp("5%"),
              //   position: "absolute",
              zIndex: 1,
              top: "-2%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: ColorStyles.primaryColor,
                height: hp("4%"),
                width: wp("0.5%"),
              }}
            ></View>
            {fontsize === 15 ? (
              <View
                style={{
                  width: wp("4%"),
                  height: hp("2%"),
                  borderRadius: 10,
                  // alignSelf: "center",
                  backgroundColor: ColorStyles.primaryColor,
                  position: "absolute",
                }}
              ></View>
            ) : null}
          </TouchableOpacity>
        </View>
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const sethandleColor = (item, index) => {
              //   console.log(index);
              setColor(item);
              setNewindex(index);
            };
            return (
              <View style={{ height: hp("10%") }}>
                <TouchableOpacity
                  onPress={() => sethandleColor(item, index)}
                  style={{
                    height: hp("10%"),
                    width: wp("20%"),
                    backgroundColor: item,
                    borderRadius: 40,
                    marginHorizontal: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {newindex == index ? (
                    <MaterialIcons name="done" size={35} color="white" />
                  ) : null}
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
        <View
          style={{
            height: hp("10%"),
            width: wp("100%"),
            // backgroundColor: "#000",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <UseTemplate />
            <Text
              style={{
                position: "absolute",
                color: "white",
                fontFamily: "Javiera",
              }}
            >
              Use Template
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};
export default FirstTemplate;