/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Btn from '../utilities/Btn';
import { darkGreen } from '../utilities/Constants';
import Field from '../utilities/Field';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [Email, setEmail] = useState("");
  const [chEmail, setchEmail] = useState(true);
  const [errEmail, seterrEmail] = useState("");

  const [Password, setPassword] = useState("");
  const [chPassword, setchPassword] = useState(true);
  const [errPassword, seterrPassword] = useState("");

  const validateEmail = () => {
    var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Improved email regex
    var email = Email.trim(); // Corrected variable name to 'email' (lowercase)

    if (email === "" || email === undefined || email === null) {
      seterrEmail("*Please enter the email.");
      setchEmail(false);
      return false;
    } else if (!emailRegex.test(email)) { // Corrected method to 'test' instead of 'text'
      seterrEmail("*Please enter a valid Email Address. ");
      setchEmail(false);
      return false;
    } else {
      seterrEmail("");
      setchEmail(true);
      return true;
    }
  };


  const validatePassword = () => {
    var passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    var password = Password.trim();
    if (password == "" || password == undefined || password == null) {
      seterrPassword("*Please enter password.");
      setchPassword(false);
      return false;
    }
    else if (!passwordRegex.test(password)) {
      seterrPassword("*Please enter valid password. ");
      setchPassword(false);
      return false;
    }
    else {
      seterrPassword("");
      setchPassword(true);
      return true;
    }
  }

  return (
    <View style={styles.V1}>
      <Text style={styles.text1}>Welcome Back</Text>
      {/* <View>
        <Image source={require('../Images/shape.png')} />
      </View> */}
      <View style={styles.V2}>
        <Field placeholder="Email" keyboardType={'email-address'}
          onChangeText={setEmail} onEndEditing={validateEmail} />

        <View >{
          chEmail == true ? null : <Text style={{ color: 'red' }}>{errEmail}</Text>
        }</View>

        <Field placeholder="Enter Password" secureTextEntry={true}
          onChangeText={setPassword} onEndEditing={validatePassword} />

        <View>{
          chPassword == true ? null : <Text style={{ color: 'red' }}>{errPassword}</Text>
        }</View>

        <Text style={styles.text2} >Forgot Password ?</Text>

        <Btn
          textColor="white"
          bgColor={darkGreen}
          btnLabel="Login"
          Press={() => navigation.navigate('Bottom')}
        // Press={()=>{
        //   if(validateEmail() && validatePassword)
        //   {
        //     navigation.dispatch(
        //       StackActions.replace('Bottom')
        //     );
        //   }
        // }}
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
  V1: {
    flex: 1,
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

  text2: {
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 40
  },

  text3: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});
