import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Button from '../../components/Button'

const FinishedOnBoarding = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#131313", height:"100%", width:"100%", display:"flex", alignItems:"center", justifyContent:"center",}}>
        <View style={{alignItems:"center", justifyContent:"center", padding:40, gap:10, }}>
      <Image source={require("../../assets/images/finishonboarding.png")} />
      <Text style={{color:"white", fontSize:25, fontWeight: 600}}>You’re all set and ready to go 🎉</Text>
      <Text style={{color:"#808080",textAlign:"center", fontSize:18}}>We’ve saved some of your preferences to better know who you are and give better recommendations.</Text>
    
        </View>
    <View style={{width:"100%", padding:15, position:"absolute", bottom:20}}>
        <Button color={"#FFEC51"} text={"Get Started"} textColor={"black"} width='100%' pathname={"/"} />
    </View>
    </SafeAreaView>
  )
}

export default FinishedOnBoarding