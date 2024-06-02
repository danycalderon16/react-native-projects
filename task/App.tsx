import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { getToken } from './src/services/user';
import SignInScreen from './src/screens/SignInScreen';

interface Token {
  token: string|null;
}

const App = () => {

  return (
      <SignInScreen/>
  );
};

export default App;

const styles = StyleSheet.create({});
