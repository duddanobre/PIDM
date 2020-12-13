import React from 'react';
import { StyleSheet, View} from 'react-native';
import Cidade from './components/cidades.js';

export default function App() {
    return (
        <View style={styles.container}>
          <Cidade/> 
    
        </View>
      
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center'
  },
});
