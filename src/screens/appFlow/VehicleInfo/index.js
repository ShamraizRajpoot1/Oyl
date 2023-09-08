import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import {scale} from 'react-native-size-matters';
import {Header2} from '../../../components/Header';
import ContinueModal from '../../../components/Modals/Continue';
import {appIcons} from '../../../services/utilities/assets';
import {AppStyles} from '../../../services/utilities/AppStyle';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../../navigation/AuthProvider';

const VehicleInfo = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [continueModalVisible, setContinueModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const add = () => {
    if (!vehicleMake || !vehicleModel || !vehicleYear || !vehicleColor|| !vehicleMileage) {
      Alert.alert('Please fill in all fields before submitting.');
      return; 
    }
    const docRef = firestore().collection('Users').doc(user.uid);

    docRef.update({
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
         
          setContinueModalVisible(true);
        })
        .catch(error => {
          console.log('Something went wrong', error);
          Alert.alert("Something went wrong");
        });
    
  };
  const toggleModal = () => {
    setContinueModalVisible(!continueModalVisible);
  };
  const Payment = () => {
    navigation.navigate('Payment');
  };
  useEffect(() => {
    if (isChecked) {
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
        } finally {
          setIsLoading(false); 
        }
      };
      fetchUserProfileData();
    } else {
      setVehicleMake('');
      setVehicleModel('');
      setVehicleYear('');
      setVehicleColor('');
      setVehicleMileage('');
    }
  }, [isChecked])
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 5}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        {isLoading ? (
          <View style={AppStyles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.buttonGradiant1} />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={AppStyles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.container}>
                <View style={{flex: 12, backgroundColor: colors.background2}}>
                  <Header2 Text="Vehicle Info" />
                </View>
                <View>
                  <Text style={AppStyles.largeBoldText}>
                    Please Enter Details
                  </Text>
                </View>
                <View style={styles.fieldContainer}>
                  <InputField
                    label="Vehicle Year"
                    placeholder="Enter year of your Vehicle"
                    onChangeText={setVehicleYear}
                    value={vehicleYear}
                    type="numeric"
                    backgroundColor={colors.background4}
                    maxLength={4}
                  />
                  <InputField
                    label="Vehicle Make"
                    placeholder="Enter the make of your Vehicle"
                    onChangeText={setVehicleMake}
                    value={vehicleMake}
                    type="default"
                    backgroundColor={colors.background4}
                  />
                  <InputField
                    label="Vehicle Model"
                    placeholder="Enter model of your Vehicle"
                    onChangeText={setVehicleModel}
                    value={vehicleModel}
                    type="default"
                    backgroundColor={colors.background4}
                  />

                  <InputField
                    label="Vehicle Color"
                    placeholder="Enter color of your Vehicle"
                    onChangeText={setVehicleColor}
                    value={vehicleColor}
                    type="email-address"
                    backgroundColor={colors.background4}
                  />
                  <InputField
                    label="Vehicle Mileage"
                    placeholder="If unknown enter approximate"
                    onChangeText={setVehicleMileage}
                    value={vehicleMileage}
                    type="default"
                    backgroundColor={colors.background4}
                  />
                  <View style={AppStyles.toggleview}>
                    <TouchableOpacity onPress={toggleCheckbox}>
                      <View style={styles.toggle}>
                        {isChecked && (
                          <Image
                            source={appIcons.checkTick}
                            style={styles.toggleimg}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={[
                        AppStyles.smallText,
                        {
                          fontFamily: fontFamily.RobotoBold,
                          marginLeft: scale(5),
                        },
                      ]}>
                      Pull info from profile here
                    </Text>
                  </View>
                </View>

                <View style={styles.button}>
                  <Button
                    text="ADD"
                    color={colors.buttonGradiant5}
                    textColor={colors.text6}
                    backgroundColor={colors.background4}
                    onPress={add}
                  />
                  {continueModalVisible && (
                    <ContinueModal
                      isVisible={continueModalVisible}
                      onBackdropPress={toggleModal}
                      Text={
                        'Vehicle has been added \nsuccessfully! One step \nleft!'
                      }
                      onPress={Payment}
                    />
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </>
  );
};
export default VehicleInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background2,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
    flex: 4,
    justifyContent: 'space-evenly',
  },
  toggleimg: {
    height: scale(10),
    width: scale(13),
  },
  toggle: {
    width: scale(18),
    height: scale(18),
    borderWidth: 2,
    borderColor: colors.border4,
    backgroundColor: colors.background2,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});
