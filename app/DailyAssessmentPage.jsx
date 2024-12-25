import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

import DailyAssessment from "../components/HomeScreenComponents/DailyAssessment";
import Insights from "../components/HomeScreenComponents/Insights";
import RecommendedHelp from "../components/HomeScreenComponents/RecommendedHelp";
import Bookings from "../components/HomeScreenComponents/Bookings";
import Header from "../components/DailyAssessmentComponents/Header";
import QuestionOne from "../components/DailyAssessmentComponents/QuestionOne";

export default function DailyAssessmentPage() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <Link href="\HomeScreen" asChild>
        <TouchableOpacity>
          <Header />
        </TouchableOpacity>
      </Link>
      <QuestionOne />
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
