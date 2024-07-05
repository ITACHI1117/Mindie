import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View style={styles.headerContainer}>
      <AntDesign name="left" size={20} color="white" />
      <ThemedText style={{ fontSize: 20 }} type="defaultSemiBold">
        {"  "}
        Daily Assessment
      </ThemedText>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 20,
    height: 50,
  },
});
