/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import React, { useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView, TextInput, Image, Alert } from 'react-native';
// import Field from '../utilities/Field';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { darkGreen } from '../utilities/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();
  function handleSubmit() {
    console.log(email, password);
    const userData = {
        email: email,
        password,
      };

    axios
    .post("http://192.168.29.137:3000/login-user", userData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Logged In Successfull');
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        navigation.navigate('Bottom');
      }
    });
  }
  // async function getData() {
  //   const data = await AsyncStorage.getItem('isLoggedIn');
    
  //   console.log(data, 'at app.jsx');
  
  // }
  // useEffect(()=>{
  //   getData();
  //   console.log("Hii");
  // },[])

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps={'always'}>
      <View >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../Images/shape.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Login</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#50C2C9"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChange={e => setEmail(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="lock" color="#50C2C9" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={e => setPassword(e.nativeEvent.text)}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              marginTop: 8,
              marginRight: 10,
            }}>
            <Text style={{color: darkGreen, fontWeight: '700'}}>
              Forgot Password
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handleSubmit()}>
            <View>
              <Text style={styles.textSign}>Log in</Text>
            </View>
          </TouchableOpacity>

          <View style={{padding: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
              ----Or Continue as----
            </Text>
          </View>
         
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
    
    textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    smallIcon: {
      marginRight: 10,
      fontSize: 24,
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: 260,
      width: 260,
      marginTop: 30,
    },
    text_footer: {
      color: darkGreen,
      fontSize: 18,
    },
    action: {
      flexDirection: 'row',
      paddingTop: 14,
      paddingBottom: 3,
      marginTop: 15,
  
      paddingHorizontal: 15,
  
      borderWidth: 1,
      borderColor: darkGreen,
      borderRadius: 50,
    },
    textInput: {
      flex: 1,
      marginTop: -12,
  
      color: 'black',
    },
    loginContainer: {
      backgroundColor: 'transparent',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    header: {
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
    },
    text_header: {
      color: darkGreen,
      fontWeight: 'bold',
      fontSize: 30,
    },
    button: {
      alignItems: 'center',
      marginTop: -20,
      textAlign: 'center',
      margin: 20,
    },
    inBut: {
      width: '70%',
      backgroundColor: darkGreen,
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 50,
    },
    inBut2: {
      backgroundColor: darkGreen,
      height: 65,
      width: 65,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomButton: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallIcon2: {
      fontSize: 40,
      // marginRight: 10,
    },
    bottomText: {
      color: 'black',
      fontSize: 12,
      fontWeight: '600',
      marginTop: 5,
    },
  })