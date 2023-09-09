import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import Header from '../../../components/Header/Header1';
import {AppStyles} from '../../../services/utilities/AppStyle';
import { appImages } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';

const EditProfile = ({navigation}) => {

  const handleBackPress = () => {
   navigation.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove();
  }, []);

  const {user} = useContext(AuthContext);
  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [optionModalVisible, setOptionModalVisible] = useState(false);

  const update = () => {
    const docRef = firestore().collection('Users').doc(user.uid);

    docRef.update({
          userId: user.uid,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          birthday:birthday,
          vehicleInfo:{
          vehicleMake: vehicleMake,
          vehicleModel: vehicleModel,
          vehicleYear:vehicleYear,
          vehicleColor: vehicleColor,
          vehicleMileage: vehicleMileage
          }
          
        })
        .then(() => {
          console.log('Profile Updated successful');
          Alert.alert("Profile Updated successfull");
          navigation.goBack();
        })
        .catch(error => {
          console.log('Something went wrong', error);
        });
    
  };
  const back = () => {
    navigation.goBack();
  };
  
  useEffect(() => {
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
            <ScrollView contentContainerStyle={AppStyles.contentContainer} 
             keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
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
                      color={colors.buttonGradiant2}
                      textColor={colors.text4}
                      onPress={update}
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
