import React, {useContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  StyleSheet,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  BackHandler,
  ActivityIndicator
} from 'react-native';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Header from '../../../components/Header/Header1';
import {AppStyles} from '../../../services/utilities/AppStyle';
import { appImages } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import { AuthContext } from '../../../navigation/AuthProvider';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const {user} = useContext(AuthContext)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleBackPress = () => {
    return true; 
  };
  const Home = async () => {
    if (
      !user ||
      !user.uid ||
      !firstName ||
      !lastName ||
      !birthday ||
      !vehicleMake ||
      !vehicleModel ||
      !vehicleYear ||
      !vehicleColor ||
      !vehicleMileage
    ) {
      Toast.show('Please fill in all fields', Toast.LONG);
      return;
    }
    setIsLoading(true);
    const formattedBirthday = formatDateToYYYYMMDD(birthday);
    firestore()
      .collection('Users')
      .doc(user.uid)
      .set({
        userId: user.uid,
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        birthday: formattedBirthday, 
        vehicleInfo: {
          vehicleMake: vehicleMake,
          vehicleModel: vehicleModel,
          vehicleYear: vehicleYear,
          vehicleColor: vehicleColor,
          vehicleMileage: vehicleMileage,
        },
      })
      .then(async () => {
        console.log('User Registered');
        Toast.show('User Registered', Toast.LONG);
        await AsyncStorage.setItem('Token', user.uid);
        navigation.navigate('AppStack');
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('Something went wrong', error);
      });
  };
  const formatDateToYYYYMMDD = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress
    );
    return () => backHandler.remove();
  }, []);

  return (
    <>
    <Header text="Set Up Your Profile" />
    <View style={{flex: 1}}>
      
      <ImageBackground
        source={appImages.background}
        style={AppStyles.backgroundImage}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
             {isLoading ? (
          <View style={AppStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.buttonGradiant1} />
          </View>
        ) : (
          <ScrollView contentContainerStyle={AppStyles.contentContainer} 
          keyboardShouldPersistTaps="handled"
          >
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
                    color={colors.buttonGradiant1}
                    textColor={colors.text4}
                    onPress={Home}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>)}
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
