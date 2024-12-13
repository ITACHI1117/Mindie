import { View, Text, SafeAreaView, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OnBoardingOne from './OnBoardingOne';
import OnBoardingTwo from './OnBoardingTwo';
import OnBoardingThree from './OnBoardingThree';
import OnBoardingFour from './OnBoardingFour';
import { router, useRouter } from "expo-router";

const OnboardingStatus = () => {
  const [active, setActive] = useState(1)

  const data = [
    {id:1, component:<OnBoardingOne />},
    {id:2, component:<OnBoardingTwo />},
    {id:3, component:<OnBoardingThree />},
    {id:4, component:<OnBoardingFour />}
  ];

    function handleActiveItem() {
      active < 4 ? setActive(active+1) : router.push('/OnBoardingFive')
      
    }
  const renderItem = ({item}) => {
    const isActive = item.id === active
  return (
    <View style={[styles.item, isActive && styles.activeItem, {width: Dimensions.get('window').width /4.3,}]}>
    {/* <Text style={styles.title}>{item.title}</Text> */}
  </View>
  )}

  console.log(active);
  

  return (
    <SafeAreaView style={{backgroundColor:"#131313", height:"100%"}}>
      <View style={{padding:10}}>
       <FlatList
       horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
      </View>

      {/* <TouchableOpacity onPress={() => handleActiveItem()} style={{marginLeft:100}}><Text>next</Text></TouchableOpacity> */}

    {data.map(({id,component}) =>{
      if(id == active){
        return(
          <View style={{padding:10, width:"100%"}}>
          {component}
          
          </View>
        )
      }
    })}
    <View style={{ position:"absolute", padding:10, width:"100%", bottom:25}}> 
        <TouchableOpacity
         onPress={() => handleActiveItem()}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                backgroundColor:"#FFEC51",
                borderRadius: 8,
                marginTop: 15,
              }}
            >
              <Text style={{ color: "black" }}>Continue</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default OnboardingStatus

const styles = StyleSheet.create({
  item: {
    height:5,
    marginVertical: 3,
    marginHorizontal: 1,
    backgroundColor: '#181818',
    borderRadius:10
  },
  title: {
    fontSize: 16,
  },
  activeItem: {
    backgroundColor: '#FFEC51', // Change background color when active
  },
  component: {
    height: 100,
    borderRadius: 8,
  },

})