
import * as React from 'react';
// import { View, Text } from 'react-native';
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


const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'} screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MobileNumber" component={MobileNumberScreen} />
        <Stack.Screen name="OtpScreen" component={OptScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Bottom" component={Bottom} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;