import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "white" }}>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        options={{
          headerShown: false,

          title: "Chat Support",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          headerShown: false,

          title: "Discover",
          tabBarIcon: ({ color }) => (
            <Feather name="life-buoy" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
