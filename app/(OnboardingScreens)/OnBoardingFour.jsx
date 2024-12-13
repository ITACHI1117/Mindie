import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

const OnBoardingFour = () => {

    const [selected, setSelected] = useState([])
    const [active, setActive] = useState([])
    // console.log(selected);
    // console.log(selected.length);
    
    function handleSelectedItems(id){
        active < data.length && setActive(active+1) 
        if(selected.includes(id)){
           const unselected = selected.filter(item => item !==id)
           setSelected(unselected)
        }else{
            selected.length < data.length && setSelected((prevSelected) => [...prevSelected, id]);
        }
    }
    

    const data = [
        {id:1, title:"Monday",},
        {id:2, title:"Tuesday", },
        {id:3, title:"Wednesday", },
        {id:4, title:"Thursday",},
        {id:5, title:"Friday",},
        {id:6, title:"Saturday", },
        {id:7, title:"Sunday", },
      ];

    const renderItem = ({item}) =>{
        const isActive = selected.includes(item.id)
        return(
            <TouchableOpacity onPress={() => handleSelectedItems(item.id)} style={styles.container}>
                <View style={{display:"flex", flexDirection:"row", alignItems:"center", gap:10}}>
                
                <Text style={{fontSize:20, color:"white"}}>{item.title}</Text>
                </View>
                {/* Number image */}
                <View style={[isActive && {backgroundColor:"#FFEC51", width:20, height:20, borderRadius:3}]}></View>

            </TouchableOpacity>
        )
    }
  return (
    <SafeAreaView style={{padding:10}}>
        <View style={{display:"flex", gap:10, marginBottom:20}}>
      <Text style={{color:"white", fontSize:30, width: "90%"}}>What days can you dedicate for your mental health assessment?</Text>
      <Text style={{color:"gray", fontSize:19}}>Select at least 4 days.</Text>
        </View>
        <View style={{ display:"flex",paddingBottom: 100, flexGrow:1, height:"100%"}}>
        <FlatList
         contentContainerStyle={{ paddingBottom: 150 }}
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

export default OnBoardingFour