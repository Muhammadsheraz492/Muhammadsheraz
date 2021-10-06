import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ColorStyles from "../../Color.Styles";
import { Picker } from "@react-native-picker/picker";
import TextInputComponent from "../../KickAssComponents/TextInputComponent";
const DataList = [
  { Name: "Remote", key: "0" },
  { Name: "Office Based", key: "1" },
  { Name: "Contract", key: "2" },
  { Name: "Permanent", key: "3" },
  { Name: "Full Time", key: "4" },
  { Name: "Part Time", key: "5" },
  { Name: "Internship", key: "6" },
  { Name: "Commission", key: "7" },
];
const JobPosting = () => {
  const [click, setClick] = useState(false);
  const [array, setArray] = useState([]);
  const [newindex, setnewIndex] = useState(null);
  const [selectedPicker, setselectedPicker] = useState();
  const [secondPicker, setsecondPicker] = useState();
  const [thirdPicker, setthirdPicker] = useState();
  return (
    <SafeAreaView>
      <ScrollView style={{ height: hp("100%") }}>
        <View style={{ width: wp("100%"), height: hp("100%"), top: "13%" }}>
          <View style={{ flexDirection: "row" }}>
            <TextInputComponent
              width={wp("32.5%")}
              desc="Job Title"
              placeholder="Sale Manager"
              left="10%"
            />
            <TextInputComponent
              maxlength={4}
              width={wp("35%")}
              desc="Due Date"
              placeholder="16-04-2021"
              left="10%"
            />
          </View>
          <View
            style={{ top: "-10%", height: hp("25%"), flexDirection: "row" }}
          >
            <TextInputComponent
              width={wp("35%")}
              placeholder="$8.00 / Year"
              desc="Salary"
              left="5%"
            />
            <TextInputComponent
              maxlength={4}
              width={wp("35%")}
              desc="Experiece (Years)"
              placeholder="02"
              left="10%"
            />
          </View>
          <View
            style={{ top: "-35%", height: hp("25%"), flexDirection: "row" }}
          >
            <TextInputComponent
              width={wp("35%")}
              placeholder="02"
              desc="Positions"
              left="5%"
            />
            <TextInputComponent
              maxlength={4}
              width={wp("35%")}
              desc="Location based"
              placeholder="Australia"
              left="10%"
            />
          </View>
          <View style={{ position: "absolute", top: "33%" }}>
            <TextInputComponent
              width={wp("90%")}
              placeholder="MBA or equivalent degree program"
              desc="Eligibility Criteria"
              left="5%"
            />
          </View>
          <View style={{ top: "-15%", left: "5%", opacity: 0.3 }}>
            <Text> Industry </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: "45%",
              width: "90%",
              justifyContent: "center",
              borderBottomWidth: 0.5,
              borderColor: "#BDC3C7",
              height: "5%",
              left: "3.5%",
            }}
          >
            <Picker
              mode={"dropdown"}
              selectedValue={selectedPicker}
              onValueChange={(itemValue, itemIndex) =>
                setselectedPicker(itemValue)
              }
            >
              <Picker.Item
                label="Information Technology"
                value="Information Technology"
              />
              <Picker.Item label="Industry" value="Industry" />
            </Picker>
          </View>
          <View style={{ top: "-7.5%", left: "5%", opacity: 0.3 }}>
            <Text> Region </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: "55%",
              width: "45%",
              justifyContent: "center",
              borderBottomWidth: 0.5,
              borderColor: "#BDC3C7",
              height: "5%",
              left: "3.5%",
            }}
          >
            <Picker
              mode={"dropdown"}
              selectedValue={secondPicker}
              onValueChange={(itemValue, itemIndex) =>
                setsecondPicker(itemValue)
              }
            >
              <Picker.Item label="Queensland" value="Queensland" />
            </Picker>
          </View>
          <View style={{ top: "-10%", left: "55%", opacity: 0.3 }}>
            <Text> Country </Text>
          </View>
          <View
            style={{
              top: "-10.5%",
              width: "40%",
              justifyContent: "center",
              borderBottomWidth: 0.5,
              borderColor: "#BDC3C7",
              height: "5%",
              left: "55%",
            }}
          >
            <Picker
              mode={"dropdown"}
              selectedValue={thirdPicker}
              onValueChange={(itemValue, itemIndex) =>
                setthirdPicker(itemValue)
              }
            >
              <Picker.Item label="Australia" value="Australia" />
              <Picker.Item label="Pakistan" value="Pakistan" />
              <Picker.Item label="Brazil" value="Brazil" />
              <Picker.Item label="Argentina" value="Argentina" />
            </Picker>
          </View>
          <View style={{ position: "absolute", top: "63%" }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default JobPosting;
