import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimensions'
//IMPORTS

//react function AND PASSING PARAMETERS FRO HOME PAGE 
export default function Cards({ name, image , navigation}) {

  //details page UI

  return (
    <TouchableOpacity style={{ marginHorizontal: 10, marginVertical: 10 }}
    onPress={() => navigation.navigate('Details',{name})}>
      <ImageBackground source={image} style={{
        height: deviceHeight / 5,
        width: deviceWidth / 2 + 130
      }} imageStyle={{ borderRadius: 16 }} />

      <View style={{position:"absolute",width:"100%",height:"100%"}}>
        <Text style={{fontSize:30, width:"100%",height:"100%", fontFamily:"Oswald-Bold"
      ,textAlign:"center",textAlignVertical:"center", color:"black"}}>{name}</Text>
      </View>


    </TouchableOpacity>

  );

}

/*
author: IM/2020/065
SASINDU OBEYESEKERE
*/