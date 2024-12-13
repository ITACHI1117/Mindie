import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../../components/Button'

const OnBoardingFive = () => {
  return (
    <View style={{backgroundColor:"#131313"}}>
      <Image style={{width:"100%", height:"100%"}} source={require("../../assets/images/onboardingImage2.png")} />
      <SafeAreaView  style={{position:"absolute", height:"100%"}}>
      <View style={{top:"70%", padding:10, width:"100%"}}>
     <Text style={{color:"white", fontSize:40, fontWeight:600}}>Do you prefer to keep your emotions to yourself?</Text>
     <Button color={"transparent"} textColor={"white"} text={"No"} pathname={"/FinishedOnBoarding"} width='100%' borderWidth={"1"} borderColor={"#242424"} height={"50"} />
     <Button color={"#131313"} textColor={"white"} text={"Yes"} pathname={"/FinishedOnBoarding"} width='100%' height={"50"} />
      </View>
      </SafeAreaView>
    </View>
  )
}

export default OnBoardingFive