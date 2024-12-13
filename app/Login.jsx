import {
  Image,
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useState, useContext } from "react";
import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DataContext from "../context/DataContext";
import { router } from "expo-router";

export default function Login() {
  const colorScheme = useColorScheme();

  const [viewPassword, setViewPassword] = useState(true);

  const color = useThemeColor({ light: "black", dark: "white" }, "text");

  const ViewInputPassword = () => {
    !viewPassword ? setViewPassword(true) : setViewPassword(false);
  };

  const {
    email,
    password,
    loginError,
    LoginLoading,
    allUsers,
    signIn,
    signed,
    setEmail,
    setPassword,
    loggedInUser,
  } = useContext(DataContext);

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  signed ? router.replace("/HomeScreen") : "";

  return (
    <ThemedView style={{ height: "100%" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={true}
          //   behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        >
          <View style={styles.container}>
            <ThemedText type="title">Welcome back, Stephen ✌</ThemedText>
            <View style={{ marginTop: 30 }}>
              <ThemedText type="label">Email</ThemedText>
              <View>
                <TextInput
                  style={[styles.textInput]}
                  placeholderTextColor={"gray"}
                  placeholder="john@example.com"
                  color="white"
                  onChangeText={handleEmailChange}
                  //onChangeText={handlePasswordChange}
                />
                <Ionicons
                  style={{ position: "absolute", right: 35, top: "30%" }}
                  name="mail-outline"
                  size={20}
                  color="gray"
                />
              </View>
              {/* password */}
              <ThemedText type="label">Password</ThemedText>
              <View>
                <TextInput
                  style={[styles.textInput]}
                  placeholderTextColor={"gray"}
                  placeholder="***********"
                  onChangeText={handlePasswordChange}
                  //onChangeText={handlePasswordChange}
                  color="white"
                  secureTextEntry={viewPassword}
                />
                <MaterialCommunityIcons
                  onPress={() => ViewInputPassword()}
                  name="eye-off-outline"
                  size={20}
                  color="gray"
                  style={{ position: "absolute", right: 35, top: "30%" }}
                />
              </View>
              {/* password entry green */}
              {/* Policy */}
              <View style={styles.policy}>
                {loginError ? (
                  <ThemedText
                    style={{ width: "80%", color: "red" }}
                    type="tiny"
                  >
                    {loginError}
                  </ThemedText>
                ) : (
                  <ThemedText
                    style={{ width: "80%", textDecorationLine: "underline" }}
                    type="tiny"
                  >
                    Forgot password?
                  </ThemedText>
                )}
              </View>
              <View
                style={{
                  width: "95%",
                  height: 2,
                  backgroundColor: "#181818",
                  marginTop: "40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <ThemedText type="tiny">or</ThemedText>
              </View>
              <TouchableOpacity>
                <View style={styles.button}>
                  {/* google logo */}
                  <Image
                    source={require("../assets/images/google.png")}
                  ></Image>
                  <ThemedText style={{ color: "gray" }} type="tiny">
                    {"  "}SignUp with Google
                  </ThemedText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.button}>
                  {/* google logo */}
                  <Image source={require("../assets/images/apple.png")}></Image>
                  <ThemedText style={{ color: "gray" }} type="tiny">
                    {"  "} SignUp with Apple
                  </ThemedText>
                </View>
              </TouchableOpacity>
              {/* back img */}

              {/* Login button */}
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View
        style={{
          position: "absolute",
          bottom: "5%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Link replace href="/HomeScreen" asChild> */}
        <TouchableOpacity style={styles.LoginButton} onPress={() => signIn()}>
          {LoginLoading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <ThemedText style={{ color: "black" }} type="button">
              Login
            </ThemedText>
          )}
        </TouchableOpacity>
        {/* </Link> */}
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Link href="\" asChild>
            <TouchableOpacity>
              <ThemedText style={{ color: "white" }} type="tiny">
                Don't have an account?{" "}
                <ThemedText
                  style={{
                    color: "white",
                    textDecorationLine: "underline",
                  }}
                  type="tiny"
                >
                  Create account
                </ThemedText>
              </ThemedText>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  textInput: {
    backgroundColor: "#181818",
    width: "95%",
    height: 45,
    padding: 10,
    fontSize: 13,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 8,
  },
  policy: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    width: "95%",
    height: 55,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#181818",
    width: "95%",
    height: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  LoginButton: {
    marginTop: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEC51",
    height: 40,
    width: "95%",
    borderRadius: 8,
    textAlign: "center",
  },
});
