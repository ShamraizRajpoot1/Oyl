import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import HomeStack from '../HomeStack';
import AccountStack from '../AccountStack';

const Bottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator
    screenOptions={{
      
      "tabBarStyle": [
        {
          "display": "flex",
          "height" : responsiveScreenWidth(16),
        },
        null
      ]
    }}
    >
      <Bottom.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/icons/home.png')}
              style={[styles.icon,{tintColor:'black'}]}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../../../assets/icons/profile.png')}
              style={[styles.icon,{tintColor:'black'}]}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  )
}

export default BottomTab
const styles = StyleSheet.create({
  icon:{
    width:responsiveScreenWidth(8),
    height:responsiveScreenWidth(8),
  }
})