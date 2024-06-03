import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


type RootStackParamList = {
  [x: string]: any;
  Home: undefined;
  SignIn: undefined;
};

const SignInScreen = () => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
      <Text>Signing</Text>
      <Button
      title="Home"
      onPress={()=> navigation.navigate("Home")}/>

    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    flex:1,
    justifyContent:"center"
  }
})