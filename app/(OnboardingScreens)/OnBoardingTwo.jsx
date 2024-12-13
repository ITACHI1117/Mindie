import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

const OnboardingTwo = () => {
    const [selected, setSelected] = useState([])
    const [active, setActive] = useState(1)
    // console.log(selected);
    // console.log(selected.length);
    
    function handleSelectedItems(id){
        setActive(id) 
    }
    
    const data = [
        {id:1, title:"2 minutes or less", image: require("../../assets/images/cuate2.png")},
        {id:2, title:"5 minutes", image: require("../../assets/images/pana.png")},
        {id:3, title:"10 minutes", image: require("../../assets/images/illustration2.png")},
        {id:4, title:"30 minutes", image: require("../../assets/images/worryLess.png")},
        {id:5, title:"60 minutes or more", image: require("../../assets/images/cuate2.png")},
      ];

    const renderItem = ({item}) =>{
        const isActive = item.id === active
        return(
            <TouchableOpacity onPress={() => handleSelectedItems(item.id)} style={[styles.container,isActive && {backgroundColor:"#FFEC51"}]}>
                <View style={{display:"flex", flexDirection:"row", alignItems:"center", gap:10}}>
                <Text style={[{fontSize:20, color:"white"},isActive && {color:"black"}]}>{item.title}</Text>
                </View>
                {/* Number image */}
                
            </TouchableOpacity>
        )
    }
  return (
    <SafeAreaView style={{padding:10}}>
        <View style={{display:"flex", gap:10, marginBottom:20}}>
      <Text style={{color:"white", fontSize:30}}>How much time a day can you dedicate to your menal health?</Text>
        </View>
        <View style={{ display:"flex",paddingBottom: 100, flexGrow:1,  justifyContent:"center", marginTop:100}}>
        <FlatList
        scrollEnabled={false}
         contentContainerStyle={{ paddingBottom: 10 }}
         showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={data.id}
        renderItem={renderItem}
        />
        
        </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:60,
      backgroundColor:"#181818",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:10,
    alignItems:"center",
    borderColor:"#242424",
    borderWidth:1,
    borderRadius:10,
    padding:10
    }
  })

export default OnboardingTwo