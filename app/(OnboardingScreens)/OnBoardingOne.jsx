import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

const OnBoardingOne = () => {

    const [selected, setSelected] = useState([])
    const [active, setActive] = useState([])
    // console.log(selected);
    // console.log(selected.length);
    
    function handleSelectedItems(id){
        active < 3 && setActive(active+1) 
        if(selected.includes(id)){
           const unselected = selected.filter(item => item !==id)
           setSelected(unselected)
        }else{
            selected.length < 3 && setSelected((prevSelected) => [...prevSelected, id]);
        }
    }
    

    const data = [
        {id:1, title:"Reduce anxiety", image: require("../../assets/images/cuate2.png")},
        {id:2, title:"Be more productive", image: require("../../assets/images/pana.png")},
        {id:3, title:"Overcome depression", image: require("../../assets/images/illustration2.png")},
        {id:4, title:"Worry less", image: require("../../assets/images/worryLess.png")},
        {id:5, title:"Reduce stress", image: require("../../assets/images/cuate2.png")},
        {id:6, title:"Sleep better", image: require("../../assets/images/sleep.png")},
      ];

    const renderItem = ({item}) =>{
        const isActive = selected.includes(item.id)
        return(
            <TouchableOpacity onPress={() => handleSelectedItems(item.id)} style={styles.container}>
                <View style={{display:"flex", flexDirection:"row", alignItems:"center", gap:10}}>
                <Image style={{width:60, height:60}} source={item.image}/>
                <Text style={{fontSize:20, color:"white"}}>{item.title}</Text>
                </View>
                {/* Number image */}
                <Text style={{color:"#FFEC51", fontSize:50, }}>{isActive && selected.indexOf(item.id)+1}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <SafeAreaView style={{padding:10}}>
        <View style={{display:"flex", gap:10, marginBottom:20}}>
      <Text style={{color:"white", fontSize:30}}>What brings you to Mindie?</Text>
      <Text style={{color:"gray", fontSize:19}}>Select 3 things that fits you.</Text>
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
    height:120,
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

export default OnBoardingOne