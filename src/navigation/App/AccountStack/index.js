import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EditProfile from '../../../screens/appFlow/EditProfile';
import PrivacyPolicy from '../../../screens/appFlow/PrivacyPolicy';
import TermsOfService from '../../../screens/appFlow/TermsOfService';
import UserProfile from '../../../screens/appFlow/UserProfile';


const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,  }}>
       <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
        <Stack.Screen name='TermsOfService' component={TermsOfService} />
    </Stack.Navigator>
  )
}

export default AccountStack