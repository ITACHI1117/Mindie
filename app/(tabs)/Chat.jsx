// ChatScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActivityIndicator,
} from "react-native";
import * as GoogleGenerativeAI from "@google/generative-ai";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/ChatComponents/Header";
import { ThemedText } from "@/components/ThemedText";
import { LogBox } from "react-native";

const Chat = () => {
  LogBox.ignoreAllLogs();
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showStopIcon, setShowStopIcon] = useState(false);

  const API_KEY = "AIzaSyDJC5lt2EQ1rI07apWkMXu1sqXo0Y_Ij8s";

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI();
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = "hello! ";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = await response.text();
      console.log(text);
      showMessage({
        message: "Welcome to Gemini Chat 🤖",
        description: text,
        type: "info",
        icon: "info",
        duration: 2000,
      });

      setMessages([
        {
          id: String(messages.length + 1),
          text,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          user: false,
        },
      ]);
    };
    startChat();
  }, []);

  const sendMessage = async () => {
    // Get the current time
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const time = `${formattedHours}:${formattedMinutes} ${ampm}`;
    Keyboard.dismiss();

    setLoading(true);
    const userMessage = {
      id: String(messages.length + 1),
      text: userInput,
      user: true,
      time: time,
    };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setUserInput("");

    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();

    setMessages([
      ...updatedMessages,
      {
        id: String(updatedMessages.length + 1),
        text,
        user: false,
        time: time,
      },
    ]);
    setLoading(false);
  };

  const renderMessageItem = ({ item }) => (
    <View style={{ position: "relative" }}>
      <View style={item.user ? styles.sentMessage : styles.receivedMessage}>
        <Text style={item.user ? styles.messageText : styles.messageText2}>
          {item.text}
        </Text>
      </View>
      {item.user ? (
        <View
          style={{
            position: "absolute",
            right: 10,
            top: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={{ width: 30, height: 30, borderRadius: 100 }}
            source={require("../../assets/images/chatGirl.png")}
          ></Image>
          <ThemedText type="tiny"> {item.time}</ThemedText>
        </View>
      ) : (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#55A59A",
              width: 30,
              height: 30,
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemedText type="defaultSemiBold" style={{ color: "black" }}>
              M
            </ThemedText>
          </View>
          <ThemedText type="tiny"> {item.time}</ThemedText>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{ height: "80%", borderWidth: 1, borderTopColor: "#242424" }}
        >
          <FlatList
            data={messages}
            renderItem={renderMessageItem}
            keyExtractor={(item) => item.id}
            style={styles.messageList}
            contentContainerStyle={styles.messageListContent}
          />
        </ScrollView>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputContainer}>
          <TextInput
            value={userInput}
            onChangeText={setUserInput}
            style={styles.input}
            placeholder="Start a conversation"
            placeholderTextColor="gray"
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Ionicons name="send" size={20} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  messageList: {
    flex: 1,
  },
  messageListContent: {
    padding: 10,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#ffd700",
    borderRadius: 10,
    padding: 9,
    marginVertical: 20,
  },
  receivedMessage: {
    marginRight: 50,
    alignSelf: "flex-start",
    backgroundColor: "#444",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  messageText: {
    color: "black",
  },
  messageText2: {
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingHorizontal: 10,
  },
  sendButton: {
    borderRadius: 25,
    padding: 10,
  },
});

export default Chat;
