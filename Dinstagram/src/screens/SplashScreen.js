import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.from}>from</Text>
        <View style={styles.logoTextWrapper}>
          <Image
            source={require('../assets/images/facebookTextLogo.png')}
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoTextWrapper: {
    width: '45%',
    height: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  logo: {
    flex: 1,
    width: undefined,
  },
  from: {
    color: 'gray',
    marginBottom: 15,
  },
});
