import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IMCApp from './assets/components/IMCApp'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calcule meu IMC</Text>
      <StatusBar style="auto" />
      <IMCApp />
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
