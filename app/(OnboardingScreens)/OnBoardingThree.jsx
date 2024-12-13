import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

const OnBoardingThree = () => {
    const [selected, setSelected] = useState([])
    const [active, setActive] = useState(0)
    // console.log(selected);
    // console.log(selected.length);
    
    function handleSelectedItems(id){
        setActive(id) 
    }
    
    const data = [
        {id:1, title:"18-25",},
        {id:3, title:"26-35",},
        {id:4, title:"36-45", },
        {id:5, title:"46-55",},
        {id:6, title:"55+",},
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
      <Text style={{color:"white", fontSize:30}}>How old are you?</Text>
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

export default OnBoardingThree