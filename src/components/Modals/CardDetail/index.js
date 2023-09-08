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
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import ModalButton from '../../Button/ModalButton';
import {AppStyles} from '../../../services/utilities/AppStyle';
import { appIcons } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import LinearGradient from 'react-native-linear-gradient';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';

const CardDetail = props => {
  const inputstyle = {
    ...AppStyles.input,
    width: '95%',
    marginHorizontal: responsiveScreenWidth(2),
    fontFamily: fontFamily.MontserratRegular,
  };
  return (
    <>
      
      <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.onBackdropPress} 
      >
        <TouchableOpacity 
          style={AppStyles.modalContainer}
          activeOpacity={1} 
          onPress={props.onBackdropPress} 
        >
          <View style={AppStyles.modalContent}>
            <View style={[AppStyles.circle,{elevation:8, shadowColor:colors.shadow8}]}>
            <LinearGradient 
              colors={colors.circlegradiant}
              style={AppStyles.circleGradient}
              >
              <Image
                source={appIcons.payment}
                style={AppStyles.image}
              />
              </LinearGradient>
            </View>
            <Text
              style={[
                AppStyles.modaltxt,
                {
                  fontFamily: fontFamily.PoppinsRegular,
                  marginTop: responsiveScreenWidth(10),
                },
              ]}>
              Add New Details
            </Text>
            <Text
              style={[AppStyles.modaltxt, {fontSize: fontSize.h3}]}>
              Please enter your Payment Details
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Card holder name"
                placeholderTextColor={colors.placeholdar2}
                onChangeText={props.onChangeText}
                value={props.value}
                style={inputstyle}
              />
              <TextInput
                placeholder="Number of card"
                placeholderTextColor={colors.placeholdar2}
                onChangeText={props.onChangeText}
                value={props.value}
                style={inputstyle}
                maxLength={16}
              />
              <Text style={styles.text}>VALID THRU</Text>
              <View style={styles.bottmContainer}>
                <TextInput
                  placeholder="MM"
                  placeholderTextColor={colors.placeholdar2}
                  onChangeText={props.onChangeText}
                  value={props.value}
                  style={styles.input}
                  maxLength={2}
                  keyboardType='numeric'
                />
                <Text style={styles.text}>/</Text>
                <TextInput
                  placeholder="YY"
                  placeholderTextColor={colors.placeholdar2}
                  onChangeText={props.onChangeText}
                  value={props.value}
                  style={styles.input}
                  maxLength={2}
                  keyboardType='numeric'
                />
                <TextInput
                  placeholder="CVV"
                  placeholderTextColor={colors.placeholdar2}
                  onChangeText={props.onChangeText}
                  value={props.value}
                  style={styles.input}
                  maxLength={3}
                  keyboardType='numeric'
                />
              </View>
            </View>
            <ModalButton
              color={colors.buttonGradiant6}
              text="Save"
              textColor={colors.text4}
              onPress={props.onPress}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  input: {
    marginTop: responsiveScreenWidth(2),
    backgroundColor: colors.field3,
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(10),
    borderRadius: scale(3),
    fontSize: fontSize.inputText,
    paddingLeft: responsiveScreenWidth(1),
    marginHorizontal: responsiveScreenWidth(2),
  },
  text: {
    color: colors.text1,
    fontSize: fontSize.lebal,
    fontFamily: fontFamily.MontserratMedium,
    marginVertical:5,
    marginHorizontal: responsiveScreenWidth(2)
  },
  inputContainer: {
    borderRadius: scale(6),
    backgroundColor: colors.background2,
    width: '100%',
    marginTop: 5,
    elevation: 5,
    shadowColor: colors.shadow6,
    padding: responsiveScreenWidth(2),
  },
  bottmContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: responsiveScreenWidth(1),
    paddingRight: responsiveScreenWidth(3),
    marginBottom:20
  },
});
