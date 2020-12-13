import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Corpo extends Component {
 render() {
  
 return (
 //<Image source={{pic}} style={{width: 193, height: 110}}/>
 <Image source = {{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{width: 193, height: 180}} />
 );
 }
}
AppRegistry.registerComponent('ProjetoInicial', () => Corpo);



