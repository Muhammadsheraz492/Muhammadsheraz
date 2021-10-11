import React, { useState } from "react";
import { View, Text, Platform, Alert, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Value } from "react-native-reanimated";
import * as Animatable from "react-native-animatable";
import SignUp from "./SignUp";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "react-native-navigation";
import First from "../Screens/First";
const Signin = ({ navigation }) => {
  const [Data, SetData] = useState({
    email: " ",
    password: " ",
    check_TextInputChange: false,
    secureTextEntry: false,
  });
  const Textinputfromuser = (val) => {
    if (val.length != 0) {
      SetData({
        ...Data,
        email: val,
        check_TextInputChange: true,
      });
    } else {
      SetData({
        ...Data,
        email: val,
        check_TextInputChange: false,
      });
    }
  };

  const Secure = () => {
    SetData({
      ...Data,
      secureTextEntry: !Data.secureTextEntry,
    });
  };

  return (
    <View
      style={{
        flex: 1.5,
        backgroundColor: "#008387",
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor="white" />

      <View
        style={{
          flex: 1,
          backgroundColor: "#008387",
          justifyContent: "space-around",
        }}
      >
        <Text
          style={{
            color: "white",

            top: "10%",
            left: "5%",
            fontSize: 40,
            fontFamily: "normal",
          }}
        >
          Registration
        </Text>
      </View>

      <View
        style={{
          flex: 2.5,
          backgroundColor: "#fff",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          // justifyContent: "flex-start",
        }}
      >
        <View style={{ top: "5%", left: "10%" }}>
          <View style={{ left: "1%" }}>
            <Text>Email</Text>
          </View>
          <View style={{ width: "80%" }}>
            <FontAwesome
              style={{ top: "25%" }}
              name="user-o"
              size={20}
              color="black"
            />
            <View style={{ borderBottomWidth: 1, top: "-20%" }}>
              <TextInput
                style={{ left: "8%" }}
                placeholder="Enter your Email"
                onChangeText={(val) => Textinputfromuser(val)}
              />
              {Data.check_TextInputChange ? (
                <Animatable.View animation="bounceIn">
                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      top: "-13%",
                    }}
                  >
                    <AntDesign name="checkcircle" size={17} color="green" />
                  </View>
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </View>
        <View style={{ top: "9%", left: "10%" }}>
          <View style={{ left: "1%" }}>
            <Text>Password</Text>
          </View>
          <View style={{ width: "80%" }}>
            <MaterialIcons
              style={{ top: "3%" }}
              name="vpn-key"
              size={24}
              color="black"
            />
            <View style={{ borderBottomWidth: 1, top: "-10%" }}>
              <TextInput
                style={{ textAlign: "center" }}
                placeholder="Enter your Password"
                secureTextEntry={Data.secureTextEntry ? false : true}
              />
              {Data.secureTextEntry ? (
                <View style={{ flex: 1, alignItems: "flex-end", top: "-90%" }}>
                  <Ionicons
                    name="md-eye"
                    size={24}
                    color="black"
                    onPress={() => Secure()}
                  />
                </View>
              ) : (
                <View style={{ flex: 1, alignItems: "flex-end", top: "-90%" }}>
                  <Ionicons
                    name="md-eye-off-outline"
                    size={24}
                    color="black"
                    onPress={() => Secure()}
                  />
                </View>
              )}
            </View>
            {/* Confirm Password */}
            <View style={{ top: "7%" }}>
              <View>
                <Text>Confirm Password</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  style={{ top: "3%" }}
                  name="vpn-key"
                  size={24}
                  color="black"
                />
              </View>
              <View style={{ top: "-23%", borderBottomWidth: 1 }}>
                <TextInput
                  style={{ textAlign: "center" }}
                  placeholder="Confirm You'r password"
                />
                {Data.secureTextEntry ? (
                  <View
                    style={{ flex: 1, alignItems: "flex-end", top: "-90%" }}
                  >
                    <Ionicons
                      name="md-eye"
                      size={24}
                      color="black"
                      onPress={() => Secure()}
                    />
                  </View>
                ) : (
                  <View
                    style={{ flex: 1, alignItems: "flex-end", top: "-90%" }}
                  >
                    <Ionicons
                      name="md-eye-off-outline"
                      size={24}
                      color="black"
                      onPress={() => Secure()}
                    />
                  </View>
                )}
              </View>
            </View>
            <View
              style={{
                top: "70%",
                borderWidth: 2,

                paddingVertical: 5,
                borderColor: "#009387",
                alignItems: "center",
                borderRadius: 20,
                backgroundColor: "#009387",
              }}
            >
              <TouchableOpacity>
                <Text style={{ color: "white", fontSize: 20 }}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                top: "10%",
                borderWidth: 2,

                paddingVertical: 5,
                borderColor: "#009387",
                alignItems: "center",
                borderRadius: 20,
                // backgroundColor: "#009387",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("First")}>
                <Text style={{ color: "#009387", fontSize: 20 }}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Signin;
