import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
export const AppStyles = StyleSheet.create({
    centerMedium:{
        alignSelf: 'center',
        fontSize: responsiveFontSize (2),
        color: '#FFFFC8',
        fontFamily: 'Roboto'
    },
    lighttext: {
        fontSize: responsiveFontSize(1.7),
        color: '#FFFFFF',
        fontFamily: 'Poppins-Light'
    },
    smallBold:{
    color: '#444444',
    fontSize: responsiveFontSize(1.3),
    fontFamily:'Roboto-Bold'
    },
    smallText: {
      flex: 1,
      color: '#222222',
      borderRadius: responsiveScreenHeight(5),
      fontSize: responsiveFontSize(1.5),
      
    },
    largeBoldText: {
      alignSelf:'center',
      marginVertical: scale(18),
      color: '#222222',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(2.5),
    },
    semiboldtext: {
        fontSize: responsiveFontSize(1.7),
        color: '#FFFFC8',
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
        backgroundColor: 'black',
        height: responsiveScreenWidth(26),
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:8,
        shadowColor: '#FFFFC875',
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
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
      },
      input: {
        marginTop: responsiveScreenWidth(2),
        backgroundColor: '#F5F5F5',
        width: responsiveScreenWidth(80),
        height: responsiveScreenWidth(10),
        borderRadius: 3,
        fontSize: responsiveFontSize(1.5),
        paddingLeft: responsiveScreenWidth(2),
        fontFamily:'Poppins-Light'
      },
      modaltxt: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'Poppins-Medium',
        color: '#000000',
      },
      modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(90),
        padding: responsiveScreenWidth(2),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      OptionModalText:{
          fontFamily:'Roboto',
          color:'#444444',
          marginLeft: responsiveScreenWidth(5),
          fontSize: responsiveFontSize(2.2)
      },
      toggleview: {
        
        marginLeft: responsiveScreenWidth(7),
        flexDirection: 'row',
      },
})