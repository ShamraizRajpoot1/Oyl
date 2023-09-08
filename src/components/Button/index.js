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
import { colors } from '../../services/utilities/colors';
import { fontSize } from '../../services/utilities/fonts';

const Button = (props) => {
  const buttonWidth = props.width ? { width: props.width } : null;

  return (
    <LinearGradient
    colors={props.color}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.container,
        { borderColor: props.endColor },
        buttonWidth,
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
    width: responsiveScreenWidth(66), 
    height: responsiveScreenHeight(6),
    borderRadius: scale(25),
    justifyContent: 'center',
    elevation: 5,
    shadowColor: colors.shadow2,
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: fontSize.buttonText,
  },
});

export default Button;
