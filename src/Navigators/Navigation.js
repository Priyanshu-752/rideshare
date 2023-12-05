
import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screen/SignUpScreen';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import Bottom from './Bottom';



const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={'SplashScreen'} screenOptions={{headerShown:false}} >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Bottom" component={Bottom} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;