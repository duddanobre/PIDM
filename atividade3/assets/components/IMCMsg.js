import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Classificação extends Component{

    constructor(props){
      super(props);

    }

      render(){
        if(!this.props.imc){
          return null;
        }else  if (this.props.imc < 17) {
          return (<Text>Muito abaixo do peso</Text>);
        } else if (this.props.imc >= 17 && this.props.imc <= 18.49) {
          return (<Text>Abaixo do peso</Text>);
        } else if (this.props.imc >= 18.5 && this.props.imc <= 24.9) {
          return (<Text>Peso normal</Text>);
        } else if (this.props.imc >= 25 && this.props.imc <= 29.9) {
          return (<Text>Acima do peso</Text>);
        } else if (this.props.imc >= 30 && this.props.imc <= 34.9) {
          return (<Text>Obesidade I</Text>);
        } else if (this.props.imc >= 35 && this.props.imc <= 39.9) {
          return (<Text>Obesidade II</Text>);
        } else {
          return (<Text>Obesidade mórbida</Text>);
        } 

    }
    
}

 