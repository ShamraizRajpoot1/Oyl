import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import {appIcons} from '../../../services/utilities/assets';
import {AppStyles} from '../../../services/utilities/AppStyle';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';
import {AuthContext} from '../../../navigation/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Options = props => {
  const {logout, user} = useContext(AuthContext);

  const navigation = useNavigation();
  const EditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const privacy = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const Terms = () => {
    navigation.navigate('TermsOfService');
  };
  const ShareFeedback = () => {
    navigation.navigate('ThankYou');
  };
  const AboutUs = () => {
    navigation.navigate('ThankYou');
  };
  const Logout = async () => {
    try {
      
      await AsyncStorage.removeItem('Token');
      logout()
      navigation.navigate("AuthStack", { screen: "SignIn" }); 
      } catch (error) {
      console.error('Error getting Token from AsyncStorage:', error);
    }
  };
  return (
    <Modal
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onBackdropPress}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={props.onBackdropPress}>
        <View style={styles.modalContent}>
          <View style={styles.innerContainer}>
            <TouchableOpacity style={styles.touchable} onPress={EditProfile}>
              <Text style={AppStyles.OptionModalText}>Edit Profile</Text>
              <Image style={styles.image} source={appIcons.arrowRight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={ShareFeedback}>
              <Text style={AppStyles.OptionModalText}>Share Your Feedback</Text>
              <Image style={styles.image} source={appIcons.arrowRight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={Terms}>
              <Text style={AppStyles.OptionModalText}>Terms of Service</Text>
              <Image style={styles.image} source={appIcons.arrowRight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={privacy}>
              <Text style={AppStyles.OptionModalText}>Privacy Policy</Text>
              <Image style={styles.image} source={appIcons.arrowRight} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable} onPress={AboutUs}>
              <Text style={AppStyles.OptionModalText}>About Us</Text>
              <Image style={styles.image} source={appIcons.arrowRight} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Logout}
              style={[
                styles.touchable,
                {
                  borderBottomWidth: null,
                },
              ]}>
              <Text
                style={[
                  AppStyles.OptionModalText,
                  {fontFamily: fontFamily.RobotoBold, color: colors.text4},
                ]}>
                Logout
              </Text>
              <Image style={styles.image} source={appIcons.arrowRight} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Options;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.background1,
  },
  modalContent: {
    backgroundColor: colors.background2,
    width: responsiveScreenWidth(100),
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.5,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },
  innerContainer: {
    flex: 1,
    borderWidth: scale(1),
    borderColor: colors.border1,
    borderRadius: scale(10),
    backgroundColor: colors.background2,
    width: '90%',
    marginVertical: responsiveScreenHeight(6),
    marginHorizontal: responsiveScreenWidth(15),
    elevation: 1,
  },
  touchable: {
    flex: 1,
    borderBottomWidth: scale(1),
    borderColor: colors.border3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: scale(10),
    height: scale(15),
    marginRight: responsiveScreenWidth(4),
  },
});
