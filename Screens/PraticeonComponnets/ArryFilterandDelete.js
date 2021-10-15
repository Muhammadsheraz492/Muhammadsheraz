import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react/cjs/react.development";
const ArryFilterandDelete = () => {
  const [Data, setData] = useState([
    { id: 1, title: "First Index" },
    { id: 2, title: "Second Title" },
    { id: 3, title: "Third Index" },
  ]);
  // const Handel = useCallback(
  //   (id) => {
  //     const New = Data.filter((cv) => cv.id != id);
  //     setData(New);
  //     console.log(id);
  //   },
  //   [Data]
  // );
  const Remove = (id) => {
    setData(Data.filter((cv) => (cv.id != id ? id : null)));
  };

  return (
    <View>
      <Text>This Is Arry Screen</Text>

      <FlatList
        data={Data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Remove(item.id)}>
            <View style={{ alignItems: "center", padding: 10 }}>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ArryFilterandDelete;
