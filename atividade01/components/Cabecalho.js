import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Cabealho extends Component {
    render() {
        return (
        <View style={{alignItems: 'center'}}>
        <Text>Olá {this.props.nome}, seu curso é:  {this.props.curso}. Bem vind@!</Text>
        </View>
        );
    }       
   }

   AppRegistry.registerComponent('ProjetoInicial', () => Cabealho );