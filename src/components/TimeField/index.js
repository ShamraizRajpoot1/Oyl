import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { colors } from '../../services/utilities/colors';
import { fontSize } from '../../services/utilities/fonts';

const TimeField = props => {
  const [isInputFocused, setInputFocused] = useState(false);
  const handleTextChange = newText => {
    const newValue = parseInt(newText);
    if (isNaN(newValue)) {
      props.onChangeText('');
      return;
    }
    if (props.hasDate) {
      if (newValue >= 1 && newValue <= 12) {
        const formattedValue =
          newValue < 10 ? `0${newValue}` : newValue.toString();
        props.onChangeText(formattedValue);
      } else {
        props.onChangeText('12');
      }
    } else {
      if (newValue >= 1 && newValue <= 59) {
        const formattedValue =
          newValue < 10 ? `0${newValue}` : newValue.toString();
        props.onChangeText(formattedValue);
      } else {
        props.onChangeText('59');
      }
    }
  };

  const handleBlur = () => {
    setInputFocused(false);
    handleTextChange(props.value);
  };

  return (
    <View style={[styles.container,isInputFocused && styles.focusedInput  ]}>
      <TextInput
        style={[styles.input, ]}
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholdar4}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.type}
        onFocus={() => setInputFocused(true)}
        onBlur={handleBlur}
        maxLength={2}
      />
    </View>
  );
};

export default TimeField;

const styles = StyleSheet.create({
  container: {
    width: scale(80),
    height: scale(80),
    backgroundColor: colors.background2,
    elevation: 7,
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  input: {
    flex: 1,
    color: colors.text8,
    padding: responsiveScreenHeight(1),
    borderRadius: responsiveScreenHeight(5),
    fontSize: fontSize.time,
    
  },
  focusedInput: {
    backgroundColor: colors.field1,
  },
});
