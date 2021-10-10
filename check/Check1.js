import React from "react";
import { View, Text } from "react-native";
//import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "react-native-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { Icon } from "react-native-vector-icons/Icon";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import About from "./About";
const HomeScreen = createNativeStackNavigator();
const AboutScreen = createNativeStackNavigator();
const Tab = createDrawerNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeScreen.Navigator>
      <HomeScreen.Screen
        name="Home"
        component={Home}
        options={{
          title: "Main Screen",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#009387",
          },
          headerTintColor: "white",
          headerLeft: () => (
            //<Ionicons name="ios-menu" size={24} color="black" />
            <Ionicons.Button
              name="ios-menu"
              size={22}
              backgroundColor="#009387"
              color="white"
              onPress={() => navigation.openDrawer()}
            ></Ionicons.Button>
          ),
        }}
      />
      <HomeScreen.Screen name="About" component={About} />
    </HomeScreen.Navigator>
  );
};
const TabScreen = () => {
  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name="About" component={About} /> */}
    </Tab.Navigator>
  );
};

const First = () => {
  return (
    <Tab.Navigator initialRouteName={Home}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name="About" component={About} /> */}
    </Tab.Navigator>
  );
};
export default First;
