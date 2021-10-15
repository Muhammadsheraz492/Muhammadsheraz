import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  Alert,
  Button,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Value } from "react-native-reanimated";
import * as Animatable from "react-native-animatable";
import SignUp from "./SignUp";
import { StatusBar } from "expo-status-bar";
import First from "./First";
const Signin = ({ navigation }) => {
  const [Data, SetData] = useState({
    email: " ",
    password: " ",
    check_TextInputChange: false,
    secureTextEntry: false,
  });
  const [Email, setEmail] = useState(" ");
  const [Password, setpassword] = useState(" ");
  const [isloading, setisloading] = useState(true);
  const [check, setcheck] = useState(false);
  useEffect(() => {});
  setTimeout(() => {
    setisloading(false);
  }, 3000);

  if (isloading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#009387" />
      </View>
    );
  }

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

  const Next = () => {
    if (Email === " ") {
      alert("Enter your Email");
    } else if (Password === " ") {
      alert("Enter your PassWord");
    } else {
      setcheck(true);
    }
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
          Welcome !
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
                onChangeText={setEmail}
                value={Email}
                // onChangeText={(val) => Textinputfromuser(val)}
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
            <FontAwesome name="user-o" size={20} color="black" />
            <View style={{ borderBottomWidth: 1, top: "-10%" }}>
              <TextInput
                style={{ left: "8%" }}
                placeholder="Enter your Password"
                onChangeText={setpassword}
                secureTextEntry={Data.secureTextEntry ? false : true}
              />
              <View style={{ flex: 1, alignItems: "flex-end", top: "-90%" }}>
                <Ionicons
                  name="md-eye-off-outline"
                  size={24}
                  color="black"
                  onPress={() => Secure()}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => Next()}>
              <View
                style={{
                  // top: "97%",
                  // top: 60,
                  marginTop: 60,
                  borderWidth: 2,

                  paddingVertical: 5,
                  borderColor: "#009387",
                  alignItems: "center",
                  borderRadius: 20,
                  backgroundColor: "#009387",
                  marginBottom: 2,
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Sign in</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  marginTop: 30,
                  borderWidth: 3,

                  paddingVertical: 6,
                  borderColor: "#009387",
                  alignItems: "center",
                  borderRadius: 25,
                  //     backgroundColor: "#009387",
                  // bottom: "50%",
                  //  marginBottom: "2%",
                }}
              >
                <Text style={{ color: "#009387", fontSize: 20 }}>Sign Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Signin;
