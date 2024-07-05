import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
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
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View style={styles.headerContainer}>
      <ThemedText style={{ fontSize: 20 }} type="defaultSemiBold">
        Chat support
      </ThemedText>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: 60,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Feather name="plus-square" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
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
    borderBottomColor: "white",
  },
});
