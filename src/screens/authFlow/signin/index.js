import React, {useContext, useState, useEffect} from 'react';
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
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import {AppStyles} from '../../../services/utilities/AppStyle';
import {appImages, appIcons} from '../../../services/utilities/assets';
import {colors} from '../../../services/utilities/colors';
import {AuthContext} from '../../../navigation/AuthProvider';

const SignIn = ({navigation}) => {
  const {login, user} = useContext(AuthContext);

  const Home = () => {
    {login(email, password) ?  navigation.navigate('AppStack') : Alert.alert('Please check your Email or Password Again')}

  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const create = () => {
    navigation.navigate('SignUp');
  };
  useEffect(() => {
    if(user) {
      navigation.navigate('AppStack')
    }

  }, [user])
  return (
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
              <View style={styles.logo}>
                <Image source={appImages.logo} style={AppStyles.Image} />
              </View>
              <View style={styles.field}>
                <Text style={AppStyles.centerMedium}>
                  Enter your phone number to log in!
                </Text>
                <View style={{marginVertical: responsiveScreenHeight(2)}}>
                  <InputField
                    label="Email"
                    placeholder="Please enter your email"
                    onChangeText={setEmail}
                    value={email}
                    type="default"
                  />
                  <InputField
                    label="password"
                    placeholder="Enter your Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    type="default"
                  />
                </View>
                <View style={styles.account}>
                  <Text style={AppStyles.lighttext}>
                    Do not have an account?{' '}
                  </Text>
                  <TouchableOpacity onPress={create}>
                    <Text style={AppStyles.semiboldtext}>Create</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.button}>
                <Button
                  text="LUMB ME UP!"
                  color={colors.buttonGradiant1}
                  textColor={colors.text4}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    flex: 0.5,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: responsiveScreenWidth(20),
  },
  button: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
