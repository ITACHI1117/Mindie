import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/DailyAssessmentComponents/Header";
import Slider from "@react-native-community/slider";

export default function QuestionSix() {
  const colorScheme = useColorScheme();

  const [selectedItems, setSelectedItems] = useState([]);

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  const items = [
    "😔 Moderate",
    "😥 Very Sad",
    "🙂 Good",
    "😁 Extremely good",
    "😞Sad",
  ];
  const handleSelectItem = (item) => {
    // Check if item is already selected
    if (selectedItems.includes(item)) {
      // If item is already selected, remove it from the selected items
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If item is not selected and less than 3 items are selected, add it to selected items
      if (selectedItems.length < 8) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  const renderItem = ({ item }) => (
    <Link
      href={{ pathname: "/HomeScreen", params: { mood: item } }}
      asChild
      style={[
        styles.item,
        selectedItems.includes(item)
          ? styles.selectedItem
          : styles.unselectedItem,
      ]}
    >
      <TouchableOpacity onPress={() => handleSelectItem(item)}>
        <Text
          style={{
            color: selectedItems.includes(item) ? "black" : "white",
            fontSize: 20,
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <Link href="/QuestionFour" asChild>
        <TouchableOpacity>
          <Header />
        </TouchableOpacity>
      </Link>
      <View style={styles.headerContainer}>
        <View style={styles.questionContainer}>
          <ThemedText style={{ fontSize: 15 }} type="tiny">
            Question 6/6
          </ThemedText>
        </View>
        <ThemedText
          style={{ fontSize: 23, marginTop: 30 }}
          type="defaultSemiBold"
        >
          How do you feel in this moment?
        </ThemedText>
        <View
          style={{
            width: "95%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "5%",
            justifyContent: "space-between",
          }}
        >
          <View>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              columnWrapperStyle={styles.row}
              contentContainerStyle={styles.grid}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "25%",
            marginLeft: -10,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#181818",
    display: "flex",
    width: "100%",
    // justifyContent: "space-between",
    marginTop: 10,
    height: "100%",
    marginLeft: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: 20,
  },
  questionContainer: {
    backgroundColor: "#131313",
    marginTop: 20,
    width: 120,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  container: {
    marginTop: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  optionButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 50,
    backgroundColor: "#131313",
    borderRadius: 8,
  },
  item: {
    // width: 100,
    padding: 10,

    margin: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  selectedItem: {
    // backgroundColor: "#FFEC51",
  },
  unselectedItem: {
    // backgroundColor: "#131313",
    // color: "white",
  },
});
