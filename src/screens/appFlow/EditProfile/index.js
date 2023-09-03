import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Header from '../../../components/Header/Header1';
import {AppStyles} from '../../../services/utilities/AppStyle';
import { Options } from '../../../components/Modals';
import { appImages } from '../../../services/utilities/assets';


const EditProfile = ({navigation}) => {

  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [optionModalVisible, setOptionModalVisible] = useState(false);

  const login = () => {
    navigation.navigate('AppStack');
  };
  const back = () => {
    navigation.goBack();
  };
  
  const toggleModal = () => {
    setOptionModalVisible(prev => !prev);
  };
  // useEffect( async() => {
  //   console.log(optionModalVisible)
  //   await toggleModal();
  //   console.log(optionModalVisible)
  // }, []);
  return (
    <>
      <ImageBackground
        source={appImages.background}
        style={AppStyles.backgroundImage}>
        <View style={{flex: 1}}>
          <Header
            textColor={true}
            background={true}
            onPress={back}
            text="Edit Profile"
            Image={true}
          />

          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
            <ScrollView contentContainerStyle={AppStyles.contentContainer} showsVerticalScrollIndicator={false}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                  <View style={styles.field}>
                    <InputField
                      label="First Name"
                      placeholder="Enter Your name here"
                      onChangeText={setFirstName}
                      value={firstName}
                      type="default"
                    />
                    <InputField
                      label="Last Name"
                      placeholder="Enter Your last name here"
                      onChangeText={setLastName}
                      value={lastName}
                      type="default"
                    />
                    <InputField
                      label="Birthday"
                      placeholder="09/08/2000"
                      onChangeText={setBirthday}
                      value={birthday}
                      type="default"
                      calendar={true}
                    />
                    <InputField
                      label="Vehicle Make"
                      placeholder="Enter the make of your Vehicle"
                      onChangeText={setVehicleMake}
                      value={vehicleMake}
                      type="default"
                    />
                    <InputField
                      label="Vehicle Model"
                      placeholder="Enter model of your Vehicle"
                      onChangeText={setVehicleModel}
                      value={vehicleModel}
                      type="default"
                    />
                    <InputField
                      label="Vehicle Year"
                      placeholder="Enter year of your Vehicle"
                      onChangeText={setVehicleYear}
                      value={vehicleYear}
                      type="numeric"
                      maxLength={4}
                    />
                    <InputField
                      label="Vehicle Color"
                      placeholder="Enter color of your Vehicle"
                      onChangeText={setVehicleColor}
                      value={vehicleColor}
                      type="email-address"
                    />
                    <InputField
                      label="Vehicle Mileage"
                      placeholder="If unknown enter approximate"
                      onChangeText={setVehicleMileage}
                      value={vehicleMileage}
                      type="default"
                    />
                  </View>
                  <View style={styles.button}>
                    <Button
                      text="DONE"
                      startColor="#FFFFFF"
                      endColor="#FFFFCC"
                      textColor="black"
                      onPress={login}
                    />
                    
                  </View>
                  
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    flex: 9,
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditProfile;
