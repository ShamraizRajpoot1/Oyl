import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native'; // Import ImageBackground
import { appIcons, appImages } from '../../services/utilities/assets'; // Import appImages
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { colors } from '../../services/utilities/colors';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const isAccountSelected = state.routes[state.index].name === 'Account';
  const isHomeSelected = state.routes[state.index].name === 'HomeStack';

  return (
    
    <View style={styles.container}>
      {isHomeSelected && Platform.OS === 'android' && (
          <View style={styles.androidTopShadow} />
        )}
    <View style={[styles.tabBarContainer,{backgroundColor: isHomeSelected ? colors.background2 : 'transparent',}]}>
    
      {isAccountSelected ? ( 
        <ImageBackground
          source={appImages.background}
          style={styles.backgroundImage}
        >
          <TabBarContents state={state} descriptors={descriptors} navigation={navigation} />
        </ImageBackground>
      ) : (
        <TabBarContents state={state} descriptors={descriptors} navigation={navigation} />
      )}
    </View>
    </View>
    
  );
};

const TabBarContents = ({ state, descriptors, navigation }) => {
  const isHomeSelected = state.routes[state.index].name === 'HomeStack';
  return (  
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name === 'HomeStack' ? 'Home' : route.name === 'Account' ? 'Account' : route.name;

        const isFocused = state.index === index;
        const tintColor = isHomeSelected ? colors.icon1 : colors.icon2 ;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          } 
        };
        return (
        
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabItem}
          >
            {isFocused && <View style={styles.indicator} />}
            <Image
              source={
                route.name === 'HomeStack'
                  ? appIcons.home
                  : appIcons.profile
              }
              style={[
                styles.icon,
                {
                  tintColor:tintColor,
                },
              ]}
            />
            <Text style={[styles.label, { color: tintColor }]}>{label}</Text>
          </TouchableOpacity>
        
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tabBarContainer: {
    height: scale(60),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  tabBar: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: scale(30),
    height: scale(30),
  },
  indicator: {
    width: '30%',
    height: 5,
    backgroundColor: colors.background3,
    position: 'absolute',
    top: responsiveScreenHeight(-1),
    borderRadius: scale(50),
  },
  label: {
    marginTop: 4, 
    fontSize: responsiveFontSize(1), 
    textAlign: 'center',
  },
  shadowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 20, 
  },
  shadow: {
    height: '100%',
    backgroundColor: colors.shadow7, 
  },
  androidTopShadow: {
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    height: 6, 
    elevation:9,
    opacity: 100
  },
});

export default CustomTabBar;
