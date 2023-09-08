import React, {useContext, useState} from 'react';
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
import { colors } from '../../../services/utilities/colors';
import AuthProvider, { AuthContext } from '../../../navigation/AuthProvider';
import { fontFamily } from '../../../services/utilities/fonts';

const SignUp = ({navigation}) => {
  const {register} =useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(true);
  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const toggle = {
    width: scale(12),
    height: scale(12),
    borderWidth: 2,
    borderRadius: 100,
    borderColor: isChecked ? colors.border6 : colors.border5,
    backgroundColor: colors.background2,
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
    if(isChecked){
    register(email,password)?
    navigation.navigate('Profile') : Alert.alert("please check your email or password")}
    else {
      Alert.alert("Please Accept Terms of condition and privacy policy")
    }
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      
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
                        label="Email"
                        placeholder="Enter Your Phone Here"
                        onChangeText={setEmail}
                        value={email}
                        type="email-address"
                      />
                    </View>
                    <View style={styles.input}>
                      <InputField
                        label="Password"
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        type="default"
                      />
                    </View>
                    <View style={[AppStyles.toggleview,{marginTop: responsiveScreenWidth(7)}]}>
                      <TouchableOpacity onPress={toggleCheckbox}>
                        <View style={toggle}>
                          {isChecked && (
                            <Image
                              source={appIcons.tick}
                              style={styles.toggleimg}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={[
                          AppStyles.smallBold,
                          {fontFamily: fontFamily.RobotoRegular, color: colors.text6},
                        ]}>
                      
                        I accept the{' '}
                      </Text>
                      <TouchableOpacity onPress={Terms}>
                        <Text style={[AppStyles.smallBold, {color: colors.text7}]}>
                        
                          Terms of Service{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={[
                          AppStyles.smallBold,
                          {fontFamily: fontFamily.RobotoRegular, color: colors.text6},
                        ]}>
                        and{' '}
                      </Text>
                      <TouchableOpacity onPress={Privacy}>
                        <Text style={[AppStyles.smallBold, {color: colors.text7}]}>
                          Privacy Policy
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.button}>
                    <Button
                      text="Lets go!"
                      color={colors.buttonGradiant1}
                      textColor={colors.text4}
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
