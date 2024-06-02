import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"#000"}}>SignInScreen</Text>
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