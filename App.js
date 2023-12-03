import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screen/HomePage';
import Splash from './src/screen/Splash';
import Login from './src/screen/Login';
import Signup from './src/screen/SignUp';

const App = () => {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;


