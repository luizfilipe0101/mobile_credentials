import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './views/homescreen/index';
import QR from './views/qrcode/index';

export default function App() {

  const Tab = createMaterialBottomTabNavigator();

  function Mytabs(){
    return (
    <Tab.Navigator
        initialRouteName="home"
        activeColor="#0D283D"
        barStyle={{ backgroundColor: '#30A6FF' }}
    >
        <Tab.Screen
        name="home"
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="qr"
        component={QR}
        options={{
            tabBarLabel: 'QRcode',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={color} size={26} />
            ),
        }}
        />
        <Tab.Screen
        name="search"
        component={Home}
        options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-search" color={color} size={26} />
            ),
        }}
        />
  </Tab.Navigator>
    );
  }

  return (
   <NavigationContainer>
        <Mytabs/>
   </NavigationContainer>
  );
}
