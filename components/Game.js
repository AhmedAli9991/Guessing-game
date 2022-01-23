//made by Ahmed Ali SP19-BCS-096

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function Game({
  guess,
  func,
  score,
  scoreadd,
  hint,
  lose,
  attempts,
  ror
}) {
  const [input, setInput] = useState('');
  const [show, setshow] = useState(-1);

  const guessCheck = () => {
    if (input == guess) {
      scoreadd();
      ror()
      setInput('');
    } else {
      lose();
      setInput('');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setshow(
            Math.floor(Math.random() * (guess + 10 - guess - 10 + 1)) +
              guess -
              10
          );
          hint();
        }}>
        {show == -1 ? (
          <Text style={styles.para}>Hint(press here for hint): ????</Text>
        ) : (
          <Text style={styles.para}>Hint: {show}</Text>
        )}
      </TouchableOpacity>

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
          marginBottom: 20,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Attempts Remaining: {attempts}
      </Text>
      {input == '' ? (
        <Text
          style={{
            marginBottom: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Please Enter Value
        </Text>
      ) : (
        <Text
          style={{
            marginBottom: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {input}
        </Text>
      )}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 1)}>
          <Text style={styles.para}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 2)}>
          <Text style={styles.para}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 3)}>
          <Text style={styles.para}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 4)}>
          <Text style={styles.para}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 5)}>
          <Text style={styles.para}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 6)}>
          <Text style={styles.para}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 7)}>
          <Text style={styles.para}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 8)}>
          <Text style={styles.para}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setInput(input + 9)}>
          <Text style={styles.para}>9</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{
            alignContent: 'center',
            backgroundColor: 'blue',
            padding: 30,
            borderRadius: 50,
            width: 80,
            marginLeft: 85,
          }}
          onPress={() => setInput(input + 0)}>
          <Text style={styles.para}>0</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignContent: 'center',
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 50,
          marginTop: 20,
        }}
        onPress={() => {
          guessCheck();
        }}>
        <Text style={styles.para}>Guess</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignContent: 'center',
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 50,
          marginTop: 10,
        }}
        onPress={() => {
          func();
        }}>
        <Text style={styles.para}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    backgroundColor: 'blue',
    padding: 30,
    borderRadius: 50,
    width: 80,
  },

  container: {
    marginTop: 100,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  para: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
