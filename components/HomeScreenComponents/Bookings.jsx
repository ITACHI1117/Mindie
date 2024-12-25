import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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
import TherapistData from "../../TherapistData";

export default function Bookings() {
  const colorScheme = useColorScheme();
  const screenWidth = Dimensions.get("window").width;
  // console.log(screenWidth);

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  return (
    <View
      style={{
        paddingTop: 0,
        backgroundColor: "black",
        paddingLeft: 20,
        marginBottom: 200,
      }}
    >
      
      <View style={styles.container}>
      {TherapistData.map(({id, name, specialization, location, availability, image}) =>{
        if(id <=2){ return(
          <View
          style={styles.bookingBox}
        >
          <View
            style={{
              display: "flex",
              width:"100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{display:"flex",flexDirection:"row"}}>
            <Image
              style={{ width: 40, height: 40 }}
              
              source={image}
            ></Image>
            <View style={{ paddingLeft: 10 }}>
              <ThemedText
                style={
                  screenWidth == 375
                    ? { fontSize: 13, color: "white" }
                    : { fontSize: 16, color: "white" }
                }
                type="defaultSemiBold"
              >
                {name}
              </ThemedText>
              <ThemedText
                style={screenWidth == 375 ? { fontSize: 12 } : { fontSize: 13 }}
                type="tiny"
              >
                {specialization}
              </ThemedText>
            </View>
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
            <ThemedText
              style={screenWidth == 375 ? { fontSize: 12 } : { fontSize: 13 }}
              type="tiny"
            >
              {location}{" "}
            </ThemedText>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="briefcase-clock"
              size={15}
              color="#97D8B2"
            />
            <ThemedText
              style={screenWidth == 375 ? { fontSize: 12 } : { fontSize: 13 }}
              type="tiny"
            >
              Availability:
            </ThemedText>
            <ThemedText
              style={
                screenWidth == 375
                  ? { fontSize: 12, color: "white" }
                  : { fontSize: 13, color: "white" }
              }
              type="tiny"
            >
              {" "}
              {availability}{" "}
            </ThemedText>
          </View>
        </View>
        )}
      })}
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
    flexDirection: "column",
    height: 170,
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 10,
    gap:10,
  },
  bookingBox:{
    backgroundColor: "#181818",
    width: "100%",
    height: 100,
    borderRadius: 8,
    display: "flex",
    alignItems: "flex-start",
    padding: 15,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEC51",
    height: 30,
    width: 110,
    borderRadius: 8,
    textAlign: "center",
    
  },
});
