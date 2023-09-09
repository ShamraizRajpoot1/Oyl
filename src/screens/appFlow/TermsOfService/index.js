import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  BackHandler,
} from 'react-native';
import Header from '../../../components/Header/Header1';
import PrivacyText from '../../../components/Text';
import { AppStyles } from '../../../services/utilities/AppStyle';
import { appImages } from '../../../services/utilities/assets';

const TermsOfService = ({navigation}) => {
  const back = () => {
   navigation.goBack();

  };
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
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: false })
    return()=>{
        navigation.getParent().setOptions({ tabBarStyle: true })
    }
})
  
  return (
    <>
      <View style={{flex: 1}}>
        <Header Image={true} text="Terms of Service" onPress={back} />
        <ImageBackground
          source={appImages.background}
          style={AppStyles.backgroundImage}>
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

export default TermsOfService;

const styles = StyleSheet.create({
 
  
});
