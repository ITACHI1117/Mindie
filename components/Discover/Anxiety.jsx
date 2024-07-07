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

export default function Mindfulness() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View style={{ paddingTop: 10, paddingLeft: 5, marginBottom: 150 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <ThemedText type="defaultSemiBold">Anxiety</ThemedText>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThemedText type="defaultSemiBold">4 courses {"  "}</ThemedText>
          <FontAwesome name="angle-right" size={28} color="white" />
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#181818",
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
            height: 151,
            width: "30%",
            paddingLeft: 0,
            borderRadius: 8,
          }}
        >
          <Image
            style={{ width: "100%", height: "50%", objectFit: "cover" }}
            source={require("../../assets/images/panic.jpg")}
          ></Image>
          <View style={{ marginTop: 10, width: "95%" }}>
            <ThemedText
              style={{ color: "white", paddingLeft: 5, fontSize: 10 }}
              type="tiny"
            >
              Overcoming worry and fear
            </ThemedText>
          </View>
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
              flexDirection: "row",
              marginLeft: 5,
              width: "70%",
              height: 15,
              marginTop: 10,
              borderRadius: 8,
              paddingLeft: 5,
              bottom: 15,
            }}
          >
            <Ionicons name="book-outline" size={10} color="#8A8A8E" />
            <ThemedText style={{ fontSize: 10 }} type="tiny">
              {"  "}2 min read
            </ThemedText>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#181818",
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
            height: 151,
            width: "30%",
            paddingLeft: 0,
            borderRadius: 8,
          }}
        >
          <Image
            style={{ width: "100%", height: "50%" }}
            source={require("../../assets/images/manChair.jpg")}
          ></Image>
          <View style={{ marginTop: 10 }}>
            <ThemedText
              style={{ color: "white", paddingLeft: 5, fontSize: 12 }}
              type="tiny"
            >
              Breaking free from overthinking
            </ThemedText>
          </View>
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
              flexDirection: "row",
              marginLeft: 5,
              width: "70%",
              height: 15,
              marginTop: 10,
              borderRadius: 8,
              paddingLeft: 5,
              bottom: 15,
            }}
          >
            <Ionicons name="book-outline" size={10} color="#8A8A8E" />
            <ThemedText style={{ fontSize: 10 }} type="tiny">
              {"  "}3 min read
            </ThemedText>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#181818",
            display: "flex",
            alignItems: "flex-start",
            overflow: "hidden",
            height: 151,
            width: "30%",
            paddingLeft: 0,
            borderRadius: 8,
          }}
        >
          <Image
            style={{ width: "100%", height: "50%" }}
            source={require("../../assets/images/dull.jpg")}
          ></Image>
          <View style={{ marginTop: 10 }}>
            <ThemedText
              style={{ color: "white", paddingLeft: 5, fontSize: 10 }}
              type="tiny"
            >
              Developing a positive mindset
            </ThemedText>
          </View>
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
              flexDirection: "row",
              marginLeft: 5,
              width: "70%",
              height: 15,
              marginTop: 10,
              borderRadius: 8,
              paddingLeft: 5,
              bottom: 15,
            }}
          >
            <Ionicons name="book-outline" size={10} color="#8A8A8E" />
            <ThemedText style={{ fontSize: 10 }} type="tiny">
              {"  "}5 min read
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 20,
    height: 50,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 170,
    borderRadius: 10,
    justifyContent: "space-between",
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
