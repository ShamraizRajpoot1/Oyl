import {ScrollView, StatusBar, StyleSheet, Text, View, BackHandler} from 'react-native';
import React,{useState} from 'react';
import {AppStyles} from '../../../services/utilities/AppStyle';
import {ImageBackground} from 'react-native';
import {Header1} from '../../../components/Header';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CardView from '../../../components/Card';
import { CardDetail,ContinueModal } from '../../../components/Modals';
import { appImages } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';

const Payment = ({navigation}) => {
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
    
  const [cardDetailModalVisible, setCardDetailModalVisible] = useState(false);
  const [continueModalVisible, setContinueModalVisible] = useState(false);
  const Card = () => {
    setCardDetailModalVisible(!cardDetailModalVisible);
  };
  const toggleModal = () => {
    setCardDetailModalVisible(!cardDetailModalVisible);
    Continue();
  };
  const  Continue = () =>{
    setContinueModalVisible(true);
    console.log(continueModalVisible)
  }
  const toggleContinueModal = () => {
    setContinueModalVisible(!continueModalVisible);
    
  };
  const back = () => {
    navigation.navigate('VehicleInfo');
  };
  const Home = () => {
    navigation.navigate('ThankYou');
  };
  
  return (
    <>
      <View style={{flex: 1}}>
     
        <Header1
          Image={true}
          text="Select Price & Payment Method"
          onPress={back}
        />
        <ImageBackground
          source={appImages.background}
          style={AppStyles.backgroundImage}>
          <ScrollView style={{flex: 0.9}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <View style={styles.topContainer}>
                <View
                  style={[
                    styles.top,
                    {borderTopRightRadius: 40, borderTopLeftRadius: 40},
                  ]}></View>
                <View style={styles.center}>
                  <Text style={styles.Text}>
                    YOUR OYL AND FYLTER CHANGE WILL BE
                  </Text>
                  <View style={styles.money}>
                    <Text style={styles.dollar}>$</Text>
                    <Text style={styles.count}>87</Text>
                  </View>
                  <Text style={styles.Text}>
                    THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES -{"\n"} SHOOT WE'LL
                    EVEN TOP OFF YOUR WASHER FLUID
                  </Text>
                  <Text style={styles.Text}>AND AIR UP YOUR TIRES</Text>
                </View>
                <View
                  style={[
                    styles.top,
                    {borderBottomLeftRadius: 40, borderBottomRightRadius: 40},
                  ]}></View>
                <Text style={styles.cardText}>Payment Methods</Text>
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.imageContainer}>
                  <CardView
                    source={appImages.stripe}
                    onPress={Card}
                  />
                  <CardView
                    source={appImages.androidPay}
                    onPress={Card}
                  />
                  <CardView onPress={Card}
                    source={appImages.applePay}
                  />
                </View>
                <View style={styles.imageContainer}>
                  <CardView onPress={Card}
                    source={appImages.bitPay}
                  />
                  <CardView onPress={Card}
                    source={appImages.affrim}
                  />
                  <CardView 
                    source={appImages.klarna}
                    onPress={Card}
                  />
                </View>
              </View>
              {cardDetailModalVisible && <CardDetail 
              isVisible={cardDetailModalVisible}
              onBackdropPress={Card}
              onPress={toggleModal}
              />}
               {continueModalVisible && 
            <ContinueModal 
            isVisible={continueModalVisible}
            onBackdropPress={toggleContinueModal}
            Text="Congratulations!"
            Text2={"We will see you on "}
            Text3={"[DATE SCHEDULED]"}
            onPress={Home}
            />
            }
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    width: '80%',
    justifyContent: 'center',
    margin: '10%',
    alignItems: 'center',
  },
  top: {
    height: responsiveScreenWidth(8),
    width: '100%',
    backgroundColor: colors.background3,
  },
  center: {
    backgroundColor: colors.background2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '5%',
  },
  
  Text: {
    textAlign:'center',
    color: colors.text4,
    fontSize: fontSize.paymentText,
    fontFamily: fontFamily.RobotoRegular
  },
  money: {
    flexDirection: 'row',
  },
  dollar: {
    color: colors.text4,
    fontFamily: fontFamily.RobotoBold,
    fontSize: fontSize.paymentBold,
  },
  count: {
    fontSize: responsiveFontSize(10),
    color: colors.text4,
    fontFamily: fontFamily.RobotoBold,
  },
  cardText: {
    color: colors.text3,
    fontFamily: fontFamily.RobotoMedium,
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: fontSize.medium,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
  },
});
