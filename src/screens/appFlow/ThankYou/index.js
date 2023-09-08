import { Image, ImageBackground, StyleSheet, StatusBar, Text, View, TouchableOpacity,Linking } from 'react-native'
import React,{useEffect} from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters'
import Button from '../../../components/Button'
import { appIcons, appImages } from '../../../services/utilities/assets'
import { colors } from '../../../services/utilities/colors'
import { fontFamily, fontSize } from '../../../services/utilities/fonts'

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
    const handleFacebookPress = () => {
        const facebookProfileURL = 'https://www.facebook.com/shamraiz.iqbal.351104?mibextid=ZbWKwL';
        Linking.openURL(facebookProfileURL);
      };
    
      const handleInstagramPress = () => {
        const instagramProfileURL = 'https://instagram.com/shamraiz_rajpoot1?utm_source=qr&igshid=OGIxMTE0OTdkZA==';
        Linking.openURL(instagramProfileURL);
      };
  return (
     <>
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
             <TouchableOpacity onPress={handleFacebookPress}>
            <Image style={styles.icon} source={appIcons.facebook} /></TouchableOpacity>
            <TouchableOpacity onPress={handleInstagramPress}><Image style={styles.icon} source={appIcons.insta} /></TouchableOpacity>
        </View>
        <Button
                width={responsiveScreenWidth(50)}
                  text="Go Home"
                  color={colors.buttonGradiant7}
                  textColor={colors.text4}
                  backgroundColor={colors.background4}
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
        backgroundColor:colors.background3,
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        width:responsiveScreenWidth(50),
        height: responsiveScreenWidth(50),
        backgroundColor:colors.background2,
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
        fontSize: fontSize.time,
        fontFamily: fontFamily.RobotoBold,
        color:colors.text6
    },
    text:{
       fontSize: fontSize.large,
       color:colors.text6
    },
    icon:{
        width: scale(50),
        height: scale(50),
        marginHorizontal:responsiveScreenWidth(2)
    }
})