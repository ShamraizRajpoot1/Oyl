import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  StatusBar,
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

const ContinueModal = props => {
  return (
    <>
      <StatusBar hidden={true} />
      
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
            
            <Text style={[styles.text,{marginTop: scale(15),fontFamily: 'Roboto-Bold',}]}>{props.Text}</Text>
            <Text style={[styles.text,{fontSize: responsiveFontSize(2.4),marginTop:scale(10)}]}>{props.Text2}</Text>
            <Text  style={[styles.text,{fontSize: responsiveFontSize(2),}]}>{props.Text3}</Text>
            <View style={styles.button}>
            <Button 

            text="CONTINUE"
            startColor="#FFFFFF"
            endColor="#FFFFC8"
            textColor="#000000"
            onPress={props.onPress}
            />
            </View>
          </View>
          </ImageBackground>
          </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ContinueModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
   
    width: responsiveScreenWidth(100),
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize:responsiveFontSize(3.5),
    fontFamily:'Roboto-Medium',
    textAlign:'center'
  },
  textContainer: {
    alignContent:'center'
  }
});
