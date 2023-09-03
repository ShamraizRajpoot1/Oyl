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
  ScrollView,
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
import {AppStyles} from '../../../services/utilities/AppStyle';
import {appImages, appIcons} from '../../../services/utilities/assets';

const SignUp = ({navigation}) => {
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
    marginRight: responsiveScreenWidth(2),
  };
  const back = () => {
    navigation.navigate('SignIn');
  };
  const Terms = () => {
    navigation.navigate('TermsOfService');
  };
  const Privacy = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const letsGo = () => {
    navigation.navigate('Profile');
  };
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <Header Image={true} text="Create Account" onPress={back} />
        <ImageBackground
          source={appImages.background}
          style={AppStyles.backgroundImage}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
            <ScrollView
              style={{flex: 1}}
              contentContainerStyle={AppStyles.contentContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                  <View style={styles.body}>
                    <View style={styles.input}>
                      <InputField
                        label="Phone"
                        placeholder="Enter Your Phone Here"
                        onChangeText={setPhone}
                        value={phone}
                        type="numeric"
                      />
                    </View>
                    <View style={styles.input}>
                      <InputField
                        label="Otp"
                        placeholder="684 575"
                        onChangeText={setOtp}
                        value={otp}
                        type="numeric"
                      />
                    </View>
                    <View style={[AppStyles.toggleview,{marginTop: responsiveScreenWidth(7)}]}>
                      <TouchableOpacity onPress={toggleCheckbox}>
                        <View style={toggle}>
                          {isChecked && (
                            <Image
                              source={require('../../../assets/icons/tick.png')}
                              style={styles.toggleimg}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={[
                          AppStyles.smallBold,
                          {fontFamily: 'Roboto', color: '#FFFFFF'},
                        ]}>
                      
                        I accept the{' '}
                      </Text>
                      <TouchableOpacity onPress={Terms}>
                        <Text style={[AppStyles.smallBold, {color: '#FFFFCC'}]}>
                        
                          Terms of Service{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={[
                          AppStyles.smallBold,
                          {fontFamily: 'Roboto', color: '#FFFFFF'},
                        ]}>
                        and{' '}
                      </Text>
                      <TouchableOpacity onPress={Privacy}>
                        <Text style={[AppStyles.smallBold, {color: '#FFFFCC'}]}>
                          Privacy Policy
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.button}>
                    <Button
                      text="Lets go!"
                      startColor="#FFFFFF"
                      endColor="#FFFFCC"
                      textColor="black"
                      onPress={letsGo}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </>
  );
};

export default SignUp;

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
  remrow: {
    width: '100%',
    marginTop: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(3),
    flexDirection: 'row',
    justifyContent: '',
  },
  toggleimg: {
    height: scale(13),
    width: scale(13),
    borderRadius: 100,
    marginLeft: -2,
    marginTop: -2,
  },
  toggleview: {
    marginTop: responsiveScreenWidth(7),
    marginLeft: responsiveScreenWidth(7),
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
