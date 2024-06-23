import React, { useState } from 'react'
import { Text, FlatList, View, ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native' //importing alias
import { deviceHeight, deviceWidth } from './Dimensions'; // importing dimensions to fit device
import Icon from 'react-native-vector-icons/Ionicons'; // importing downloaded package of icons
import Cards from './Cards';




export default function Home(props) {


    const [city, setCity] = useState(''); //to pass from text input(search bar) to details page 

    //creating cards (dynamic view of locations)
    const cities = [
        {
            name: 'London',
            image: require('../assets/images/bgCard.jpg')
        },
        {
            name: 'New York',
            image: require('../assets/images/bgCard.jpg')
        },
        {
            name: 'Arizona',
            image: require('../assets/images/bgCard.jpg')
        }

    ]


    return (

        //making the ui
        <View>

            <ImageBackground source={require('../assets/images/bgforW.jpg')}
                style={{
                    height: deviceHeight,
                    width: deviceWidth
                }}
                imageStyle={{
                    opacity: 0.6,
                    backgroundColor: "black"
                }} />
            <View style={{
                position: 'absolute', paddingVertical: 20,
                paddingHorizontal: 10
            }}>



                {/* Creating headers  */}
                <View style={{ marginTop: 100, alignItems: "center", fontFamily: "NovaSquare", flex: 1 }}>

                    <Text style={styles.OswaldB}>Welcome to Weatherly! </Text>
                    <Text style={{
                        color: "white", fontSize: 22,
                        fontFamily: "Oswald-SemiBold",
                        paddingTop: 20
                    }}>Search For A City Here..</Text>


                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: 50,
                        borderWidth: 3,
                        borderColor: 'black',
                        marginTop: 20,
                        paddingHorizontal: 10
                    }}>

                    {/* Creating search bar  */}
                        <TextInput
                            value={city}
                            onChangeText={(val) => setCity(val)} 
                            placeholderTextColor="white"
                            style={{
                                paddingHorizontal: 10,
                                paddingTop: 10,
                                color: "black",
                                fontSize: 16
                            }}
                        />

                        {/* Props object passing from search bar */}
                        <TouchableOpacity onPress={() => 
                        {
                    // Check if the city is entered before navigating
                    if (city.trim() !== '') {
                        // Navigate to Details only if a city is entered
                        props.navigation.navigate('Details', { name: city });
                    } else {
                        // Show an alert or handle the case when no city is entered
                        alert('Please enter a city.');
                    }
                }}>
                     <Icon name="search" size={22} color="black" />
                </TouchableOpacity>
                        
                    </View> 

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",

                    }}>
                        <Text style={{
                            color: "black",
                            fontSize: 22,
                            paddingHorizontal: 10,
                            paddingTop: 20,
                            marginBottom: 20,
                            fontFamily: "Oswald-Regular"
                        }}>
                            My Locations
                        </Text>
                        <Icon name="heart" size={22} color="red" borderColor="black" />
                    </View>


                    <View>
                        <FlatList horizontal data={cities}
                            renderItem={({ item }) => (
                                <Cards image={item.image} name={item.name} navigation={props.navigation} ></Cards>
                            )} />
                    </View>



                </View>

            </View>

        </View>
    );




}

//stylesheet
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lavender',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    OswaldB: {
        fontFamily: 'Oswald-Bold',
        fontSize: 40,
        color: "black"

    },

});

/*
author: IM/2020/065
SASINDU OBEYESEKERE
*/