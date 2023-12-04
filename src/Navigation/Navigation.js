import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screen/HomePage';
import SignupScreen from '../screen/SignUpScreen';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';


const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
