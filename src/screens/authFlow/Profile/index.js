import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Header from '../../../components/Header/Header1';
import {AppStyles} from '../../../services/utilities/AppStyle';

const Profile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const Home = () => {
    navigation.navigate('AppStack');
  };

  return (
    <>
<StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
    <Header text="Set Up Your Profile" />
    <View style={{flex: 1}}>
      
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={AppStyles.backgroundImage}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
          <ScrollView contentContainerStyle={AppStyles.contentContainer}>
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
                    type="numeric"
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
                    onPress={Home}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
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

export default Profile;
