import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/appFlow/HomeScreen';
import VehicleInfo from '../../../screens/appFlow/VehicleInfo';
import Payment from '../../../screens/appFlow/Payment';
import ThankYou from '../../../screens/appFlow/ThankYou';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, }}  />
        <Stack.Screen name='VehicleInfo' component={VehicleInfo} options={{ headerShown: false, }}/>
        <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false,  }}/>
        <Stack.Screen name="ThankYou" component={ThankYou} options={{ headerShown: false,  }} />
    </Stack.Navigator>
  )
}

export default HomeStack