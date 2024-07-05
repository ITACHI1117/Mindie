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
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function DailyAssessment() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View style={{ paddingTop: 20, backgroundColor: "black", paddingLeft: 20 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <ThemedText type="defaultSemiBold">Insights</ThemedText>
        <FontAwesome name="angle-right" size={28} color="white" />
      </View>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#131313",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            height: 40,
            width: "70%",
            paddingLeft: 10,
            border: 8,
          }}
        >
          <ThemedText>Based on recent assessments</ThemedText>
        </View>
        <View
          style={{
            marginTop: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 15 }}>
            <ThemedText type="defaultSemiBold" style={{ width: 230 }}>
              It seems like you’re worrying a lot these days
            </ThemedText>
            <View
              style={{
                display: "flex",
                marginTop: 15,
                flexDirection: "row",
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Ionicons name="book-outline" size={16} color="#8A8A8E" />
              <ThemedText type="tiny"> 2 min read 26, May</ThemedText>
            </View>
          </View>

          <Image source={require("../../assets/images/bro.png")}></Image>
        </View>
      </View>
    </View>
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
