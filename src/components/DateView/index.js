import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters';
import { AppStyles } from '../../services/utilities/AppStyle';
import { colors } from '../../services/utilities/colors';

const DateView = ({ dayText, date, month, isSelected, onPress }) => {
    const backgroundColor = isSelected ? colors.background3 : colors.background2;
    const textColor = isSelected ? colors.text8 : colors.text8;
  
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor }]}>
        <Text style={[AppStyles.smallBold, { color: textColor }]}>{dayText}</Text>
        <Text style={[AppStyles.smallBold, { color: textColor }]}>{date}</Text>
        <Text style={[AppStyles.smallBold, { color: textColor }]}>{month}</Text>
      </TouchableOpacity>
    );
  };

export default DateView

const styles = StyleSheet.create({
container: {
    width: responsiveScreenHeight(10),
    height: responsiveScreenHeight(10),
    backgroundColor:colors.background2,
    elevation: 7,
    marginLeft:responsiveScreenHeight(2),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    
},

})