/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}> 
      <SplashScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flex:1
  }
});

export default App;
