import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {scale} from 'react-native-size-matters';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {appIcons} from '../../services/utilities/assets';
import {AppStyles} from '../../services/utilities/AppStyle';
import { Location, OilType } from '../Modals';

const InputField = props => {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [location, setLocation] = useState(false);
  const [oilType, setOilType] = useState(false);

  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  const handleDatePicked = pickedDate => {
    const day = pickedDate.getDate().toString().padStart(2, '0');
    const month = (pickedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = pickedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setDatePicker(false);
    if (props.onChangeText) {
      props.onChangeText(formattedDate);
    }
  };
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(prev => !prev);
  };
  const toggleCalendar = () => {
    setDatePicker(prev => !prev);
  };
  const toggleLocation = () => {
    setLocation(prev => !prev);
  };
  const toggleOilType = () => {
    setOilType(prev => !prev);
  };
  const containerStyle = {
    ...styles.container,
    backgroundColor: props.backgroundColor || '#FFFFC8',
  };

  return (
    <View style={containerStyle}>
      <Text style={[AppStyles.smallBold, {marginLeft: scale(6)}]}>
        {props.label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            AppStyles.smallText,
            {padding: responsiveScreenHeight(1),marginVertical:props.marginTop , width: '80%',fontFamily: props.fontFamily ,},
          ]}
          placeholder={props.placeholder}
         
          placeholderTextColor={props.color? props.color :"rgba(34, 34, 34, 0.5)"}
          onChangeText={props.onChangeText}
          onFocus={() => {if (props.calendar) { setDatePicker(true)}
          else if(props.location) {setLocation(true)}
          else if(props.oilType) {setOilType(true)}
        }}
          value={props.value}
          keyboardType={props.type}
          secureTextEntry={secureTextEntry && props.secureTextEntry}
          calendar={calendar}
          maxLength={props.maxLength}
        />
        {props.secureTextEntry && (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <Image source={appIcons.eye} style={styles.passwordIcon} />
          </TouchableOpacity>
        )}
        {props.calendar && (
          <TouchableOpacity onPress={toggleCalendar}>
            <Image source={appIcons.calendar} style={styles.passwordIcon} />
          </TouchableOpacity>
        )}
        {props.location && (
          <TouchableOpacity
          onPress={toggleLocation}>
          <Image
            style={styles.passwordIcon}
            source={appIcons.location}
          />
        </TouchableOpacity>
        )}
        {props.OilType && (
          <TouchableOpacity
          onPress={toggleOilType}>
          <Image
            style={styles.passwordIcon}
            source={appIcons.oil}
          />
        </TouchableOpacity>
        )}
      </View>
      {datePicker && (
        <DateTimePicker
          isVisible={datePicker}
          onConfirm={handleDatePicked}
          onCancel={() => setDatePicker(false)}
          mode="date"
        />
      )}
      {location && (
                <Location
                  isVisible={location}
                  onBackdropPress={toggleLocation}
                  onChangeText={props.onChangeText}
                  value={props.value}
                  onPress={toggleLocation}
                />
              )}
              {OilType && (
                <OilType
                  isVisible={oilType}
                  onBackdropPress={toggleOilType}
                  onChangeText={props.onChangeText}
                  value={props.value}
                  onPress={toggleOilType}
                />
              )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFC8',
    marginHorizontal: responsiveScreenWidth(7),
    marginVertical: responsiveScreenWidth(2),
    borderRadius: scale(10),
    padding: '1%',
    width: '86%',
    elevation: 6,
    
  },
  calendar: {
    width: responsiveScreenHeight(10),
  },
  inputContainer: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordIcon: {
    width: scale(7),
    height: scale(7),
    marginRight: 10,
    alignItems: 'center',
  },

  passwordIcon: {
    width: responsiveScreenHeight(3),
    height: responsiveScreenHeight(3),
    marginRight: 20,
    marginBottom: '30%',
  },
});

export default InputField;
