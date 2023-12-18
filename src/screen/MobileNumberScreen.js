import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/native';
const MobileNumberScreen = () => {

    const navigation = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');


  return (
    <View style={styles.header}>
      <Text style={styles.text1}>Uber</Text>
      <Text style={styles.text2}> Enter your mobile number</Text>

      <PhoneInput
      defaultValue={phoneNumber}
      defaultCode='IN'
      layout='first'
      withShadow={true}
      autoFocus={true}
      containerStyle={styles.phoneNumberView}
      textContainerStyle={{ paddingVertical: 0}}
      onChangeFormattedText={text => {
        setPhoneNumber(text);
      }}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OtpScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MobileNumberScreen

const styles = StyleSheet.create({
    header:{
        height:200,
        color:'blue',
        alignItems:"flex-start"
    },
    text1:{
        fontSize:30,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:'center',
        marginLeft:20,
        marginTop:40,
    },
    text2:{
        fontSize:20,
        fontWeight:'500',
        color:'black',
        marginTop:40,
        marginLeft:20
    },
    phoneNumberView:{
        marginTop:20,
        marginLeft:40,
        borderRadius:10
    },
    button:{
        marginTop:40,
        marginLeft:100,
        backgroundColor: '#26D8D1',
        paddingBottom: 8,
        paddingHorizontal:60,
        borderRadius:8,
        marginBottom:-10,
        
    },
    buttonText:{
        color:"white",
        fontSize:22,
        fontWeight:"600",
        paddingTop:6
    }
})