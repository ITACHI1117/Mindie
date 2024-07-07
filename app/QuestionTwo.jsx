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

export default function QuestionTwo() {
  const colorScheme = useColorScheme();
  const [sliderValue, setSliderValue] = useState(0);

  const color = useThemeColor({ light: "black", dark: "white" }, "text");

  return (
    <SafeAreaView style={{ backgroundColor: "transparent" }}>
      <Link href="/DailyAssessmentPage" asChild>
        <TouchableOpacity>
          <Header />
        </TouchableOpacity>
      </Link>
      <View style={styles.headerContainer}>
        <View style={styles.questionContainer}>
          <ThemedText style={{ fontSize: 15 }} type="tiny">
            Question 2/6
          </ThemedText>
        </View>
        <View style={styles.container}>
          <Image source={require("../assets/images/Vector2.png")}></Image>
          <Image
            style={{ position: "absolute" }}
            source={require("../assets/images/cuate2.png")}
          ></Image>
        </View>
        <ThemedText
          style={{ fontSize: 20, marginTop: 30 }}
          type="defaultSemiBold"
        >
          On a scale of 1 to 10 how would you rate your overall mood?
        </ThemedText>
        <View
          style={{
            width: "95%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "65%",

            // justifyContent: "space-between",
          }}
        >
          <Slider
            style={{ width: "95%", height: 40 }}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#FFEC51"
            maximumTrackTintColor="#34321B"
            value={sliderValue}
            step={1}
            onValueChange={(value) => {
              setSliderValue(value);
            }}
            thumbTintColor="#FFEC51"
          />
          <View
            style={{
              marginLeft: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#131313",
              height: 20,
              width: 20,
            }}
          >
            <TouchableOpacity>
              <ThemedText style={{ color: "white" }}>{sliderValue}</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        <Link href="/QuestionThree" asChild>
          <TouchableOpacity
            style={{
              width: "95%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              backgroundColor: "#FFEC51",
              borderRadius: 8,
              marginTop: 15,
            }}
          >
            <ThemedText style={{ color: "black" }}>Continue</ThemedText>
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
  item: {
    padding: 15,
    width: "90%",
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: "white",
  },
});
