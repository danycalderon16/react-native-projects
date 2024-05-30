import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const InitialLaunchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.languageWrapper}>
        <TouchableOpacity>
          <Text>English (United States)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <Text>1</Text>
      </View>
      <View style={styles.footerWrapper}>
        <Text>1</Text>
      </View>
    </View>
  );
};

export default InitialLaunchScreen;

const styles = StyleSheet.create({
  container: {
    disply: 'flex',
    flex: 1,
  },
  languageWrapper: {
    disply: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
