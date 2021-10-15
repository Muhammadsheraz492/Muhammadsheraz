import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
  ScrollView,
} from "react-native";

import SliderText from "react-native-slider-text";
import { SvgCss, Svg, Circle } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { Slider } from "react-native-elements/dist/slider/Slider";
import { MultiSlider } from "@ptomasroos/react-native-multi-slider";
import HeaderWithIcons from "./KickAssComponent/HeaderwithIcon";
import Region from "../Svg/KickAssComponent/Region";
import { Ionicons } from "@expo/vector-icons";
import Jobtype from "./KickAssComponent/JobType";
import Outline from "../Svg/KickAssSvg/filledbutton.svg";
import { Picker } from "@react-native-picker/picker";
import Union from "../Svg/KickAssSvg/Union 7.svg";

const Ap = () => {
  const [value, setvalue] = useState(0);
  const [FirstPicker, SetFirstPicker] = useState();
  const [SecondPicker, SetSecondPicker] = useState();

  return (
    <SafeAreaView>
      <View>
        <HeaderWithIcons
          title="Search Filter"
          icon={<Entypo name="cross" size={24} color="white" />}
        />
        <Region />
        <Jobtype />
      </View>
      <ScrollView>
        <View style={{ left: "7%", top: "2%" }}>
          <View
            style={{
              left: "5.5%",

              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ fontSize: 18, color: "#d2a7ae" }}>
                Experience Year
              </Text>
            </View>
            <View style={{ left: "550%" }}>
              <Text>{value} Year</Text>
            </View>
          </View>
          <View>
            <View style={{ width: "90%" }}>
              <Slider
                value={value}
                maximumValue={10}
                minimumValue={1}
                step={1}
                trackStyle={{ height: hp("0.5"), backgroundColor: "#d2a7ae" }}
                thumbStyle={{
                  height: 25,
                  width: 25,
                  backgroundColor: "#d2a7ae",
                }}
                onValueChange={setvalue}
                minimumTrackTintColor="#d2a7ae"
              />
            </View>
          </View>
        </View>

        <View style={{ top: "2%", left: "1%" }}>
          <View style={{ top: "5%", left: "5.5%" }}>
            <Text style={{ fontSize: 18, color: "#d2a7ae" }}>
              Industrial Type
            </Text>
          </View>
          <View style={{ top: "7%", alignItems: "center" }}>
            <Union />
          </View>
          <View
            style={{
              top: "-35%",
              left: "3.5%",
              width: "95%",
            }}
          >
            <Picker
              selectedValue={FirstPicker}
              onValueChange={(itemValue, itemIndex) =>
                SetFirstPicker(itemValue)
              }
            >
              <Picker.Item
                label="Information techniology"
                value="Information techniology"
              />
              <Picker.Item
                label="Software Engineering"
                value="Software Engineering"
              />
              <Picker.Item label="Computer Science" value="Computer Science" />
            </Picker>
          </View>
        </View>
        <View style={{ left: "1%" }}>
          <View style={{ top: "5%", left: "5.5%" }}>
            <Text style={{ fontSize: 18, color: "#d2a7ae" }}>Company</Text>
          </View>
          <View style={{ top: "7%", alignItems: "center" }}>
            <Union />
          </View>
          <View
            style={{
              top: "-35%",
              left: "3.5%",
              width: "95%",
            }}
          >
            <Picker
              selectedValue={SecondPicker}
              onValueChange={(itemValue, itemIndex) =>
                SetSecondPicker(itemValue)
              }
            >
              <Picker.Item
                label="Information techniology"
                value="Information techniology"
              />
              <Picker.Item
                label="Software Engineering"
                value="Software Engineering"
              />
              <Picker.Item label="Computer Science" value="Computer Science" />
            </Picker>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ap;
