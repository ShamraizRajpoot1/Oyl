import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { ImageBackground } from 'react-native'
import { appImages } from '../../../services/utilities/assets'
import { scale } from 'react-native-size-matters'
import { fontFamily, fontSize } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'

const Header2 = (props) => {
  return (
   
     <ImageBackground
        source={appImages.background}
        style={styles.backgroundImage}
        imageStyle={{borderBottomLeftRadius: scale(40), borderBottomRightRadius: scale(40)}}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{props.Text}</Text>
        </View>
      </ImageBackground>
  
  )
}

export default Header2

const styles = StyleSheet.create({
    header: {
     height: responsiveScreenHeight(17),
        borderBottomEndRadius: scale(50),
        borderBottomLeftRadius: scale(50),
        alignItems: 'center',
        justifyContent: 'center',
      },
      headertext: {
        color: 'white',
        fontFamily:fontFamily.RobotoMedium,
        fontSize: fontSize.h1,
      },
      backgroundImage: {
        backgroundColor: colors.background2,
        height: responsiveScreenHeight(17),
        resizeMode: 'cover',
        borderBottomLeftRadius: scale(50),
        borderBottomRightRadius: scale(50),
      },
})