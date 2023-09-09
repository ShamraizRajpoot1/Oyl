import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../screens/appFlow/HomeScreen';
import VehicleInfo from '../../../screens/appFlow/VehicleInfo';
import Payment from '../../../screens/appFlow/Payment';
import ThankYou from '../../../screens/appFlow/ThankYou';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false, }} initialRouteName='Home' >
        <Stack.Screen name='Home' component={Home}   />
        <Stack.Screen name='VehicleInfo' component={VehicleInfo} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen
        name='ThankYou'
        component={ThankYou}
        options={{
          tabBarVisible: false, // Hide the tab bar for ThankYou screen
        }} />
    </Stack.Navigator>
  )
}

export default HomeStack