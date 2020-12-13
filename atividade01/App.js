import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho.js';
import Corpo from './components/Corpo.js';
import Disciplina from './components/Disciplina.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Corpo />
      <Cabecalho nome='Duda' curso='UI/UX Design' />
      <StatusBar style="auto" />
      <Disciplina disciplina="Grids" />
      <Disciplina disciplina="Layout" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
