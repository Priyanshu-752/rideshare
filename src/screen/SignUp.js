import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {

  const navigation = useNavigation();

  return (
   
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 120,
          }}>
          Welcome to Onboard !
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'medium',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Create a new account
        </Text>
        <View
          style={{
  
            height: 700,
            width: '100%',
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Full Name" />
          
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Register"
            Press={() => {
              alert('Account created');
              ('Login');
            
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}
