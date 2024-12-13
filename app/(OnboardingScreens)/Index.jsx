import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Button from '../../components/Button';
import { Link } from "expo-router";

const OnboardingScreens = () => {
  return (
    <View style={{width:"100vw", height:"100%", position:"relative"}}>
       <Image
              style={{ width:"100vw", height:"75%"  }}
              source={require("../../assets/images/on1.jpg")}
              
            />
            <SafeAreaView style={{position:"relative"}}>
            <Image
              style={{ width:"100%", height:"300", marginTop:-70  }}
              source={require("../../assets/images/blur.png")}
            />
            <View style={{position:"absolute", paddingLeft:20, paddingRight:20, alignItems:"center", justifyContent:"center", width:"100%"}}>
             <ThemedText type="title" style={{fontSize:30, marginBottom:10}}>About Mindie</ThemedText>
             <ThemedText type="default" style={{fontSize:20, textAlign:"center", marginBottom:30}}>Mindie, helps to track your mental health, detect any issues early and provide appropriate help for predicted problems.</ThemedText> 
            <Button color={"#FFEC51"} text={"Continue"} textColor={"black"} pathname={"OnboardingStatus"} />

            </View>
            </SafeAreaView>
    </View>
    
  )
}

export default OnboardingScreens