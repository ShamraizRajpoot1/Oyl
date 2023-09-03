import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import { AppStyles } from '../../../services/utilities/AppStyle';
import { appImages, appIcons } from '../../../services/utilities/assets';

const SignIn = ({ navigation }) => {

  const Home = () => {
    navigation.navigate('AppStack');
  };

  const [phone, setPhone] = useState('');

  const login = () => {
    navigation.navigate('SignUp');
  };

 
  return (
    <ImageBackground
      source={appImages.background}
      style={AppStyles.backgroundImage}
      >
      <KeyboardAvoidingView
      style={{flex:1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={AppStyles.contentContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex:1,}}>
      <View style={styles.logo}>
       <Image
                  source={appImages.logo}
                  style={AppStyles.Image}
                />
      </View>
      <View style={styles.field}>
      <Text style={AppStyles.centerMedium}>
        Enter your phone number to log in!
      </Text>
      <View style={{marginVertical: responsiveScreenHeight(2)}}>
      <InputField
       label="Phone"
       placeholder="0973-455152543"
       onChangeText={setPhone}
       value={phone}
       type="phone-pad"
      />
      </View>
      <View style={styles.account}>
                    <Text style={AppStyles.lighttext}>Do not have an account? </Text>
                    <TouchableOpacity onPress={login}>
                      <Text style={AppStyles.semiboldtext}>
                        Create
                      </Text>
                    </TouchableOpacity>
                  </View>
      </View>
      <View style={styles.button}>
      <Button
                    text="LUMB ME UP!"
                    startColor="#FFFFFF"
                    endColor="#FFFFCC"
                    textColor="black"
                    onPress={Home}
                  />
      </View>
      </View>
      </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  logo: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  field:{
    flex: 0.5,
  },
  txt: {
    fontSize: responsiveFontSize(1.7),
    color: '#FFFFFF',
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: responsiveScreenWidth(20),
  },
  button:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'
  },
});