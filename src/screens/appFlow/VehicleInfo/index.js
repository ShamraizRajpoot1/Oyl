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
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import {scale} from 'react-native-size-matters';
import { Header2 } from '../../../components/Header';
import ContinueModal from '../../../components/Modals/Continue';
import { appIcons } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/AppStyle';


const VehicleInfo = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };

  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehicleMileage, setVehicleMileage] = useState('');
  const [continueModalVisible, setContinueModalVisible] = useState(false);
  const add = () =>{
    setContinueModalVisible(true)
  }
  const toggleModal = () => {
    setContinueModalVisible(!continueModalVisible);
  };
  const Payment =() =>{
    navigation.navigate('Payment')
  }
  
  return (
    <>
      
      <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
    <Header2 
    Text="Vehicle Info"
    />
    </View>
      <KeyboardAvoidingView
        style={{flex: 5}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <ScrollView contentContainerStyle={AppStyles.contentContainer} showsVerticalScrollIndicator={false} >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View >
                <Text style={AppStyles.largeBoldText}>Please Enter Details</Text>
              </View>
              <View style={styles.fieldContainer}>
                <InputField
                  label="Vehicle Year"
                  placeholder="Enter year of your Vehicle"
                  onChangeText={setVehicleYear}
                  value={vehicleYear}
                  type="numeric"
                  backgroundColor="#F7F7F7"
                  maxLength={4}
                />
                <InputField
                  label="Vehicle Make"
                  placeholder="Enter the make of your Vehicle"
                  onChangeText={setVehicleMake}
                  value={vehicleMake}
                  type="default"
                  backgroundColor="#F7F7F7"
                />
                <InputField
                  label="Vehicle Model"
                  placeholder="Enter model of your Vehicle"
                  onChangeText={setVehicleModel}
                  value={vehicleModel}
                  type="default"
                  backgroundColor="#F7F7F7"
                />

                <InputField
                  label="Vehicle Color"
                  placeholder="Enter color of your Vehicle"
                  onChangeText={setVehicleColor}
                  value={vehicleColor}
                  type="email-address"
                  backgroundColor="#F7F7F7"
                />
                <InputField
                  label="Vehicle Mileage"
                  placeholder="If unknown enter approximate"
                  onChangeText={setVehicleMileage}
                  value={vehicleMileage}
                  type="default"
                  backgroundColor="#F7F7F7"
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
                  <Text style={[AppStyles.smallText,{fontFamily:'Roboto-Medium',marginLeft: scale(5)}]}>
                    Pull info from profile here
                  </Text>
                </View>
              </View>

              <View style={styles.button}>
                <Button
                  text="ADD"
                  startColor="#514B46"
                  endColor="#000000"
                  textColor="#FFFFFF"
                  backgroundColor="#F7F7F7"
                  onPress={add}
                />
                {continueModalVisible && 
            <ContinueModal 
            isVisible={continueModalVisible}
            onBackdropPress={toggleModal}
            Text={"Vehicle has been added \nsuccessfully! One step \nleft!"}
           
            onPress={Payment}
            />
            }
              </View>
            </View>
            
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default VehicleInfo;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
});
