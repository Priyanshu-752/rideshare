import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Btn from '../utilities/Btn';
import { darkGreen } from '../utilities/Constants';
import Field from '../utilities/Field';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

export default function Signup() {

  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [rePassword, setrePassword] = useState("");
  const [chrePassword, setchrePassword] = useState(true);
  const [errRePassword, seterrRePassword] = useState("");
    
  const navigation = useNavigation();
  
  function handelSubmit() {
    const userData = {
      name: name,
      email,
      password,
    };
    if (nameVerify && emailVerify && passwordVerify ) {
      axios
        .post('http://192.168.29.137:3000/register', userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status == 'ok') {
            Alert.alert('Registered Successfull!!');
            navigation.navigate('LoginScreen');
          } 
          else {
            Alert.alert(JSON.stringify(res.data));
          }
        })
  
        .catch(e => console.log(e));
    } 
    else {
      Alert.alert('Fill mandatory details');
    }
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);
    
    if (nameVar.length > 1) {
      setNameVerify(true);
    }
  }
  
  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setEmail(emailVar);
      setEmailVerify(true);
    }
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }
  
  const validateRepassword = () => {
    var rePass = rePassword.trim();
    if (rePass == "" || rePass == undefined || rePass == null) {
      setchrePassword(false);
      seterrRePassword("*Please Enter password again");
      return false;
    }
    else if (rePass != password) {
      setchrePassword(false);
      seterrRePassword("*Password and Repassword must be same");
      return false;
    }
    else (rePass == password)
    {
      setchrePassword(true);
      seterrRePassword("");
      return true;
    }
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>

      <View style={{ alignItems: 'center', width: 400 }}>
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

          <Field
              placeholder="Name"
              onChange={e => handleName(e)}
              
            />
            {name.length < 1 ? null : nameVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Name should be more then 1 characters.
            </Text>
              )}
            
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
            onChange={e => handleEmail(e)}
          />
           {email.length < 1 ? null : emailVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Enter Proper Email Address
            </Text>
          )}

          <Field
            placeholder="Password"
            onChange={e => handlePassword(e)}
              secureTextEntry={showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {password.length<1?null:showPassword?
            <Feather
              name='eye-off'
              style={{ marginStart: 230, marginTop: -49 }}
              color={darkGreen}
              size={20} 
              />:<Feather
              name='eye'
              style={{ marginStart: 230, marginTop: -49 }}
              color={darkGreen}
              size={20} 
              />
            
          }
          </TouchableOpacity>
          {password.length < 1 ? null : passwordVerify ? null : (
            <Text
              style={{
                marginLeft: 20,
                color: 'red',
              }}>
              Uppercase, Lowercase, Number and 6 or more characters.
            </Text>
          )}


          <Field placeholder="Confirm Password"
            secureTextEntry={showPassword}
            onChangeText={setrePassword}
            onEndEditing={validateRepassword} />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {password.length<1?null:showPassword?
            <Feather
              name='eye-off'
              style={{ marginStart: 230, marginTop: -49 }}
              color={darkGreen}
              size={20} 
              />:<Feather
              name='eye'
              style={{ marginStart: 230, marginTop: -49 }}
              color={darkGreen}
              size={20} 
              />
            
          }
          </TouchableOpacity>
          <View>{
            chrePassword == true ? null : <Text style={{ color: 'red' }}>{errRePassword}</Text>
          }</View>

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Register"
            Press={() => handelSubmit()}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
