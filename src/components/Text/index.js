import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions'

const PrivacyText = () => {
  return (
    <View>
      <Text style={styles.text}>
     
                  Integer at faucibus urna. Nullam condimentum leo id elit
                  sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec
                  elementum diam elementum. Etiam elementum euismod commodo.
                  Proin eleifend eget quam ut efficitur. Mauris a accumsan
                  mauris.{"\n"} {"\n"}Phasellus egestas et risus sit amet hendrerit. Nulla
                  facilisi. Cras urna sem, vulputate sed condimentum a, posuere
                  vel enim.{"\n"} {"\n"}Integer at faucibus urna. Nullam condimentum leo id
                  elit sagittis auctor. Curabitur elementum nunc a leo
                  imperdiet, nec elementum diam elementum. Etiam elementum
                  euismod commodo.{"\n"}{"\n"}Proin eleifend eget quam ut efficitur. Mauris
                  a accumsan mauris. Phasellus egestas et risus sit amet
                  hendrerit. Nulla facilisi. Cras urna sem, vulputate sed
                  condimentum a, posuere vel enim.{"\n"}{"\n"}Integer at faucibus urna.
                  Nullam condimentum leo id elit sagittis auctor. Curabitur
                  elementum nunc a leo imperdiet, nec elementum diam elementum.
                  Etiam elementum euismod commodo. Proin eleifend eget quam ut
                  efficitur. Mauris a accumsan mauris.{"\n"}{"\n"}Phasellus egestas et
                  risus sit amet hendrerit. Nulla facilisi. Cras urna sem,
                  vulputate sed condimentum a, posuere vel enim.
                </Text>
    </View>
  )
}

export default PrivacyText

const styles = StyleSheet.create({
    text:{
        color:"#FFFFCC",
        fontSize: responsiveFontSize(2),
        padding: responsiveScreenWidth(4)
      }
})