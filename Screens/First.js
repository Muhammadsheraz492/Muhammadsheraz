import React from "react";
import { View, Text } from "react-native";
//import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "react-native-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import About from "./About";
import { color } from "react-native-reanimated";
import DrawerContent from "./DrawerContent";
const HomeScreen = createNativeStackNavigator();
const AboutScreen = createNativeStackNavigator();
const Tab = createDrawerNavigator();
const Bottomtab = createBottomTabNavigator();
const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeScreen.Navigator>
      <HomeScreen.Screen
        name="Home"
        component={Home}
        options={{
          //  title: "Main Screen",
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
      <HomeScreen.Screen
        name="About"
        component={About}
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#d02860",
          },
          headerTitleAlign: "center",
        }}
      />
    </HomeScreen.Navigator>
  );
};
const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Tab.Screen
        name="Hom"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen name="About" component={About} /> */}
    </Tab.Navigator>
  );
};

const First = () => {
  return (
    <Bottomtab.Navigator>
      <Bottomtab.Screen
        name="TabScreen"
        component={TabScreen}
        options={{
          //headerTintColor: "white",
          title: "Home",
          //  headerTintColor: "white",
          //  headerTintColor: "white",
          headerShown: false,
          tabBarBadgeStyle: {
            color: "white",
          },

          tabBarStyle: {
            backgroundColor: "#009387",
            color: "white",
          },

          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={22} color={"white"} />
          ),
        }}
      />
      <Bottomtab.Screen
        name="About"
        component={About}
        options={{
          //title: "About",
          //headerShown: false,

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="system-update" size={24} color="white" />
          ),

          headerStyle: {
            backgroundColor: "#d02860",
          },
          tabBarStyle: {
            backgroundColor: "#d02860",
          },
          tabBarBadgeStyle: {
            color: "white",
            backgroundColor: "white",
          },
          headerTitleAlign: "center",
        }}
      />
    </Bottomtab.Navigator>
  );
};
export default First;
