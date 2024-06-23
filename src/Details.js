import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { deviceHeight, deviceWidth } from './Dimensions' // importing dimensions to fit device
import Icon from 'react-native-vector-icons/Ionicons'; // importing downloaded package of icons
import { API_KEY } from './Constants'; //IMPORTIng saved api key from constants

export default function Details(props) {

    const [data, setData] = useState(); //declaring changing variables

    const { name } = props.route.params; //getting name parameter from props object

    //data fetching
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    //diplaying city header
    const Data = ({ title, value }) => <View style={{
        flexDirection: "row", justifyContent: 'space-between',
        alignItems: "center"
    }}>

        <Text style={{ color: "white", fontSize: 25 }}>{title}: </Text>
        <Text style={{ color: "black", fontSize: 25 }}>{value}</Text>

    </View>

    return (
        //creating Details page UI
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

                <View style={{

                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    width: deviceWidth - 20,
                }}>
                    {/*Home nac=vigatuion using back button */}
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Home')}
                        style={{
                            position: 'absolute',
                            top: 20,
                            left: 20,
                            padding: 10
                        }}
                    >
                        <Icon name="arrow-back" size={30} color="black" />
                    </TouchableOpacity>


                </View>


                {
                    data ? (<View style={{
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: "center",
                        height: deviceHeight - 100
                    }}>

                        {/* Displaying weather summary*/}
                        <View>
                            <Text style={{ color: "black", fontSize: 80, fontFamily: "Oswald-Bold" }}>{name}</Text>
                            <Text style={{ fontSize: 25, fontFamily: "Oswald-SemiBold", color: "white", textAlign: "center" }}>
                                There's {data['weather'][0]['main']} today..
                            </Text>
                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontFamily: 'Oswald=SemiBold', fontSize: 30 }}>The temparature today is</Text>
                            <Text style={{ fontFamily: 'Oswald=SemiBold', color: "black", fontSize: 64 }}>{(data['main']['temp'] - 273).toFixed(2)}&deg; C</Text>
                        </View>

                        {/*Creating details sector */}
                        <View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",

                            }}>
                                <Text style={{
                                    color: "black",
                                    fontSize: 30,
                                    paddingHorizontal: 10,
                                    paddingTop: 20,
                                    marginBottom: 20,
                                    fontFamily: "Oswald-Bold"
                                }}>
                                    More Details
                                </Text>
                                <Icon name="info" size={22} color="red" borderColor="black" />
                            </View>

                            <View style={{ width: deviceWidth - 60 }}>

                                <Data value={data['wind']['speed']} title='Wind' />
                                <Data value={data['main']['pressure']} title='Pressure' />
                                <Data value={`${data['main']['humidity']}%`} title='Humidity' />
                                <Data value={data['visibility']} title='Visibility' />

                            </View>


                        </View>


                    </View>
                    ) : null
                    //Imported data from ApI
                }
            </View>

        </View>
    );

}

/*
author: IM/2020/065
SASINDU OBEYESEKERE
*/