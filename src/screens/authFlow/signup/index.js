import React, {useContext, useState,useEffect} from 'react';
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
  Alert,
  ActivityIndicator,
  BackHandler
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
import {colors} from '../../../services/utilities/colors';
import AuthProvider, {AuthContext} from '../../../navigation/AuthProvider';
import {fontFamily} from '../../../services/utilities/fonts';
import Toast from 'react-native-simple-toast';

const SignUp = ({navigation}) => {
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
  const {register, user} = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const toggle = {
    width: scale(14),
    height: scale(14),
    borderWidth: 1,
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
    try {
      if (!isValidEmail(email)) {
        throw new Error('Invalid email address');
      }
  
      if (!isValidPassword(password)) {
        throw new Error('Password must have at least 8 characters');
      }
  
      setIsLoading(true); // Log here
      if (isChecked) {
        register(email, password)
          .then((user) => {
            setIsLoading(false); // Log here
            if (user) {
              navigation.navigate('Profile');
            } else {
              Toast.show('Registration failed', Toast.LONG);
            }
          })
          .catch((error) => {
            setIsLoading(false); // Log here
            console.error(error);
            Toast.show('Registration error', Toast.LONG);
          });
      } else {
        setIsLoading(false);
        Alert.alert('Please Accept Terms of condition and privacy policy');
      }
    } catch (error) {
      Toast.show(error.message, Toast.LONG);
    }
  };
  
  
  const isValidEmail = email => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPassword = password => {
    return password.length >= 8;
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
              {isLoading ? (
          <View style={AppStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.buttonGradiant1} />
          </View>
        ) : (
            <ScrollView
              style={{flex: 1}}
              contentContainerStyle={AppStyles.contentContainer}
              keyboardShouldPersistTaps="handled"
              >
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
                    <View
                      style={[
                        AppStyles.toggleview,
                        {},
                      ]}>
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
                          {
                            fontFamily: fontFamily.RobotoRegular,
                            color: colors.text6,
                          },
                        ]}>
                        I accept the{' '}
                      </Text>
                      <TouchableOpacity onPress={Terms}>
                        <Text
                          style={[AppStyles.smallBold, {color: colors.text7}]}>
                          Terms of Service{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={[
                          AppStyles.smallBold,
                          {
                            fontFamily: fontFamily.RobotoRegular,
                            color: colors.text6,
                          },
                        ]}>
                        and{' '}
                      </Text>
                      <TouchableOpacity onPress={Privacy}>
                        <Text
                          style={[AppStyles.smallBold, {color: colors.text7}]}>
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
            </ScrollView>)}
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
    marginTop: responsiveScreenWidth(2),
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
    height: scale(15),
    width: scale(15),
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
