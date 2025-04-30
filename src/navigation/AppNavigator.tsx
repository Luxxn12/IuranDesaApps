import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import RegistrasiScreen from '../screens/RegistrasiScreen';
import DetailIuran from '../screens/Beranda/DetailIuran';
import DetailRiwayat from '../screens/Riwayat/DetailRiwayat';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
  Notification: undefined;
  Profile: undefined;
  Daftar: undefined;
  DetailIuran: undefined;
  DetailRiwayat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Daftar" component={RegistrasiScreen} />
        <Stack.Screen
          name="DetailIuran"
          component={DetailIuran}
          options={({route}) => ({
            headerShown: true,
            title: 'Detail Iuran',
          })}
        />
        <Stack.Screen
          name="DetailRiwayat"
          component={DetailRiwayat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
