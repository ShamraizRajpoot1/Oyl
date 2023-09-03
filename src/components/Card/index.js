import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

const CardView = props => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <Image style={styles.image} source={props.source} />
      
      </TouchableOpacity>
  );
};

export default CardView;

const styles = StyleSheet.create({
  card: {
    width: responsiveScreenWidth(25),
    height: responsiveScreenWidth(25),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    margin: '2%',
  },
  image: {
    width: scale(65),
    height: scale(26),
  },
});
