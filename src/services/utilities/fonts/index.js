import { responsiveFontSize } from "react-native-responsive-dimensions"


const fontFamily = {
  RobotoRegular: 'Roboto',
  RobotoMedium : 'Roboto-Medium',
  RobotoBold: 'Roboto-Bold',
  MontserratBold: 'Montserrat-Bold',
  MontserratMedium: 'Montserrat-Medium',
  MontserratRegular: 'Montserrat-Regular',
  PoppinsRegular:'Poppins-Regular',
  PoppinsMedium:'Poppins-Medium',
  PoppinsBold:'Poppins-Bold',
  PoppinsLight:'Poppins-Light',
  PoppinsSemiBold:'Poppins-SemiBold',
}
const fontSize = {
  small:responsiveFontSize(1.1),
  lebal: responsiveFontSize(1.3),
  paymentText: responsiveFontSize(1.4),
  paymentBold: responsiveFontSize(5),
  paymentCount: responsiveFontSize(10),
  inputText: responsiveFontSize(1.5),
  medium: responsiveFontSize (2),
  popinsSmall: responsiveFontSize(1.7),
  large: responsiveFontSize(2.5),
  largeText:responsiveFontSize(3.5),
  time: responsiveFontSize(4),
  h1: responsiveFontSize(3),
  h3: responsiveFontSize(1.8),
  modalText:responsiveFontSize(2.2),
  buttonText:responsiveFontSize(2.2),
  buttonText2: responsiveFontSize(1.5),
 
}


export  {fontFamily,fontSize}

