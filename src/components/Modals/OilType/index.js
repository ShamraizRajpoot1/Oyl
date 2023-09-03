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
import { AppStyles } from '../../../services/utilities/AppStyle';

const OilType = props => {
  return (
    <>
      <StatusBar hidden={true} />
      <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.onBackdropPress}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={props.onBackdropPress}>
          <View style={styles.modalContent}>
            <View style={styles.Top}>
              <View style={styles.left}>
                <Text style={[AppStyles.smallBold,{marginTop:8}]}>Oil type</Text>
                <Text style={AppStyles.smallText}>
                  Please select Oil type from here
                </Text>
                <Text
                  style={[
                    AppStyles.smallText,
                    {
                      fontFamily: 'Roboto',
                      fontSize: responsiveFontSize(1.1),
                    },
                  ]}>
                  (All Oil High Quality Synthetic)
                </Text>
              </View>
              <TouchableOpacity
                onPress={props.onPress}>
                <Image
                  style={styles.locationimg}
                  source={appIcons.oil}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Bottom}>
              <TouchableOpacity style={styles.touchable}><Text style={AppStyles.OptionModalText}>Manufacturers Recommendation</Text></TouchableOpacity>
             <View style={[styles.touchable,{alignItems: 'center'}]}><Text style={AppStyles.OptionModalText}>------- OR -------</Text></View>
              <TouchableOpacity style={styles.touchable}><Text style={AppStyles.OptionModalText}>0W-20</Text></TouchableOpacity>
              <TouchableOpacity style={styles.touchable}><Text style={AppStyles.OptionModalText}>5W-20</Text></TouchableOpacity>
              <TouchableOpacity style={styles.touchable}><Text style={AppStyles.OptionModalText}>5W-30</Text></TouchableOpacity>
              <TouchableOpacity style={styles.touchable}><Text style={AppStyles.OptionModalText}>10W-30</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.touchable,{borderBottomWidth: null,}]}><Text style={AppStyles.OptionModalText}>10W-40</Text></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default OilType;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 0.5,
    backgroundColor: '#F7F7F7',
    width: responsiveScreenWidth(90),
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Top: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 9,
  },
  locationtext: {
    fontSize: responsiveFontSize(1.5),
    color: '#444444CC',
    fontFamily: 'Roboto-Bold',
  },
  label: {
    fontSize: responsiveFontSize(1.5),
    color: '#444444',
    fontFamily: 'Roboto-Bold',
    marginBottom: 4,
    marginTop: -4,
  },
  locationimg: {
    marginRight: 20,
    width: scale(25),
    height: scale(17),
  },
  left: {
    marginLeft: responsiveScreenWidth(5),
    marginRight: responsiveScreenWidth(24),
    justifyContent: 'space-evenly',
  },
  Bottom: {
    flex: 5,
    borderRadius: 12,
    backgroundColor: '#F7F7F7',
    width: '100%',
    marginTop: 5,
    elevation:5,
    paddingVertical:5
  },
  text:{
    fontFamily:'Roboto',
    color:'#444444',
    marginLeft: responsiveScreenWidth(5),
    fontSize: responsiveFontSize(2.2)
  },
  touchable:{
    flex:1,
     borderBottomWidth: 1,
    borderColor:'#00000029',
    justifyContent:'center'
  }
});
