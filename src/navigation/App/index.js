import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './Bottom';
import ThankYou from '../../screens/appFlow/ThankYou';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen}  />
        
    </Stack.Navigator>
  )
}

export default AppStack