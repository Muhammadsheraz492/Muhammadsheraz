import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  zIndex,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import style from "../style/style";
import Outline from "../KickAssSvg/outline_button.svg";
const Job = [
  { id: 1, title: "Full Time" },
  { id: 2, title: "Part Time" },
  { id: 3, title: "Freelance" },
  { id: 4, title: "Remote/Contract" },
  { id: 5, title: "Internship" },
  { id: 6, title: "Fresher" },
];
const Item = ({ id, title, selected, onSelect }) => {
  return (
    <View>
      <View style={{ left: "10%" }}>
        <TouchableOpacity onPress={() => onSelect(id)}>
          <Outline fill={selected ? "#d2a7ae" : null} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          //alignSelf: "center",
          top: "20%",
          left: "28%",
        }}
      >
        <TouchableOpacity onPress={() => onSelect(id)}>
          <Text
            style={{
              fontSize: 10,
              color: selected ? "white" : "black",
              zIndex: 100,
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Jobtype = () => {
  const [selected, setSelected] = useState(new Map());

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]
  );
  return (
    <SafeAreaView style={{ left: "5.5%" }}>
      <Text style={{ color: "#d2a7ae", left: "2%" }}> Job Type</Text>
      <FlatList
        numColumns={3}
        data={Job}
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

export default Jobtype;
