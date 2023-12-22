import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Btn from '../utilities/Btn';
import {darkGreen} from '../utilities/Constants';
import Field from '../utilities/Field';
import { useNavigation } from '@react-navigation/native';

export default function Signup() {

  const navigation = useNavigation();

  const [Email, setEmail]= useState("");
  const [chEmail, setchEmail] = useState(true);
  const [errEmail, seterrEmail] = useState("");

  const [Password, setPassword]= useState("");
  const [chPassword, setchPassword] = useState(true);
  const [errPassword, seterrPassword] = useState("");

  const [rePassword, setrePassword]= useState("");
  const [chrePassword, setchrePassword] = useState(true);
  const [errRePassword, seterrRePassword] = useState("");

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
  

  const validatePassword =()=> {
    var passwordRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    var password = Password.trim();
    if (password == "" || password == undefined || password == null){
      seterrPassword("*Please enter password.");
      setchPassword(false);
      return false;
    }
    else if (!passwordRegex.test(password)) {
      seterrPassword("*Please enter valid password. ");
      setchPassword(false);
      return false;
    }
    else{
      seterrPassword("");
      setchPassword(true);
      return true;
    }
  }

  const validateRepassword=()=>{
    var rePass=rePassword.trim();
    if(rePass=="" || rePass==undefined || rePass==null){
      setchrePassword(false);
      seterrRePassword("*Please Enter password again");
      return false;
    }
    else if(rePass!=Password)
    {
      setchrePassword(false);
      seterrRePassword("*Password and Repassword must be same");
      return false;
    }
    else(rePass==Password)
    {
      setchrePassword(true);
      seterrRePassword("");
      return true;
    }
  }

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
            onChangeText={setEmail} 
            onEndEditing={validateEmail}
          />
         <View>{
          chEmail==true ? null:<Text style={{color:'red'}}>{errEmail}</Text>
          }</View>

          <Field 
          placeholder="Password" 
          secureTextEntry={true}
          onChangeText={setPassword}
          onEndEditing={validatePassword} />

          <View>{
          chPassword==true ? null:<Text style={{color:'red'}}>{errPassword}</Text>
          }</View>

          <Field placeholder="Confirm Password" 
          secureTextEntry={true} 
          onChangeText={setrePassword}
          onEndEditing={validateRepassword}/>
          <View>{
          chrePassword==true ? null:<Text style={{color:'red'}}>{errRePassword}</Text>
          }</View>
          
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Register"
            Press={()=>{
              if(validateEmail() && validatePassword() && validateRepassword())
              {
                alert('Account created');
                   navigation.navigate('LoginScreen');
              }
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
              onPress={() => navigation.navigate('LoginScreen')}>
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
