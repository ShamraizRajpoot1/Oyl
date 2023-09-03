import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters';
import { AppStyles } from '../../services/utilities/AppStyle';

const DateView = ({ dayText, date, month, isSelected, onPress }) => {
    const backgroundColor = isSelected ? '#FFFFC8' : '#FFFFFF';
    const textColor = isSelected ? '#444444' : '#444444';
  
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
    backgroundColor:'#FFFFFF',
    elevation: 7,
    marginLeft:responsiveScreenHeight(2),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    
},
text:{
    color:'#444444',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.3),
    marginTop:2
}

})