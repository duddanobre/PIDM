import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MSG from './IMCMsg';

export default class Calculo extends Component{
    constructor(props) {
        super(props);

        this.state =  {imc:0};

        this.calcular = this.calcular.bind(this);
        
      }
    
        calcular(){
            if (!this.props.peso || !this.props.altura) {
              return null;
            }else{
              this.setState( { imc : this.props.peso / (this.props.altura * this.props.altura) } )
               
            }
        }
    
        render() {
            return (
              <View>
                <Text>IMC: {this.state.imc}</Text>
                <MSG imc= {this.state.imc} />
              </View>
            );
          }
}


