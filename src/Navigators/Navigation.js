import React , {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screen/SignUpScreen';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import Bottom from './Bottom';
import MobileNumberScreen from '../screen/MobileNumberScreen';
import OptScreen from '../screen/OtpScreen';
import EditProfileScreen from '../screen/EditProfileScreen';
import MapScreen from '../screen/MapScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{ headerShown: false }}>
  <Stack.Screen name="SplashScreen" component={SplashScreen} />
  <Stack.Screen name="MobileNumber" component={MobileNumberScreen} />
  <Stack.Screen name="OtpScreen" component={OptScreen} />
  <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
  <Stack.Screen name="LoginScreen" component={LoginScreen} />
  <Stack.Screen name="Bottom" component={Bottom} />
  <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />  
  <Stack.Screen name="MapScreen" component={MapScreen}/>
  <Stack.Screen name="LogNav" component={LogNav}/>

</Stack.Navigator>
</NavigationContainer>
)
};

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function getData(){
  const data = await AsyncStorage.getItem('isLoggedIn');
  console.log(data, "at Navigation.js");
  setIsLoggedIn(data);
  }
  
  useEffect(() =>{
  getData();
  
  });

  return (
    <NavigationContainer>
       {isLoggedIn? <Bottom/>:<LogNav/>}
    </NavigationContainer>
  );
}

export default Navigation;