//made by Ahmed Ali SP19-BCS-096

import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Game from './components/Game';
import Start from './components/Start';
import Finish from './components/Finish';

export default function App() {
  const [start, setStart] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempt] = useState(5);
  const [rounds, setRounds] = useState(1);

  if (start == 0) {
    return <Start func={() => setStart(start + 1)} />;
  } 
  else if (start == 1 && attempts != 0) {
    return (
      <Game
        guess={Math.floor(Math.random() * 100) + 1}
        func={() => setStart(start + 1)}
        score={score}
        scoreadd={() => setScore(score + 10)}
        hint={() => setScore(score - 2)}
        lose={() => setAttempt(attempts - 1)}
        attempts={attempts}
        ror={() => setRounds(rounds+1)}
      />
    );
  } 
  else if (start == 2 || attempts == 0) {
    return (
      <Finish
        func1={() => {setStart(0), setAttempt(5), setScore(0),  setRounds(1)}}
        func2={() => {setStart(1), setAttempt(5), setScore(0),  setRounds(1)}}
        score={score}
        rounds={rounds}
      />
    );
  }
}
