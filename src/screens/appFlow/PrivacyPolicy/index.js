import React, {useState} from 'react';
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
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Header from '../../../components/Header/Header1';
import PrivacyText from '../../../components/Text';
import { AppStyles } from '../../../services/utilities/AppStyle';

const PrivacyPolicy = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const toggle = {
    width: scale(12),
    height: scale(12),
    borderWidth: 2,
    borderRadius: 100,
    borderColor: isChecked ? '#FFFFC869' : 'red',
    backgroundColor: '#FFFFFF',
  };
  const back = () => {
    navigation.goBack();
  };
  
  return (
    <>
      {/* <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" /> */}
      <View style={{flex: 1}}>
        <Header Image={true} text="Privacy Policy" onPress={back} />
        <ImageBackground
          source={require('../../../assets/images/background.png')}
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
