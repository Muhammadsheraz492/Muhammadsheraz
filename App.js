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
import { SvgCss, Svg, Circle } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import FilledButton from "./KickAssSvg/filledbutton";

import Outline from "./KickAssSvg/outline_button";
import style from "./style/style";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DATA = [
  {
    id: 1,
    title: "New South Wales",
  },
  {
    id: 2,
    title: "Northern Territory",
  },
  {
    id: 3,
    title: "Queensland",
  },
  {
    id: 4,
    title: "South Australia",
  },
  {
    id: 5,
    title: "Tasmania",
  },
  {
    id: 6,
    title: "Victoria",
  },
  {
    id: 7,
    title: "Western Australia",
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <View>
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => onSelect(id)}>
          <Outline fill={selected ? "#d2a7ae" : null} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => onSelect(id)}>
          <Text style={{ fontSize: 10, color: selected ? "white" : "black" }}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const App = () => {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );
  return (
    <SafeAreaView>
      <View style={{ margin: 25, marginLeft: 10 }}>
        <Text style={{ color: "#d2a7ae" }}>Region</Text>
      </View>
      <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
};

export default App;
