import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  BackHandler,
  ScrollView
} from 'react-native';
import {
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import Header from '../../../components/Header/Header1';
import PrivacyText from '../../../components/Text';
import { AppStyles } from '../../../services/utilities/AppStyle';
import { colors } from '../../../services/utilities/colors';
import { appImages } from '../../../services/utilities/assets';

const PrivacyPolicy = ({navigation}) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: false })
    return()=>{
        navigation.getParent().setOptions({ tabBarStyle: true })
    }
})

const handleBackPress = () => {
  navigation.goBack();
   return true;
 };
 useEffect(() => {
   const backHandler = BackHandler.addEventListener(
     'hardwareBackPress',
     handleBackPress,
   );
   return () => backHandler.remove();
 }, []);
  
  const back = () => {
    navigation.goBack();
  };
  
  return (
    <>
      <View style={{flex: 1}}>
        <Header Image={true} text="Privacy Policy" onPress={back} />
        <ImageBackground
          source={appImages.background}
          style={styles.backgroundImage}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
                 <ScrollView contentContainerStyle={AppStyles.contentContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{flex: 1}}>
                <PrivacyText />
              </View>
            </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginTop: responsiveScreenWidth(9),
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  body: {
    flex: 1.2,
    marginTop: responsiveScreenWidth(3),
  },
  
});
