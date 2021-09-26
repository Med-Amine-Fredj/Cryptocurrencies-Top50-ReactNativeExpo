import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainTabScreen from './screens/MainTabScreen';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
    <>
      <NavigationContainer theme={ {colors: {primary: 'rgb(255, 255, 255)',}}}>
        <MainTabScreen/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

