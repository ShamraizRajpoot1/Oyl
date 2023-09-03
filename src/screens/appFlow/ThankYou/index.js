import { Image, ImageBackground, StyleSheet, StatusBar, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { AppStyles } from '../../../services/utilities/AppStyle'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
import Button from '../../../components/Button'
import { appIcons, appImages } from '../../../services/utilities/assets'

const ThankYou = ({navigation}) => {
    const Home = ()=>{
        navigation.navigate('Home')
    }
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return()=>{
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    });
  return (
     <>
    {/* <StatusBar backgroundColor="#FFFFFF" barStyle= 'dark-content' /> */}
    <View style={{flex:1}}>
      <View style={styles.topContainer}>
        <View style={styles.circle}>
            <Image style={styles.image} source={appIcons.thumb} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
      <ImageBackground style={styles.ImageBackground} source={appImages.background} >
        <Text style={styles.boldText}>Thank You!</Text>
        <View style={{alignItems:'center'}}>
        <Text style={styles.text}>Thanks for using our app, We hope </Text>
        <Text style={styles.text}>you like it and use it again.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            <Image style={styles.icon} source={appIcons.facebook} />
            <Image style={styles.icon} source={appIcons.insta} />
        </View>
        <Button
                width={responsiveScreenWidth(50)}
                  text="Go Home"
                  startColor="#FFFFC8"
                  endColor="#FFFFFF"
                  textColor="#000000"
                  backgroundColor="#F7F7F7"
                  onPress={Home}
                />
      </ImageBackground>
      </View>
    </View>
    </>
  )
}

export default ThankYou

const styles = StyleSheet.create({
    topContainer:{
        flex:1,
        backgroundColor:'#FFFFC8',
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        width:responsiveScreenWidth(50),
        height: responsiveScreenWidth(50),
        backgroundColor:'white',
        borderRadius: 300,
        alignItems: 'center',
        justifyContent:'center'
    },
    bottomContainer:{
        flex:1,
        backgroundColor:null,
        alignItems:'center',
        justifyContent:'center'
    },
    ImageBackground:{
        flex:1,width:'100%',
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    image:{
        width:scale(130),
        height: scale(120),
        marginBottom: responsiveScreenHeight(5),
    },
    boldText:{
        fontSize: responsiveFontSize(4),
        fontFamily: 'Roboto-Bold',
        color:'white'
    },
    text:{
       fontSize: responsiveFontSize(2.5),
       color:'white'
    },
    icon:{
        width: scale(50),
        height: scale(50),
        marginHorizontal:responsiveScreenWidth(2)
    }
})