import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import AccountScreen from '../screen/AccountScreen';
import ServicesScreen from '../screen/ServicesScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
export default function Bottom() {
  return (
    <Tab.Navigator  screenOptions={{headerShown:false}}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color}) => (
            <MaterialIcons name="home" color={color} size={28} />
          ),
        }}/>
      <Tab.Screen name="Services" component={ServicesScreen} options={{
            tabBarLabel: 'Services',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="view-comfy" color={color} size={28} />
            ),
          }}/>
    <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color}) => (
            <MaterialIcons name="account-circle" color={color} size={28} />
          ),
        }}/>

  </Tab.Navigator>
  )
}