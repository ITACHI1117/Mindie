import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Very disappointed",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Disconnected",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Neutral",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145111e29d72",
    title: "Connected",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e59d82",
    title: "Very connected",
  },
];

type ItemData = {
  id: string;
  title: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <Link href="/QuestionTwo" asChild style={[styles.item, { backgroundColor }]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  </Link>
);

export default function QuestionOnes() {
  const colorScheme = useColorScheme();

  const color = useThemeColor({ light: "black", dark: "white" }, "text");
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#FFEC51" : "#131313";
    const color = item.id === selectedId ? "black" : "white";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.questionContainer}>
        <ThemedText style={{ fontSize: 15 }} type="tiny">
          Question 1/6
        </ThemedText>
      </View>
      <ThemedText
        style={{ fontSize: 23, marginTop: 30 }}
        type="defaultSemiBold"
      >
        How connected did you feel with others today?
      </ThemedText>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#181818",
    display: "flex",
    width: "100%",
    // justifyContent: "space-between",
    marginTop: 10,
    height: "100%",
    marginLeft: 0,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: 20,
  },
  questionContainer: {
    backgroundColor: "#131313",
    marginTop: 20,
    width: 120,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  container: {
    marginTop: 150,
  },
  item: {
    padding: 15,
    width: "95%",
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: "white",
  },
});
