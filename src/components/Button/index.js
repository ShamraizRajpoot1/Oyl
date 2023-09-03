import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';

const Button = (props) => {
  const buttonWidth = props.width ? { width: props.width } : null;

  return (
    <LinearGradient
      colors={[props.startColor, props.endColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        { borderColor: props.endColor },
        buttonWidth, // Apply the width style conditionally
      ]}
    >
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        style={styles.buttonContent}
      >
        <Text style={[styles.text, { color: props.textColor }]}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: responsiveScreenWidth(66), // Default width if no width prop is provided
    height: responsiveScreenHeight(6),
    borderRadius: scale(25),
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#FFFFC829',
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.2),
  },
});

export default Button;
