import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import TabButtons, { TabButtonType } from "@/components/Discover/TabButtons";
import Header from "../../components/Discover/Header";
import RecommendedBasedOnAssessment from "../../components/Discover/RecommendedBasedOnAssessment";
import Mindfulness from "../../components/Discover/Mindfulness";
import Anxiety from "../../components/Discover/Anxiety";
import Bookings from "../../components/Discover/Bookings";
import OtherBookings from "../../components/Discover/OtherBookings";

enum CustomTab {
  Tab1,
  Tab2,
}
export default function Discover() {
  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

  const buttons: TabButtonType[] = [
    { title: "Courses" },
    { title: "Therapists" },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "#181818" }}>
      <Header />
      <View
        style={{
          marginTop: -10,
          height: "100%",
          backgroundColor: "#131313",
          padding: 10,
        }}
      >
        <TabButtons
          buttons={buttons}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === CustomTab.Tab1 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <RecommendedBasedOnAssessment />
            <Mindfulness />
            <Anxiety />
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Bookings />
            <OtherBookings />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
