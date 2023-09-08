import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  ImageBackground, // Import TouchableOpacity
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import ModalButton from '../../Button/ModalButton';
import Button from '../../Button';
import { appImages,appIcons } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';

const ContinueModal = props => {
  return (
   
     
      
      <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.onBackdropPress} 
      >
        <TouchableOpacity 
          style={styles.modalContainer}
          activeOpacity={1} 
          onPress={props.onBackdropPress} 
        >
            <ImageBackground source={appImages.background} imageStyle={{borderTopLeftRadius: 70,borderTopRightRadius: 70,}} >
          <View style={styles.modalContent}>
            <Image style={styles.image} source={appIcons.check} />
            
            <Text style={[styles.text,{marginTop: scale(15),fontFamily: fontFamily.RobotoBold,}]}>{props.Text}</Text>
            <View>
            <Text style={[styles.text,{fontSize: fontSize.large,marginTop:scale(10)}]}>{props.Text2}</Text>
            <Text  style={[styles.text,{fontSize: fontSize.medium,}]}>{props.Text3}</Text>
            
            </View>
            <View style={styles.button}>
            <Button 
            text="CONTINUE"
            color={colors.buttonGradiant8}
            textColor={colors.text4}
            onPress={props.onPress}
            />
            </View>
          </View>
          </ImageBackground>
          </TouchableOpacity>
      </Modal>
    
  );
};

export default ContinueModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.background1,
  },
  modalContent: {
   
    width: responsiveScreenWidth(100),
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow:0.3,
    
  },
  
  image: {
    marginTop: 20,
    width: scale(45),
    height: scale(45),
  },
  button:{
   
    marginBottom:responsiveScreenHeight(-10)
  },
  
  text:{
    color:'white',
    fontSize:fontSize.largeText,
    fontFamily:fontFamily.RobotoMedium,
    textAlign:'center'
  },
  textContainer: {
    alignContent:'center'
  }
});
