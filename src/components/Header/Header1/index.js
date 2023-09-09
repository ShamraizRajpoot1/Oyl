import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {appIcons, appImages} from '../../../services/utilities/assets';
import {colors} from '../../../services/utilities/colors';
import {fontFamily, fontSize} from '../../../services/utilities/fonts';

const Header = props => {
  const headerStyles = [
    styles.header,
    props.background
      ? {backgroundColor: 'transparent'}
      : {backgroundColor: colors.background2},
  ];

  const headerTextStyles = [styles.headertext];

  if (props.options) {
    headerTextStyles.push({marginLeft: responsiveScreenWidth(15)});
  } else if (props.Image) {
    headerTextStyles.push({marginRight: responsiveScreenWidth(10)});
  } else {
    null;
  }

  if (props.textColor) {
    headerTextStyles.push({color: colors.text3});
  } else {
    headerTextStyles.push({color: colors.text1});
  }

  const optionimage = {
    ...styles.headerback,
    height: scale(30),
    width: scale(30),
    padding: 0,
    marginRight: responsiveScreenWidth(5),
    ...(props.textColor ? {tintColor: 'transparent'} : {}),
  };

  return (
    <View style={headerStyles}>
      {props.Image && (
        <TouchableOpacity
          style={{marginLeft: responsiveScreenWidth(7)}}
          onPress={props.onPress}>
          <Image
            style={[
              styles.headerback,
              props.textColor ? {tintColor: colors.text3} : null,
            ]}
            source={appIcons.back}
          />
        </TouchableOpacity>
      )}

      {props.Image || props.options ? (
        <View style={styles.headerWithImage}>
          <Text style={headerTextStyles}>{props.text}</Text>
        </View>
      ) : (
        <View style={styles.headerWithoutImage}>
          <Text style={headerTextStyles}>{props.text}</Text>
        </View>
      )}

      {props.options && (
        <TouchableOpacity
          style={{marginLeft: responsiveScreenWidth(7)}}
          onPress={props.onPress}>
          <Image style={optionimage} source={appIcons.options} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: responsiveScreenHeight(10),
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomColor: colors.border2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerWithImage: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWithoutImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headertext: {
    color: colors.text1,
    fontSize: fontSize.large,
    fontFamily: fontFamily.RobotoBold,
  },
  headerback: {
    width: scale(8),
    height: scale(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
