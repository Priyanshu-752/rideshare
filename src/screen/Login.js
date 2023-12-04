/* eslint-disable no-undef */
import React from 'react';
import {View, Text,  TouchableOpacity, Image} from 'react-native';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();
  return (
    <View style={{flex:1, alignItems: 'center'}}>
    <Text
      style={{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 120,
      }}>
      Welcome Back
    </Text>
    <View>
    <Image source={require('../Images/shape.png')} />
    </View>
    <View
      style={{

        height: 700,
        width: '100%',
        paddingTop: 50,
        alignItems: 'center',
      }}>
      
      <Field
        placeholder="Email"
        keyboardType={'email-address'}
      />
      <Field placeholder="Enter Password" secureTextEntry={true} />
      <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16, marginTop: 40}}>
              Forgot Password ?
            </Text>
            <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Do not have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
      </View>
    </View>
  </View>
  
  );
}
