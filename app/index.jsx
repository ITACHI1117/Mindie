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
  Dimensions,
} from "react-native";
import { useState, useContext, useEffect } from "react";

import { HelloWave } from "@/components/HelloWave";
import { Link } from "expo-router";
import { router } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DataContext from "../context/DataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnboardingScreens from "./(OnboardingScreens)/Index";


export default function HomeScreen() {
  const screenHeight = Dimensions.get("window").height;
  const colorScheme = useColorScheme();
  const {
    email,
    password,
    user,
    signed,
    username,
    phone,
    signUpError,
    setEmail,
    setPassword,
    submit,
    setPhone,
    setUsername,
    SignUpLoading,
    signInWithGoogle,
  } = useContext(DataContext);

  const color = useThemeColor({ light: "white", dark: "black" }, "background");

  const [viewPassword, setViewPassword] = useState(true);

  const ViewInputPassword = () => {
    !viewPassword ? setViewPassword(true) : setViewPassword(false);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem("hasLaunched", "true");
      } else {
        setIsFirstLaunch(false);
        AsyncStorage.clear()
      }
    };

    checkOnboarding();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Show a loading spinner if needed
  }

  user ? router.replace("/Login") : "";

  return  isFirstLaunch ? <OnboardingScreens /> :(
    <ThemedView style={{ height: "100%", backgroundColor: color }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={true}
          //   behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1, width: "100%" }}
        >
          <View style={styles.container}>
            <ThemedText type="title">Welcome to Mindie ✌</ThemedText>
            <View
              style={{
                marginTop: 30,
              }}
            >
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
              {signUpError ? (
                <View style={styles.policy}>
                  <View
                    style={{
                      width: 10,
                      backgroundColor: "red",
                      height: 10,
                      marginRight: 10,
                      borderRadius: "100%",
                    }}
                  ></View>
                  <ThemedText style={{ width: "80%" }} type="tiny">
                    {signUpError}
                  </ThemedText>
                </View>
              ) : (
                <View style={styles.policy}>
                  <View
                    style={{
                      width: 10,
                      backgroundColor: "#55A59A",
                      height: 10,
                      marginRight: 10,
                      borderRadius: "100%",
                    }}
                  ></View>
                  <ThemedText style={{ width: "80%" }} type="tiny">
                    I agree to privacy policy, cookies policy and terms and
                    conditions.
                  </ThemedText>
                </View>
              )}

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
              <TouchableOpacity onPress={signInWithGoogle}>
                <View style={styles.button}>
                  {/* google logo */}
                  <Image
                    source={require("../assets/images/google.png")}
                  ></Image>
                  <ThemedText style={{ color: "gray" }} type="tiny">
                    {"  "}
                    SignUp with Google
                  </ThemedText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.button}>
                  {/* google logo */}
                  <Image source={require("../assets/images/apple.png")}></Image>
                  <ThemedText style={{ color: "gray" }} type="tiny">
                    {"  "} SignUp with Apple
                    {/* {screenHeight - 30} */}
                  </ThemedText>
                </View>
              </TouchableOpacity>
              {/* back img */}

              {/* Login button */}

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              ></View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View
        style={{
          position: "absolute",
          top: "96%",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Link replace href="/Login" asChild> */}
        <TouchableOpacity style={styles.LoginButton} onPress={() => submit()}>
          {SignUpLoading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <ThemedText style={{ color: "black" }} type="button">
              Create account
            </ThemedText>
          )}
        </TouchableOpacity>
        {/* </Link> */}
        <Link replace href="/Login" asChild>
          <TouchableOpacity style={{ marginTop: 10 }}>
            <ThemedText style={{ color: "white" }} type="tiny">
              Already have an account?{" "}
              <ThemedText style={{ color: "white" }} type="tiny">
                Login
              </ThemedText>
            </ThemedText>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
    alignItems: "center",
    marginTop: 20,
    width: "95%",
    height: 55,
    backgroundColor: "#181818",
    borderRadius: 8,
    padding: 10,
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
    // position: "absolute",
    // marginTop: "30%",
    // top: "100%",
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
