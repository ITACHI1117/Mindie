import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

export default function Read() {
  const { id, img, title, time } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", position: "relative" }}>
        {/* Read Image */}
        <Image style={styles.image} source={img} />
        <SafeAreaView
          style={{
            display: "flex",
            alignItems: "flex-start",
            position: "absolute",
            marginLeft: 10,
            width: "100%",
          }}
        >
          <Link href="\Discover" asChild>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="left" size={20} color="white" />
              <ThemedText type="title" style={{ color: "white", fontSize: 18 }}>
                {title}
              </ThemedText>
            </TouchableOpacity>
          </Link>
          <View
            style={{
              position: "absolute",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              //   justifyContent: "center",
              flexDirection: "row",
              marginLeft: 5,
              width: "26%",
              height: 30,
              marginTop: 10,
              borderRadius: 8,
              paddingLeft: 5,
              bottom: 15,
              top: 190,
            }}
          >
            <Ionicons name="book-outline" size={17} color="#8A8A8E" />
            <ThemedText style={{ fontSize: 14 }} type="tiny">
              {"  "}
              {time}
            </ThemedText>
          </View>
        </SafeAreaView>
      </View>

      <View style={[styles.card, styles.shadowProp]}>
        <View>
          <Text style={styles.heading}>The Bridge of Words</Text>
        </View>
        <ScrollView>
          <Text style={styles.message}>
            In the heart of the bustling city, there was a bridge that connected
            two parks. Every morning, people would stroll across, chatting,
            laughing, and greeting each other. For Alice, the bridge was a
            symbol of everything she feared. She had struggled with social
            anxiety for as long as she could remember. The thought of speaking
            to strangers, or even friends, filled her with dread. Each day,
            Alice would take a longer route to avoid the bridge, even though it
            added an extra half-hour to her commute. She admired the confident
            people she saw, wishing she could be like them. But one particular
            morning, something changed. She stood at the edge of the bridge,
            clutching the strap of her bag, her heart pounding. "Today," she
            whispered to herself. "Just one step." Taking a deep breath, Alice
            put one foot on the bridge. The chatter of people around her seemed
            overwhelming, but she focused on the rhythm of her breathing. She
            took another step, and another, her eyes fixed on the ground. As she
            reached the middle of the bridge, she felt a sudden tap on her
            shoulder. "Excuse me," said a kind voice. Alice turned to see an
            elderly woman with a gentle smile. "Could you help me with this map?
            I'm trying to find the botanical garden." Alice's throat felt dry,
            but she nodded. "Of course," she managed to say, her voice barely a
            whisper. She took the map and pointed to the garden's location, her
            finger trembling. The woman thanked her warmly and went on her way.
            Alice stood there, stunned. She had spoken to a stranger. It was a
            small victory, but it felt monumental. She continued across the
            bridge, her steps a bit lighter, her breathing a bit steadier. Over
            the next few weeks, Alice made it a point to cross the bridge every
            day. Each time, she challenged herself to say hello to someone, or
            help a tourist with directions. Slowly, the bridge became less of an
            obstacle and more of a path to growth. One day, as she crossed the
            bridge, she saw a man sitting on a bench, looking just as nervous as
            she used to feel. She recognized the fear in his eyes. Summoning her
            courage, she sat down beside him. "Hi," she said softly. "I used to
            be scared of this bridge too." The man looked at her, surprised.
            "Really?" he asked. "How did you get over it?" Alice smiled, a
            genuine, warm smile. "One step at a time," she said. "And a little
            kindness." As they talked, the man relaxed, and Alice realized
            something profound. The bridge had not only helped her overcome her
            fears but had also become a place where she could help others do the
            same. From that day on, Alice no longer avoided the bridge. It
            became a symbol of her journey, a reminder that overcoming social
            anxiety was not about becoming someone else, but about embracing who
            she was, one step at a time. And with each step, she found that the
            world was not as scary as she had once thought.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: 320,
    opacity: 0.6,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
    color: "white",
    paddingBottom: 10,
  },
  message: {
    width: "95%",
    color: "white",
    fontSize: 17,
    lineHeight: 27,
    marginBottom: 300,
  },
  card: {
    backgroundColor: "black",
    borderRadius: 0,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: "110%",
    height: "100%",
    marginVertical: -60,
    marginLeft: -10,
  },
  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: -20 },
    shadowOpacity: 0.9,
    shadowRadius: 9,
  },
});
