import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import AccountScreen from '../screen/AccountScreen';
import ServicesScreen from '../screen/ServicesScreen';
import HomePage from '../screen/HomePage';
import { darkGreen } from '../utilities/Constants';


//Screen names
const homeName = "HomePage";
const servicesName = "Services";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === servicesName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === accountName) {
              iconName = focused ? 'account' : 'account-outline';
            }

            // You can return any component that you like here!
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: darkGreen,
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={servicesName} component={ServicesScreen} />
        <Tab.Screen name={accountName} component={AccountScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNav;