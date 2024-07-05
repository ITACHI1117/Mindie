import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Header() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <SafeAreaView style={{ backgroundColor: "#181818" }}>
      <View style={styles.headerContainer}>
        <ThemedText type="defaultSemiBold">Hello, Stephen 👋</ThemedText>
        <View>
          <View
            style={{
              backgroundColor: "#FFEC51",
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 5,
            }}
          >
            <ThemedText style={{ color: "black" }} type="defaultSemiBold2">
              App Streak ⚡ 104
            </ThemedText>
          </View>
        </View>
      </View>
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
});
