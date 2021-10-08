import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
const NetworkRequest = () => {
  const [Data, setData] = useState(null);
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    if (resp.ok) {
      alert("Welcome");

      setData(data);
    } else {
      alert("please wait");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const Item = ({ title, description, index }) => (
    <View
      style={{ flex: 1, height: "6%", width: "100%", alignItems: "center" }}
    >
      <View style={{ backgroundColor: "cyan" }}>
        <Text style={{ color: "white" }}>
          {index} . {title}
        </Text>
      </View>
      <Text>{description}</Text>
    </View>
  );
  const renderItem = ({ item, index }) => (
    <Item title={item.title} description={item.description} index={index} />
  );
  return (
    <View>
      <FlatList data={Data} renderItem={renderItem} />
    </View>
  );
};
export default NetworkRequest;
