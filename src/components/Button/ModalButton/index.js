import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const ModalButton = (props) => {
  return (
    <LinearGradient
    colors={['#4B4B3C', '#000000']}
    start={{ x: 0, y: 0 }} 
    end={{ x: 1, y: 1 }}   
    style={styles.container}
  >
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        style={styles.buttonContent}
      >
        <Text style={[styles.text]}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:responsiveScreenWidth(5),
    width: responsiveScreenWidth(28),
    height: responsiveScreenWidth(10),
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 9
  },
  buttonContent: {
    flex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: responsiveFontSize(1.5),
  },
});

export default ModalButton;
