import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import IMCCalc from './IMCCalc';

export default class Formulario extends Component {
    constructor(props) {
    super(props);
    this.state = { peso: '' , altura: ''};
    this.Calc = React.createRef();
    }

   acaoCliqueBotao = () =>{
    this.Calc.current.calcular();
    
    }
    
    render() {
      return(
        <View style={styles.container}>
          <Text style={styles.headerText}>
              Calculadora IMC
          </Text>
          <TextInput
          style={styles.textInput}
          onChangeText={(peso) => this.setState({ peso })}
          placeholder="Digite o peso"
          onChange={this.calcular}
          />
          <TextInput
          style={styles.textInput}
          onChangeText={(altura) => this.setState({ altura })}
          placeholder="Digite a altura"
          onChange={this.calcular}
          />
          <View style={[styles.viewButton]}>
            <Button
            title="Calcular"
            onPress={this.acaoCliqueBotao}
            />
          </View>
          <IMCCalc altura= {this.state.altura} peso={this.state.peso} ref={this.Calc}/>
        </View>
      )
        
    }
}

const styles
= StyleSheet.create({
 container: {
 width: 500,
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 backgroundColor: "#e5e5e5"
 },
 headerText: {
 fontSize: 20,
 textAlign: "center",
 margin: 10,
 fontWeight: "bold"
 },
 textInput: {
 height: 45,
 width: "95%",
 borderColor: "gray",
 borderWidth: 2,
 paddingLeft: 20
 },
 viewButton: {
 width: "93%",
 margin: 15,
 backgroundColor: "red"

}
});