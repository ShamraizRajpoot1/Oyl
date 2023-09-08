import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
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
import {colors} from '../../../services/utilities/colors';
import {fontFamily, fontSize} from '../../../services/utilities/fonts';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/AuthProvider';
const Home = ({navigation}) => {
  const {user} = useContext(AuthContext)
  const getTime = () => {
    const formattedHour =  hours.toString();
    const formattedMinute =  minuts.toString();
    const ampm = selectedOption; 
    return formattedHour + ':' + formattedMinute + ' ' + ampm;
  };
  const [location, setLocation] = useState('');
  const [oilType, setOilType] = useState('');
  const VehicleInfo = () => {
    if (!hours || !minuts || !location || !oilType) {
      Alert.alert('Please fill in all fields before submitting.');
      return; 
    }
    const formattedTime = getTime(hours, minuts, selectedOption);
    console.log(formattedTime);
    firestore ()
        .collection('Schedule')
        .doc(user.uid)
        .set({
          userId: user.uid,
          date: selectedDate,
          time: formattedTime,
          location: location,
          oilType: oilType,
        })
        .then(() => {
          console.log('User Registered');
        })
        .catch(error => {
          console.log('Something went wrong', error);
        });
    navigation.navigate('VehicleInfo');
  };
  const [hours, setHours] = useState('');
  const [minuts, setMinuts] = useState('');
  const [selectedOption, setSelectedOption] = useState('AM');
  const handleOptionPress = option => {
    setSelectedOption(option);
  };
  const [selectedDate, setSelectedDate] = useState();
  const handleSelect = (value) => {
    const date = new Date(value);
    const formattedDate = date.toDateString(); 
    setSelectedDate(formattedDate);
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: colors.background2}}>
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
                  <DateFlatList onSelect={handleSelect}/>
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
              <View style={{flex: 3, justifyContent: 'space-between'}}>
                <InputField
                  style={styles.location}
                  label="Location"
                  placeholder="Please enter your address"
                  onChangeText={setLocation}
                  value={location}
                  type="default"
                  location={true}
                  backgroundColor={colors.field2}
                  color={colors.text5}
                />
                <InputField
                  label="Oil Type"
                  marginTop={scale(-5)}
                  placeholder={
                    'Please select Oil type from here \n(All Oil High Quality Synthetic)'
                  }
                  color={colors.text5}
                  onChangeText={setOilType}
                  value={oilType}
                  type="default"
                  OilType={true}
                  backgroundColor={colors.field2}
                />

                <View style={styles.button}>
                  <Button
                    text="Lock it in!"
                    color={colors.buttonGradiant3}
                    textColor={colors.text4}
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
    backgroundColor: colors.background2,
  },

  text: {
    color: colors.text1,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.large,
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
    borderColor: colors.border4,
    borderRadius: scale(10),
  },
  am: {
    fontSize: fontSize.medium,
    textAlign: 'center',
    paddingVertical: scale(9.3),
    color: colors.text4,
  },
  selectedOption: {
    width: '100%',
    height: '49%',
    backgroundColor: colors.background3,
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
