import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Header from '../../../components/Header/Header1';
import {ImageBackground} from 'react-native';
import {AppStyles} from '../../../services/utilities/AppStyle';
import {appImages} from '../../../services/utilities/assets';
import InputField from '../../../components/InputField';
import {Options} from '../../../components/Modals';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';
import { colors } from '../../../services/utilities/colors';

const UserProfile = () => {

  const {user} = useContext(AuthContext)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [optionModalVisible, setOptionModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBackPress = () => {
     return true;
   };
   useEffect(() => {
     const backHandler = BackHandler.addEventListener(
       'hardwareBackPress',
       handleBackPress,
     );
     return () => backHandler.remove();
   }, []);

  const toggleModal = () => {
 
    setOptionModalVisible(prev => !prev);
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchUserProfileData = async () => {
      try {
        const userDoc = await firestore()
          .collection('Users')
          .doc(user.uid)
          .get();

        if (userDoc.exists) {
          const userData = userDoc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setBirthday(userData.birthday);
          setVehicleMake(userData.vehicleInfo.vehicleMake);
          setVehicleModel(userData.vehicleInfo.vehicleModel);
          setVehicleYear(userData.vehicleInfo.vehicleYear);
          setVehicleColor(userData.vehicleInfo.vehicleColor);
          setVehicleMileage(userData.vehicleInfo.vehicleMileage);
        } else {
          console.log('User data not found in Firestore');
        }
      } catch (error) {
        console.error('Error fetching user data from Firestore', error);
      }
      finally {
        setIsLoading(false); 
      }
    };

    fetchUserProfileData();
  }, []); 

  return (
    <>
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
              {isLoading ? (
          <View style={AppStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.buttonGradiant1} />
          </View>
        ) :
            (<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={AppStyles.contentContainer}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
               keyboardShouldPersistTaps="handled"
              >
                <View style={{flex: 1}}>
                  <View style={styles.field}>
                    <InputField
                      label="First Name"
                      placeholder="Enter Your name here"
                      onChangeText={setFirstName}
                      value={firstName}
                      type="default"
                      editable={false}
                    />
                    <InputField
                      label="Last Name"
                      placeholder="Enter Your last name here"
                      onChangeText={setLastName}
                      value={lastName}
                      type="default"
                      editable={false}
                    />
                    <InputField
                      label="Birthday"
                      placeholder="09/08/2000"
                      onChangeText={setBirthday}
                      value={birthday}
                      type="default"
                      editable={false}
                    />
                    <InputField
                      label="Vehicle Make"
                      placeholder="Enter the make of your Vehicle"
                      onChangeText={setVehicleMake}
                      value={vehicleMake}
                      type="default"
                      editable={false}
                    />
                    <InputField
                      label="Vehicle Model"
                      placeholder="Enter model of your Vehicle"
                      onChangeText={setVehicleModel}
                      value={vehicleModel}
                      type="default"
                      editable={false}
                    />
                    <InputField
                      label="Vehicle Year"
                      placeholder="Enter year of your Vehicle"
                      onChangeText={setVehicleYear}
                      value={vehicleYear}
                      type="default"
                      editable={false}
                    />
                    <InputField
                      label="Vehicle Color"
                      placeholder="Enter color of your Vehicle"
                      onChangeText={setVehicleColor}
                      value={vehicleColor}
                      type="email-address"
                      editable={false}
                    />
                    <InputField
                      label="Vehicle Mileage"
                      placeholder="If unknown enter approximate"
                      onChangeText={setVehicleMileage}
                      value={vehicleMileage}
                      type="default"
                      editable={false}
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
            </ScrollView> ) }
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
