import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

const App = () => {
  return (
    <Header headerText={'Albums'} />
  )
}

Expo.registerRootComponent(App);
