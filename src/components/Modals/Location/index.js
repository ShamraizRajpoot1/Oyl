import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  TouchableOpacity, // Import TouchableOpacity
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import ModalButton from '../../Button/ModalButton';
import { appIcons } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import { AppStyles } from '../../../services/utilities/AppStyle';
import LinearGradient from 'react-native-linear-gradient';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';

const Location = props => {
  return (
   
      <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.onBackdropPress} 
      >
        <TouchableOpacity 
          style={styles.modalContainer}
          activeOpacity={1} 
          onPress={props.onBackdropPress} 
        >
          <View style={styles.modalContent}>
            <View style={AppStyles.circle}>
              <LinearGradient 
              colors={colors.circlegradiant}
              style={AppStyles.circleGradient}
              >
              <Image
                source={appIcons.locationIcon}
                style={styles.image}
              />
              </LinearGradient>
            </View>
            <Text style={styles.modaltxt}>Add Location</Text>
            <TextInput
              placeholder="Search here"
              placeholderTextColor={colors.placeholdar2}
              onChangeText={props.onChangeText}
              value={props.value}
              style={styles.input}
            />

            <ModalButton
              style={styles.modalbtn}
              color={colors.buttonGradiant4}
              text="Submit"
              textColor={colors.text4}
              onPress={props.onPress}
            />
          </View>
          </TouchableOpacity>
      </Modal>
   
  );
};

export default Location;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background1,
  },
  modalContent: {
    backgroundColor: colors.background2,
    width: responsiveScreenWidth(90),
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  image: {
    width: scale(33),
    height: scale(45),
  },
  input: {
    justifyContent:'center',
    marginTop: responsiveScreenWidth(2),
    backgroundColor: colors.field3,
    width: responsiveScreenWidth(80),
    padding: responsiveScreenWidth(1.7),
    borderRadius: 12,
    fontSize: fontSize.inputText,
    paddingLeft: responsiveScreenWidth(2),
    color:colors.placeholdar2,
    fontFamily:fontFamily.PoppinsLight
  },
  modaltxt: {
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.PoppinsMedium,
    color: colors.text4,
    marginTop: responsiveScreenWidth(10),
  },
});
