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
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function OtherBookings() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View
      style={{
        marginTop: 20,
        paddingLeft: 0,
        marginBottom: 320,
      }}
    >
      <ThemedText type="defaultSemiBold">Other</ThemedText>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#181818",
            width: "100%",
            height: 110,
            borderRadius: 8,
            display: "flex",
            alignItems: "flex-start",
            padding: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View>
              <Image
                style={{ width: 40, height: 40, borderRadius: 100 }}
                source={require("../../assets/images/becky.jpg")}
              ></Image>
            </View>
            <View style={{ paddingLeft: 10 }}>
              <ThemedText style={{ fontSize: 16 }} type="defaultSemiBold">
                Becky Jrue
              </ThemedText>
              <ThemedText type="tiny">Substance Abuse Counselor</ThemedText>
            </View>
            <Link href="/HomeScreen" asChild>
              <TouchableOpacity style={styles.LoginButton}>
                <ThemedText
                  style={{ color: "black", fontSize: 14 }}
                  type="button"
                >
                  Book meeting
                </ThemedText>
              </TouchableOpacity>
            </Link>
          </View>
          <View
            style={{
              marginTop: 15,
              diplay: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <ThemedText type="tiny">Lagos, Nigeria </ThemedText>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="briefcase-clock"
              size={15}
              color="#97D8B2"
            />
            <ThemedText type="tiny"> Availability:</ThemedText>
            <ThemedText type="tiny" style={{ color: "white", fontSize: 13 }}>
              {" "}
              Open to hire{" "}
            </ThemedText>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#181818",
            width: "100%",
            height: 110,
            borderRadius: 8,
            display: "flex",
            alignItems: "flex-start",
            padding: 15,
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Image
              style={{ width: 40, height: 40, borderRadius: 100 }}
              source={require("../../assets/images/wite.jpg")}
            ></Image>
            <View style={{ paddingLeft: 10 }}>
              <ThemedText style={{ fontSize: 16 }} type="defaultSemiBold">
                George Kirk
              </ThemedText>
              <ThemedText style={{ fontSize: 12 }} type="tiny">
                Marriage and Family Therapists
              </ThemedText>
            </View>
            <Link href="/HomeScreen" asChild>
              <TouchableOpacity style={styles.LoginButton}>
                <ThemedText
                  style={{ color: "black", fontSize: 14 }}
                  type="button"
                >
                  Book meeting
                </ThemedText>
              </TouchableOpacity>
            </Link>
          </View>
          <View
            style={{
              marginTop: 15,
              diplay: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <ThemedText type="tiny">London, UK </ThemedText>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="briefcase-clock"
              size={15}
              color="#97D8B2"
            />
            <ThemedText type="tiny"> Availability:</ThemedText>
            <ThemedText type="tiny" style={{ color: "white", fontSize: 13 }}>
              {" "}
              Next few weeks{" "}
            </ThemedText>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#181818",
            width: "100%",
            height: 110,
            borderRadius: 8,
            display: "flex",
            alignItems: "flex-start",
            padding: 15,
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Image
              style={{ width: 40, height: 40, borderRadius: 100 }}
              source={require("../../assets/images/henry.jpg")}
            ></Image>
            <View style={{ paddingLeft: 10 }}>
              <ThemedText style={{ fontSize: 16 }} type="defaultSemiBold">
                Henry Stuart
              </ThemedText>
              <ThemedText type="tiny">AMindfulness Coach</ThemedText>
            </View>
            <Link href="/HomeScreen" asChild>
              <TouchableOpacity style={styles.LoginButton}>
                <ThemedText
                  style={{ color: "black", fontSize: 14 }}
                  type="button"
                >
                  Book meeting
                </ThemedText>
              </TouchableOpacity>
            </Link>
          </View>
          <View
            style={{
              marginTop: 15,
              diplay: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <ThemedText type="tiny">San Francisco, USA </ThemedText>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="briefcase-clock"
              size={15}
              color="#97D8B2"
            />
            <ThemedText type="tiny"> Availability:</ThemedText>
            <ThemedText type="tiny" style={{ color: "white", fontSize: 13 }}>
              {" "}
              Open to hire{" "}
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
    width: "100%%",
    display: "flex",
    flexDirection: "column",
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
  LoginButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEC51",
    height: 30,
    width: 110,
    borderRadius: 8,
    textAlign: "center",
    right: 10,
    // marginLeft: "15%",
  },
});
