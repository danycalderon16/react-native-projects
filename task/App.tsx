import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { getToken } from './src/services/user';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator} from '@react-navigation/stack';
import { NativeScreenContainer } from 'react-native-screens';
import SignInScreen from './src/screens/signing/SignInScreen';
import HomeScreen from './src/screens/home/HomeScreen';

type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <SafeAreaView>
      <NativeScreenContainer>
        <Stack.Navigator initialRouteName='SignIn'>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NativeScreenContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
