import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
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
        imageStyle={{borderBottomLeftRadius: scale(50), borderBottomRightRadius: scale(50)}}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{props.Text}</Text>
        </View>
      </ImageBackground>
  
  )
}

export default Header2

const styles = StyleSheet.create({
    header: {
        flex: 2,
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50,
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
        flex: 1,
        resizeMode: 'cover',
        borderBottomLeftRadius: scale(50),
        borderBottomRightRadius: scale(50),
      },
})