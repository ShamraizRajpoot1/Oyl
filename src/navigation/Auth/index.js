import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screens/authFlow/signin';
import SignUp from '../../screens/authFlow/signup';
import Profile from '../../screens/authFlow/Profile';
import PrivacyPolicy from '../../screens/appFlow/PrivacyPolicy';
import TermsOfService from '../../screens/appFlow/TermsOfService';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SignIn'>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsOfService" component={TermsOfService} />
    </Stack.Navigator>
  );
};

export default AuthStack;
