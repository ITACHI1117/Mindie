import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import Header from "../../components/HomeScreenComponents/Header";
import DailyAssessment from "../../components/HomeScreenComponents/DailyAssessment";
import Insights from "../../components/HomeScreenComponents/Insights";
import RecommendedHelp from "../../components/HomeScreenComponents/RecommendedHelp";
import Bookings from "../../components/HomeScreenComponents/Bookings";
import { useLocalSearchParams } from "expo-router";

export default function HomeScreen({ route }) {
  const colorScheme = useColorScheme();
  const { mood } = useLocalSearchParams();

  // const { paramName } = route.params;

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <SafeAreaView style={{ backgroundColor: "#181818" }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollIndicator={false}
        style={{ height: "100%", backgroundColor: "black" }}
      >
        {/* <View style={{ backgroundColor: "black" }}>
        <View style={{ marginTop: 10, backgroundColor: "#181818" }}>
          <ThemedText>DatePicker</ThemedText>
        </View>
      </View> */}
        <DailyAssessment data={mood} />
        <Insights />
        <RecommendedHelp />
        <Bookings />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 20,
    height: 50,
  },
  container: {
    width: "95%",
    backgroundColor: "#181818",
    height: 170,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  mooddBox: {
    width: 100,
    height: 40,
    backgroundColor: "#181818",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  mooddBox1: {
    width: 60,
    height: 40,
    backgroundColor: "#181818",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
