import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  StatusBar,
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

const CardDetail = props => {
  const inputstyle = {
    ...AppStyles.input,
    width: '95%',
    marginHorizontal: responsiveScreenWidth(2),
    fontFamily: 'Montserrat-Regular',
  };
  return (
    <>
      <StatusBar hidden={true} />
      <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.onBackdropPress} 
      >
        <TouchableOpacity // Use TouchableOpacity to handle backdrop press
          style={AppStyles.modalContainer}
          activeOpacity={1} // Prevents the parent TouchableOpacity from registering the tap
          onPress={props.onBackdropPress} // Call the onBackdropPress function when the backdrop is pressed
        >
          <View style={AppStyles.modalContent}>
            <View style={AppStyles.circle}>
              <Image
                source={appIcons.payment}
                style={AppStyles.image}
              />
            </View>
            <Text
              style={[
                AppStyles.modaltxt,
                {
                  fontFamily: 'Poppins-Regular',
                  marginTop: responsiveScreenWidth(10),
                },
              ]}>
              Add New Details
            </Text>
            <Text
              style={[AppStyles.modaltxt, {fontSize: responsiveFontSize(1.8)}]}>
              Please enter your Payment Details
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Card holder name"
                placeholderTextColor="#3A3A3A"
                onChangeText={props.onChangeText}
                value={props.value}
                style={inputstyle}
              />
              <TextInput
                placeholder="Number of card"
                placeholderTextColor="#3A3A3A"
                onChangeText={props.onChangeText}
                value={props.value}
                style={inputstyle}
                maxLength={16}
              />
              <Text style={styles.text}>VALID THRU</Text>
              <View style={styles.bottmContainer}>
                <TextInput
                  placeholder="MM"
                  placeholderTextColor="#3A3A3A"
                  onChangeText={props.onChangeText}
                  value={props.value}
                  style={styles.input}
                  maxLength={2}
                  keyboardType='numeric'
                />
                <Text style={styles.text}>/</Text>
                <TextInput
                  placeholder="YY"
                  placeholderTextColor="#3A3A3A"
                  onChangeText={props.onChangeText}
                  value={props.value}
                  style={styles.input}
                  maxLength={2}
                  keyboardType='numeric'
                />
                <TextInput
                  placeholder="CVV"
                  placeholderTextColor="#3A3A3A"
                  onChangeText={props.onChangeText}
                  value={props.value}
                  style={styles.input}
                  maxLength={3}
                  keyboardType='numeric'
                />
              </View>
            </View>
            <ModalButton
              
              text="Save"
              textColor="black"
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
    backgroundColor: '#F5F5F5',
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(10),
    borderRadius: 3,
    fontSize: responsiveFontSize(1.5),
    paddingLeft: responsiveScreenWidth(1),
    marginHorizontal: responsiveScreenWidth(2),
  },
  text: {
    color: '#222222',
    fontSize: responsiveFontSize(1.2),
    fontFamily: 'Montserrat-Medium',
    marginLeft:10,
    marginVertical:5
  },
  inputContainer: {
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: 5,
    elevation: 5,
    shadowColor: '#E3185A',
    padding: responsiveScreenWidth(2),
  },
  bottmContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: responsiveScreenWidth(3),
    paddingRight: responsiveScreenWidth(3),
    marginBottom:20
  },
});
