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
import { Fontisto } from "@expo/vector-icons";

export default function DailyAssessment({ data }) {
  const colorScheme = useColorScheme();
  console.log(data);

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View style={{ paddingTop: 20, backgroundColor: "black", paddingLeft: 20 }}>
      <ThemedText type="defaultSemiBold">Daily Assessment</ThemedText>
      {data ? (
        <View style={styles.container2}>
          <View
            style={{
              backgroundColor: "#27786D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderRadius: 8,
            }}
          >
            <Link href="/DailyAssessmentPage" asChild>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Fontisto name="bell" size={18} color="white" />
                <ThemedText> Remind me</ThemedText>
              </TouchableOpacity>
            </Link>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ThemedText type="defaultSemiBold" style={{ width: 160 }}>
              All done for now 🎉
              <ThemedText style={{ fontSize: 15 }}>
                new questions will be available by 2pm
              </ThemedText>
            </ThemedText>
            <Image source={require("../../assets/images/Vector1.png")}></Image>
            <Image
              style={{ position: "absolute", right: 20 }}
              source={require("../../assets/images/cuate3.png")}
            ></Image>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "#131313",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
            }}
          >
            <Link href="/DailyAssessmentPage" asChild>
              <TouchableOpacity>
                <ThemedText>+ Add mood</ThemedText>
              </TouchableOpacity>
            </Link>
          </View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ThemedText type="defaultSemiBold" style={{ width: 160 }}>
              Let us know how you feel currently 🤗
            </ThemedText>
            <Image source={require("../../assets/images/Vector1.png")}></Image>
            <Image
              style={{ position: "absolute", right: 20 }}
              source={require("../../assets/images/cuate.png")}
            ></Image>
          </View>
        </View>
      )}

      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <View style={data ? styles.mooddBox2 : styles.mooddBox}>
          <ThemedText type="default">{data ? data : "Mood 1"}</ThemedText>
          {data ? (
            <ThemedText style={{ fontSize: 10 }} type="tiny">
              Added 12:00am
            </ThemedText>
          ) : (
            ""
          )}
        </View>
        <View style={styles.mooddBox}>
          <ThemedText type="default">Mood 2</ThemedText>
        </View>
        <View style={styles.mooddBox}>
          <ThemedText type="default">Mood 3</ThemedText>
        </View>
        <View style={styles.mooddBox1}>
          <ThemedText style={{ color: "#FFEC51" }} type="default">
            ⚡ 56
          </ThemedText>
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
    height: 160,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  container2: {
    width: "95%",
    backgroundColor: "#55A59A",
    height: 160,
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
  mooddBox2: {
    width: 100,
    height: 60,
    paddingLeft: 10,
    backgroundColor: "#181818",
    display: "flex",
    alignItems: "flex-start",
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
