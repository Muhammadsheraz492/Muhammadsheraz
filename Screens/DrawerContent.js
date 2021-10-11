import React, { useState } from "react";
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
  TouchableRipple,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Switch } from "react-native-gesture-handler";
import { Navigation } from "react-native-navigation";
import Home from "./Home";
import Profile from "./Profile";
import Bookmarks from "./Bookmarks";
const DrawerContent = (props) => {
  const [isDark, setDark] = useState(false);
  const togoogel = () => {
    setDark(!isDark);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={{ left: "5%" }}>
            <View style={{ flexDirection: "row", top: "5%" }}>
              <Avatar.Image
                source={{
                  uri: "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.6435-9/119168178_790408478417016_779506481472359204_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGecmVNNce5I7ytGw5mVV80nqNy0tpeLrOeo3LS2l4us_fFVWa76928iVs32bG15jU4UcUXCY7xjHLIGLOAOmjS&_nc_ohc=7iPUHaYgk0kAX9aC8SS&_nc_ht=scontent.flhe2-1.fna&oh=eb5a2cc0e41c2576be90c32fda9d8556&oe=6189D263",
                }}
                // size={50}
              />
              <View style={{ left: "5%" }}>
                <Title>Muhammad sheraz</Title>
                <Caption>@sheraz492</Caption>
              </View>
            </View>
            <View style={{ marginTop: 30, flexDirection: "row" }}>
              <Paragraph style={{ fontWeight: "bold" }}>80</Paragraph>
              <View style={{ left: "20%" }}>
                <Caption style={{ fontWeight: "bold" }}>Following</Caption>
              </View>
              <View style={{ left: "70%" }}>
                <Paragraph style={{ fontWeight: "bold" }}>110</Paragraph>
              </View>
              <View style={{ left: "90%" }}>
                <Caption style={{ fontWeight: "bold" }}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              label="Home"
              icon={({}) => (
                <Ionicons
                  name="ios-home"
                  size={22}
                  color={isDark ? "black" : "gray"}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              label="Profile"
              icon={({}) => (
                <MaterialCommunityIcons
                  name="face-profile"
                  size={24}
                  color={isDark ? "black" : "gray"}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
          </Drawer.Section>

          <Drawer.Section>
            <DrawerItem
              label="Bookmarks"
              icon={({}) => (
                <FontAwesome
                  name="bookmark"
                  size={24}
                  color={isDark ? "black" : "gray"}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Bookmarks");
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Settings"
              icon={({}) => (
                <MaterialIcons
                  name="settings"
                  size={24}
                  color={isDark ? "black" : "gray"}
                />
              )}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Support"
              icon={({}) => (
                <MaterialIcons
                  name="support-agent"
                  size={24}
                  color={isDark ? "black" : "gray"}
                />
              )}
            />
          </Drawer.Section>
          <Drawer.Section title="Preference">
            <TouchableRipple onPress={() => togoogel()}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ left: "45%" }}>
                  <Text>Dark Thems</Text>
                </View>
                <View style={{ left: "600%" }} pointerEvents="none">
                  <Switch value={isDark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
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
