//made by Ahmed Ali SP19-BCS-096

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function Start({ func }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Welcome To The Game
      </Text>
      <TouchableOpacity
        style={{
          alignContent: 'center',
          backgroundColor: 'blue',
          padding: 30,
          borderRadius: 50,
          marginTop: 80,
        }}
        onPress={() => {
          func();
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Start Game
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    justifyContent: 'center',
  },
});
