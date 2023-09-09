import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../HomeStack';
import AccountStack from '../AccountStack';
import CustomTabBar from '../../../components/TabBar'; 

const Bottom = createBottomTabNavigator();

const BottomTab = ({ tabBarVisible }) => {
  
  return (
    
    <Bottom.Navigator
      tabBar={props => <CustomTabBar {...props} />} 
    >
      <Bottom.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />

      <Bottom.Screen
        name="Account"
        component={AccountStack}
        options={{
          headerShown: false,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTab;
