import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "react-native-navigation";
import First from "./Screens/First";
import AfterSplash from "./Screens/AfterSplash";
import Splash from "./Screens/Splash";
const Stack = createNativeStackNavigator();
import Signin from "./Screens/Signin";
import SignUp from "./Screens/SignUp";
import NetworkRequest from "./Screens/NetworkRequest";
import ArryFilterandDelete from "./Screens/PraticeonComponnets/ArryFilterandDelete";
import PhoneNumberVarification from "./Screens/PhoneNumberVarification";
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* NetworkRequest Screen */}
        {/* <Stack.Screen name="NetworkRequest" component={NetworkRequest} /> */}
        {/* <Stack.Screen
          name="ArryFilterandDelete "
          component={ArryFilterandDelete}
        /> */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AfterSplash"
          component={AfterSplash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhoneNumberVarification"
          component={PhoneNumberVarification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
