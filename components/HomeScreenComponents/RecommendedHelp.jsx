import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Touchable,
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
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function RecommendedHelp() {
  const colorScheme = useColorScheme();

  const DATA = [
    {
      id: "1",
      img: require("../../assets/images/Pic1.jpg"),
      title: "Overcoming Social Anxiety",
      time: "4 min read",
    },
    {
      id: "2",
      img: require("../../assets/images/pic2.jpg"),
      title: "Staying Confident",
      time: "2 min read",
    },
    {
      id: "3",
      img: require("../../assets/images/pic3.jpg"),
      title: "Generalized Mindfulness Training",
      time: "3 min read",
    },
  ];

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
        <ThemedText type="defaultSemiBold">Recommended Help</ThemedText>
        <FontAwesome name="angle-right" size={28} color="white" />
      </View>
      <View style={styles.container}>
        {DATA.map(({ id, img, title, time }) => (
          <Link
            key={id}
            href={{
              pathname: "/Read",
              params: { id: id, img: img, title: title, time: time },
            }}
            asChild
          >
            <TouchableOpacity
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
                source={img}
              ></Image>
              <View style={{ marginTop: 10 }}>
                <ThemedText
                  style={{ color: "white", paddingLeft: 5, fontSize: 10 }}
                  type="tiny"
                >
                  {title}
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
                  {"  "}
                  {time}
                </ThemedText>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
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
