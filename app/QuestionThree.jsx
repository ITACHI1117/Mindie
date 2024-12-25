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

export default function QuestionThree() {
  const colorScheme = useColorScheme();
  const [sliderValue, setSliderValue] = useState(0);

  const color = useThemeColor({ light: "black", dark: "white" }, "text");

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <Link href="/QuestionTwo" asChild>
        <TouchableOpacity>
          <Header />
        </TouchableOpacity>
      </Link>
      <View style={styles.headerContainer}>
        <View style={styles.questionContainer}>
          <ThemedText style={{ fontSize: 15 }} type="tiny">
            Question 3/6
          </ThemedText>
        </View>
        <ThemedText
          style={{ fontSize: 23, marginTop: 30 }}
          type="defaultSemiBold"
        >
          Have you been finding it difficult lately to make decisions?
        </ThemedText>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: "13%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          alignItems: "center",
          // marginTop: "140%",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Link href="/QuestionFour" asChild>
          <TouchableOpacity style={styles.optionButtons}>
            <ThemedText>No</ThemedText>
          </TouchableOpacity>
        </Link>
        <Link href="/QuestionFour" asChild>
          <TouchableOpacity style={styles.optionButtons}>
            <ThemedText>Yes</ThemedText>
          </TouchableOpacity>
        </Link>
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
});
