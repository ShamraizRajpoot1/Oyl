import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
import { colors } from '../colors'
import { fontFamily, fontSize } from '../fonts'
export const AppStyles = StyleSheet.create({
    centerMedium:{
        alignSelf: 'center',
        fontSize: fontSize.medium,
        color: colors.text3,
        fontFamily: fontFamily.RobotoMedium
    },
    lighttext: {
        fontSize: fontSize.popinsSmall,
        color: colors.text6,
        fontFamily: fontFamily.PoppinsLight
    },
    smallBold:{
    color: colors.text8,
    fontSize: fontSize.lebal,
    fontFamily: fontFamily.RobotoBold
    },
    smallText: {
      flex: 1,
      color: colors.text1,
      borderRadius: responsiveScreenHeight(5),
      fontSize: fontSize.inputText,
      
    },
    largeBoldText: {
      alignSelf:'center',
      marginVertical: responsiveScreenHeight(2),
      //marginTop: responsiveScreenHeight(-2),
      color: colors.text1,
      fontWeight: 'bold',
      fontSize: fontSize.large,
    },
    semiboldtext: {
        fontSize: fontSize.popinsSmall,
        color: colors.text3,
        fontFamily: 'Poppins-SemiBold'
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        
      },
      Image: {
        width: scale (200),
        height: scale(100),
      },
      circle: {
        position: 'absolute',
        top: responsiveScreenWidth (-15),
        width: responsiveScreenWidth(26),
        backgroundColor: colors.circlegradiant,
        height: responsiveScreenWidth(26),
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:8,
        shadowColor: colors.shadow8,
      },
      circleGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: scale(55),
        height: scale(45),
      },
      header: {
        flex: 1,
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      headertext: {
        color: colors.text6,
        fontWeight: 'bold',
        fontSize: fontSize.h1,
      },
      input: {
        marginTop: responsiveScreenWidth(2),
        backgroundColor: colors.background5,
        width: responsiveScreenWidth(80),
        height: responsiveScreenWidth(10),
        borderRadius: 3,
        fontSize: fontSize.inputText,
        paddingLeft: responsiveScreenWidth(2),
        fontFamily:fontFamily.PoppinsLight,
      },
      modaltxt: {
        fontSize: fontSize.medium,
        fontFamily: fontFamily.PoppinsMedium,
        color: colors.text4,
      },
      modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background1,
      },
      modalContent: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(90),
        padding: responsiveScreenWidth(2),
        borderRadius: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      OptionModalText:{
          fontFamily:fontFamily.RobotoRegular,
          color:colors.text8,
          marginLeft: responsiveScreenWidth(5),
          fontSize: fontSize.modalText
      },
      toggleview: {
        marginLeft: responsiveScreenWidth(7),
        flexDirection: 'row',
        marginTop: responsiveScreenWidth(3)
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})