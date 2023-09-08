import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView
} from 'react-native';
import {
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import Header from '../../../components/Header/Header1';
import PrivacyText from '../../../components/Text';
import { AppStyles } from '../../../services/utilities/AppStyle';
import { appImages } from '../../../services/utilities/assets';

const TermsOfService = ({navigation}) => {
  const back = () => {
   navigation.goBack();

  };
  
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
