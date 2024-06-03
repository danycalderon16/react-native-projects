import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

type RootStackParamList = {
  [x: string]: any;
  Home: undefined;
  SignIn: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
      title="Signing"
      onPress={()=> navigation.navigate("Signin")}/>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})