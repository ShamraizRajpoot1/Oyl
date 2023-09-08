import React, { useContext, useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screens/authFlow/signin';
import SignUp from '../../screens/authFlow/signup';
import Profile from '../../screens/authFlow/Profile';
import PrivacyPolicy from '../../screens/appFlow/PrivacyPolicy';
import TermsOfService from '../../screens/appFlow/TermsOfService';
import { AuthContext } from '../AuthProvider';

const Stack = createNativeStackNavigator();
// const EntryScreen = ({ navigation }) => {
//   const { user } = useContext(AuthContext);
//   useEffect(() => {
//     user ? 
//       navigation.replace('AppStack')
//     :
//       null
//   }, []);
//   navigation.replace('SignIn'); 
// };
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       {/* <Stack.Screen name="EntryScreen" component={EntryScreen} /> */}
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermsOfService" component={TermsOfService} />
    </Stack.Navigator>
  );
};

export default AuthStack;
