import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import { getToken } from './src/services/user';

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const res = async () => {
      const token = await getToken();
      setToken(token??"")
    };

    res()
  }, []);

  return (
    <View>
      <Text>{token ? token : "no hay token"}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
