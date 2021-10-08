import React, { useState } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
// const DATA = [
//   {
//     id: 1,
//     title: "New South Wales",
//   },
//   {
//     id: 2,
//     title: "Northern Territory",
//   },
//   {
//     id: 3,
//     title: "Queensland",
//   },
//   {
//     id: 4,
//     title: "South Australia",
//   },
//   {
//     id: 5,
//     title: "Tasmania",
//   },
//   {
//     id: 6,
//     title: "Victoria",
//   },
//   {
//     id: 7,
//     title: "Western Australia",
//   },
// ];
const DATA = [
  {
    title: "New South Wales",
  },
  {
    title: "Northern Territory",
  },
  {
    title: "Queensland",
  },
  {
    title: "South Australia",
  },
  {
    title: "Tasmania",
  },
  {
    title: "Victoria",
  },
  {
    title: "Western Australia",
  },
];

const Arry = () => {
  const [State, setState] = useState("All");
  const setStatusFilter = (title) => {
    setState(title);
  };
  return (
    <View>
      {DATA.map((e) => (
        <View
          style={{
            marginBottom: 23,
            backgroundColor: State == e.title ? "red" : "cyan ",
          }}
        >
          <TouchableOpacity onPress={() => setStatusFilter(e.title)}>
            <Text>{e.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Arry;
