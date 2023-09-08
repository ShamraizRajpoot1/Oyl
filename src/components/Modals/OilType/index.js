import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity, // Import TouchableOpacity
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import { appIcons } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/AppStyle';
import { colors } from '../../../services/utilities/colors';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';

const OilType = props => {
  const select = (value) => {
    // Call the callback function with the selected value
    props.onChangeText(value);
    // Close the modal or perform any other necessary actions
    props.onPress();
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
                      fontFamily: fontFamily.RobotoRegular,
                      fontSize: fontSize.small,
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
              <TouchableOpacity style={styles.touchable} onPress={() => select('Manufacturers Recommendation')}><Text style={AppStyles.OptionModalText}>Manufacturers Recommendation</Text></TouchableOpacity>
             <View style={[styles.touchable,{alignItems: 'center'}]}><Text style={AppStyles.OptionModalText}>------- OR -------</Text></View>
              <TouchableOpacity style={styles.touchable} onPress={() => select('0W-20')}><Text style={AppStyles.OptionModalText}>0W-20</Text></TouchableOpacity>
              <TouchableOpacity style={styles.touchable} onPress={() => select('5W-20')}><Text style={AppStyles.OptionModalText}>5W-20</Text></TouchableOpacity>
              <TouchableOpacity style={styles.touchable} onPress={() => select('5W-30')}><Text style={AppStyles.OptionModalText}>5W-30</Text></TouchableOpacity>
              <TouchableOpacity style={styles.touchable} onPress={() => select('10W-30')}><Text style={AppStyles.OptionModalText}>10W-30</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.touchable,{borderBottomWidth: null,}]} onPress={() => select('10W-40')}><Text style={AppStyles.OptionModalText}>10W-40</Text></TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
  
  );
};

export default OilType;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background1,
  },
  modalContent: {
    flex: 0.5,
    backgroundColor: colors.field2,
    width: responsiveScreenWidth(90),
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Top: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.field2,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 9,
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
    borderRadius: scale(12),
    backgroundColor: colors.field2,
    width: '100%',
    marginTop: 5,
    elevation:5,
    paddingVertical:5
  },
  text:{
    fontFamily:'Roboto',
    color:colors.field2,
    marginLeft: responsiveScreenWidth(5),
    fontSize: fontSize.modalText
  },
  touchable:{
    flex:1,
    borderBottomWidth: 1,
    borderColor:colors.border3,
    justifyContent:'center'
  }
});
