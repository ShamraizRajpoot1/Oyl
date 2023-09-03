import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import App from './App';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthStack">
        <Stack.Screen name="AuthStack" component={Auth} />
        <Stack.Screen name="AppStack" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default Navigation;
