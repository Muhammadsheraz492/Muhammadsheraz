import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Octicons } from "@expo/vector-icons";
import {
  Avatar,
  Text,
  Caption,
  Title,
  Drawer,
  Paragraph,
} from "react-native-paper";
const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={{ left: "5%" }}></View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        {/* style={{ borderTopColor: "red", borderTopWidth: 5 }} */}
        <DrawerItem
          icon={({ color }) => (
            <Octicons name="sign-out" size={24} color={color} />
          )}
          label="Sign Out"
          onPress={() => alert("This is Sign Out Button")}
        />
      </Drawer.Section>
    </View>
  );
};
export default DrawerContent;
