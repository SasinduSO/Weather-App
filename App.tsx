import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home';
import Details from './src/Details';

//imports
//stack navigator
const Stack = createNativeStackNavigator();

//react class component to navigate accrosss app
export default class App extends Component {
  render() {
    return (
      //navigation
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          
          <Stack.Screen name='Home' component={Home}/> 
          <Stack.Screen name='Details' component={Details} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

//optional
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NovaSquare: {
    fontFamily: 'NovaSquare',
    fontSize: 20,
  },

});

/*
author: IM/2020/065
SASINDU OBEYESEKERE
*/