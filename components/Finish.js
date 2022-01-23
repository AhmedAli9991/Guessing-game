//made by Ahmed Ali SP19-BCS-096

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function Finsih({ func1,func2 ,score,rounds}) {
  return (
    <View style={styles.container}>
  <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Score: {score}
      </Text>
 <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Rounds: {rounds}
      </Text>
      <TouchableOpacity
        style={{
          alignContent: 'center',
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 50,
          marginTop: 80,
        }}
        onPress={() => {
          func1();
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Finsih
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignContent: 'center',
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 50,
          marginTop: 40,
        }}
        onPress={() => {
          func2();
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Play Again
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
