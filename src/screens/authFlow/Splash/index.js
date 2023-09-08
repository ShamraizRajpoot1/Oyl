import { View} from 'react-native'
import React, {useContext, useEffect, useState, useLayoutEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation}) => {
    
    useEffect(() => {
        const id = AsyncStorage.getItem("Token", async (error, data) => {
            if (data) {
                navigation.navigate('AppStack')
            } else {
                console.log("data: ", data);
                navigation.navigate('AuthStack')
            }
          })
        console.log("User ID: ", id);
    }, []);
           
  return (
    <View></View>
   
  )
}

export default Splash