/* eslint-disable no-undef */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Btn from '../utilities/Btn';
import { darkGreen } from '../utilities/Constants';
import Field from '../utilities/Field';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.V1}>
      <Text style={styles.text1}>Welcome Back</Text>
      <View>
        <Image source={require('../Images/shape.png')} />
      </View>
      <View style={styles.V2}>
        <Field placeholder="Email" keyboardType={'email-address'} />
        <Field placeholder="Enter Password" secureTextEntry={true} />
        <Text style={styles.text2}>Forgot Password ?</Text>
        <Btn
          textColor="white"
          bgColor={darkGreen}
          btnLabel="Login"
          Press={() => alert('Logged In')}
        />
        <View style={styles.V3}>
          <Text style={styles.text3}>Do not have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  V1: { flex: 1,
     alignItems: 'center'
     },

  V2: {
    height: 700,
    width: '100%',
    paddingTop: 50,
    alignItems: 'center',
  },

  V3: { 
    display: 'flex',
     flexDirection: 'row',
      justifyContent: 'center' 
    },

  text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 120,
  },

  text2: { color: darkGreen,
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 40
       },
       
  text3: { fontSize: 16,
     fontWeight: 'bold' 
    },
});
