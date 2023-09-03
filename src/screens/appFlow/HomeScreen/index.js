import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import TimeField from '../../../components/TimeField';
import {scale} from 'react-native-size-matters';
import Button from '../../../components/Button';

import InputField from '../../../components/InputField';

import DateFlatList from '../../../components/FlatList';

import {Header2} from '../../../components/Header';

import {AppStyles} from '../../../services/utilities/AppStyle';

const Home = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOilModalVisible, setIsOilModalVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [oilType, setOilType] = useState('');
  // const toggleModal = () => {
  //   setIsModalVisible(!isModalVisible);
  // };
  // const toggleOilModal = () => {
  //   setIsOilModalVisible(!isOilModalVisible);
  // };

  const VehicleInfo = () => {
    navigation.navigate('VehicleInfo');
  };
  const [hours, setHours] = useState('');
  const [minuts, setMinuts] = useState('');
  const [selectedOption, setSelectedOption] = useState('AM');
  const handleOptionPress = option => {
    setSelectedOption(option);
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header2 style={{flex: 4}} Text="Schedule a Time" />
      </View>

      <KeyboardAvoidingView
        style={{flex: 4.5}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}>
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={AppStyles.contentContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={{flex: 3}}>
                <Text style={AppStyles.largeBoldText}>
                  Please Enter Details
                </Text>
                <View style={styles.dateContainer}>
                  <DateFlatList />
                </View>
                <View style={styles.timecontainer}>
                  <Text style={[AppStyles.smallBold, {marginTop: 5}]}>
                    Enter Time
                  </Text>
                  <View style={styles.time}>
                    <TimeField
                      placeholder="05"
                      onChangeText={setHours}
                      value={hours}
                      type="phone-pad"
                      hasDate={true}
                    />
                    <Text
                      style={[
                        AppStyles.largeBoldText,
                        {fontSize: responsiveFontSize(5)},
                      ]}>
                      :
                    </Text>
                    <TimeField
                      placeholder="00"
                      onChangeText={setMinuts}
                      value={minuts}
                      type="phone-pad"
                    />
                    <View style={styles.timeam}>
                      <Text
                        style={[
                          styles.am,
                          {borderBottomWidth: scale(0.8)},
                          selectedOption === 'AM' && {
                            ...styles.selectedOption,
                            borderTopLeftRadius: scale(10),
                            borderTopRightRadius: scale(10),
                          },
                        ]}
                        onPress={() => handleOptionPress('AM')}>
                        AM
                      </Text>
                      <Text
                        style={[
                          styles.am,
                          selectedOption === 'PM' && {
                            ...styles.selectedOption,
                            borderBottomRightRadius: scale(10),
                            borderBottomLeftRadius: scale(10),
                          },
                        ]}
                        onPress={() => handleOptionPress('PM')}>
                        PM
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flex:3,justifyContent:'space-between'}}>
               
                <InputField


                style={styles.location}
                  label="Birthday"
                  placeholder="Please enter your address"
                  onChangeText={setLocation}
                  value={location}
                  type="default"
                  location={true}
                  backgroundColor="#F7F7F7"
                  color={'#444444CC'}
                  
                />
                <InputField
                  label="Oil Type"
                  marginTop={scale(-5)}
                  placeholder={
                    'Please select Oil type from here \n(All Oil High Quality Synthetic)'
                  }
                  color={'#444444CC'}
                  onChangeText={setOilType}
                  value={oilType}
                  type="default"
                  OilType={true}
                  backgroundColor="#F7F7F7"
                />
                
                <View style={styles.button}>
                  <Button
                    text="Lock it in!"
                    startColor="#FFFFC8"
                    endColor="#FFFFC8"
                    textColor="black"
                    onPress={VehicleInfo}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  text: {
    color: '#222222',
    fontFamily: 'Roboto-Bold',
    fontSize: responsiveFontSize(2.5),
    marginVertical: responsiveScreenHeight(2),
  },
  dateContainer: {
    height: responsiveScreenHeight(12),
    alignItems: 'center',
  },
  timecontainer: {
    marginLeft: responsiveScreenHeight(3),
    marginBottom: responsiveScreenHeight(4),
  },

  time: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: responsiveScreenWidth(6),
    marginTop: scale(20),
  },
  timeam: {
    height: scale(80),
    width: scale(40),
    borderWidth: scale(0.8),
    borderColor: '#000000',
    borderRadius: scale(10),
  },
  am: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    paddingVertical: scale(9.3),
    color: '#000000',
  },
  selectedOption: {
    width: '100%',
    height: '49%',
    backgroundColor: '#FFFFC8',
  },
  location: {
    marginBottom: responsiveScreenHeight(3),
    elevation: 6,
  },

  button: {
    marginVertical: scale(15),
    alignItems: 'center',
  
  },
});
