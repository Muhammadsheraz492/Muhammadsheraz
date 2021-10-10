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
import style from "../style/style";

import Outline from "../KickAssSvg/outline_button.svg";

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
  const [data, setdata] = useState([]);
  return (
    <View>
      <View
        style={{
          left: "8%",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={() => onSelect(id, title, index)}>
          <Outline fill={selected ? "#d2a7ae" : null} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",

          top: "20%",
          left: "20%",
        }}
      >
        <TouchableOpacity onPress={() => onSelect(id, title, index)}>
          <Text style={{ fontSize: 10, color: selected ? "white" : "black" }}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Region = () => {
  const [selected, setSelected] = React.useState(new Map());
  const [data, setdata] = useState([]);

  const unselect = (id) => {
    data = data.filter(function (item) {
      return item != "South Australia";
    });
  };

  const onSelect = React.useCallback(
    (id, title) => {
      const arry = new Map(selected);
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      if (selected.get(id)) {
        unselect(id);
      } else {
        setdata(data + title);
      }

      setSelected(newSelected);
    },
    [selected]
  );
  return (
    <SafeAreaView style={{ left: "5.5%" }}>
      <View>
        <Text style={{ color: "#d2a7ae", left: "2%" }}>Region</Text>
      </View>
      <FlatList
        numColumns={3}
        data={DATA}
        renderItem={({ item, index }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
            index={index}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selected}
      />
      <Text>{data}</Text>
    </SafeAreaView>
  );
};

export default Region;
