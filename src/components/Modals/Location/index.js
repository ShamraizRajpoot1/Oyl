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
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import ModalButton from '../../Button/ModalButton';
import { appIcons } from '../../../services/utilities/assets';

const Location = props => {
  return (
    <>
      <StatusBar hidden={true} />
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
            <View style={styles.circle}>
              <Image
                source={appIcons.locationIcon}
                style={styles.image}
              />
            </View>
            <Text style={styles.modaltxt}>Add Location</Text>
            <TextInput
              placeholder="Search here"
              placeholderTextColor="#3A3A3A"
              onChangeText={props.onChangeText}
              value={props.value}
              style={styles.input}
            />

            <ModalButton
              style={styles.modalbtn}
              text="Submit"
              textColor="black"
              onPress={props.onPress}
            />
          </View>
          </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Location;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: responsiveScreenWidth(90),
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    top: responsiveScreenWidth(-15),
    width: responsiveScreenWidth(26),
    backgroundColor: 'black',
    height: responsiveScreenWidth(26),
    borderRadius: 200,
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
    backgroundColor: '#F5F5F5',
    width: responsiveScreenWidth(80),
    padding: responsiveScreenWidth(1.7),
    borderRadius: 12,
    fontSize: responsiveFontSize(1.5),
    paddingLeft: responsiveScreenWidth(2),
    color:'#3A3A3A',
    fontFamily:'Poppins-Light'
  },
  modaltxt: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    marginTop: responsiveScreenWidth(10),
  },
  modalbtn: {},
});
