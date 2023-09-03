import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header/Header1';
import {ImageBackground} from 'react-native';
import {AppStyles} from '../../../services/utilities/AppStyle';
import {appImages} from '../../../services/utilities/assets';
import InputField from '../../../components/InputField';
import {Options} from '../../../components/Modals';

const UserProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [optionModalVisible, setOptionModalVisible] = useState(false);

  const toggleModal = () => {
    setOptionModalVisible(prev => !prev);
  };
  return (
    <>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      <ImageBackground
        source={appImages.background}
        style={AppStyles.backgroundImage}>
        <View style={{flex: 1}}>
          <Header 
            text="User Profile"
            options={true}
            onPress={toggleModal}
          />

          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={AppStyles.contentContainer}>
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
                      type="default"
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
                    {optionModalVisible && (
                      <Options
                        isVisible={optionModalVisible}
                        onBackdropPress={toggleModal}
                      />
                    )}
                  </View>
                  {optionModalVisible && (
                    <Options
                      isVisible={optionModalVisible}
                      onBackdropPress={toggleModal}
                    />
                  )}
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </>
  );
};

export default UserProfile;

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
