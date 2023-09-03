import React from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { appIcons, appImages } from '../../../services/utilities/assets';

const Header = (props) => {
  const headerStyles = [
    styles.header,
    props.background
      ? { backgroundColor: 'transparent' }
      : { backgroundColor: '#FFFFFF' },
  ];

  const headerTextStyles = [
    styles.headertext,
    {marginRight: 20,},
    props.textColor ? { color: '#FFFFC8' } : { color: '#222222' },
  ];

  return (
    
    <View style={headerStyles}>
      {props.Image && (
        <TouchableOpacity style={{ marginLeft: 20 }} onPress={props.onPress}>
          <Image
            style={[
              styles.headerback,
              props.textColor ? { tintColor: '#FFFFC8' } : null,
            ]}
            source={appIcons.back}
          />
        </TouchableOpacity>
      )}
       {props.options && (
        <TouchableOpacity  style={{ marginLeft: 20 }} onPress={props.onPress}>
          <Image
            style={[
              styles.headerback,{height:scale(30),width:scale(30)} ,
               props.textColor ? { tintColor: 'transparent' } : null,
            ]}
            source={appIcons.options}
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    height: responsiveScreenHeight(10),
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderBottomColor: '#EEEEEE',
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
    alignItems:'center',
    padding: 10,
  },
  headertext: {
    color: '#222222',
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Roboto-Bold',
  },
  headerback: {
    width: scale(8),
    height: scale(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
