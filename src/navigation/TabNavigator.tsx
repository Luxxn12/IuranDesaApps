import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Beranda/BerandaScreen';
import RiwayatScreen from '../screens/Riwayat/RiwayatScreen';
import {Image, Platform, StyleSheet, Text} from 'react-native';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
const IconActiveBeranda = require('../assets/ActiveBeranda.webp');
const IconNonActiveBeranda = require('../assets/NonActiveBeranda.webp');
const IconActiveRiwayat = require('../assets/ActiveRiwayat.webp');
const IconNonActiveRiwayat = require('../assets/NonActiveRiwayat.webp');
const IconActiveNotif = require('../assets/ActiveNotif.webp');
const IconNonActiveNotif = require('../assets/NonActiveNotif.webp');
const IconActiveProfile = require('../assets/ActiveProfile.webp');
const IconNonActiveProfile = require('../assets/NonActiveProfile.webp');

export type TabParamList = {
  Home: undefined;
  Riwayat: undefined;
  Notifikasi: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      safeAreaInsets={{bottom: 0}}
      screenOptions={({route}: any) => ({
        tabBarStyle: [
          {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#F4F4F4',
            height: 100,
            paddingBottom: 20,
            shadowColor: '#FFFFFF',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,
            borderTopWidth: 1,
          },
        ],
        tabBarShadowVisible: false,
        tabBarLabel: ({focused}) => {
          return focused ? (
            <Text
              style={{
                color: '#0B6E4F',
                fontSize: 11,
                fontWeight: '500',
              }}>
              {route.name}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 11,
                color: '#9CA3AF',
              }}>
              {route.name}
            </Text>
          );
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          color: '#000000',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={
                focused
                  ? {width: 20, height: 20, resizeMode: 'stretch'}
                  : Styles.image
              }
              source={focused ? IconActiveBeranda : IconNonActiveBeranda}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={RiwayatScreen}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={
                focused
                  ? {width: 20, height: 20, resizeMode: 'stretch'}
                  : Styles.image
              }
              source={focused ? IconActiveRiwayat : IconNonActiveRiwayat}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={
                focused
                  ? {width: 20, height: 20, resizeMode: 'stretch'}
                  : Styles.image
              }
              source={focused ? IconActiveNotif : IconNonActiveNotif}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}: any) => (
            <Image
              style={
                focused
                  ? {width: 20, height: 20, resizeMode: 'stretch'}
                  : Styles.image
              }
              source={focused ? IconActiveProfile : IconNonActiveProfile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const Styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    padding: 'auto',
  },
});

export default TabNavigator;
