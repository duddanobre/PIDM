import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Style from '.././assets/style.css';

const cidadesStr = [ 'Fortaleza', 'Sobral', 'Paracuru', 'Taíba'];

export default class Cidade extends Component {
  constructor(props){
      super(props);
      this.state = { 
        Fortaleza: 0, Sobral: 0, Paracuru: 0, Taíba: 0, maisVotado: 0, menosVotado: 0 }

  };

  componentDidUpdate(prevProps,prevState) {
    if(prevState.Fortaleza !== this.state.Fortaleza ||
       prevState.Sobral !== this.state.Sobral ||
       prevState.Paracuru !== this.state.Paracuru ||
       prevState.Taíba !== this.state.Taíba){
        
        let cidades = [this.state.Fortaleza, this.state.Sobral, this.state.Paracuru, this.state.Taíba]
        let localMaior = this.state.maisVotado
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] > localMaior)
                localMaior = cidades[i]
        }
        this.setState({maisVotado:localMaior})

        let localMenor = this.state.maisVotado
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] < localMenor)
                localMenor = cidades[i]
        }
        this.setState({menosVotado:localMenor})
    }
  }
    maisVotada(){
      let resultado = ''
      const cidades = [this.state.Fortaleza, this.state.Sobral, this.state.Paracuru, this.state.Taíba]
      for (let i = 0; i < cidades.length; i++) {
          if(cidades[i]===this.state.maisVotado) resultado+=cidadesStr[i]+' '
      }
      return resultado
  }

  menosVotada(){
    let resultado = ''
    const cidades = [this.state.Fortaleza, this.state.Sobral, this.state.Paracuru, this.state.Taíba]
    for (let i = 0; i < cidades.length; i++) {
        if(cidades[i]===this.state.menosVotado) resultado+=cidadesStr[i]+' '
    }
    return resultado
  }

  render() {
    return (
    <div className="container">
        <h3>Fortaleza: {this.state.Fortaleza}</h3>
        <h3>Sobral: {this.state.Sobral}</h3>
        <h3>Paracuru: {this.state.Paracuru}</h3>
        <h3>Taíba: {this.state.Taíba}</h3>
        <h3>Mais Votado: {this.maisVotada()}</h3>
        <h3>Menos Votado: {this.menosVotada()} </h3>
        <button onClick={() => this.setState({Fortaleza:this.state.Fortaleza+1})} style={{backgroundColor: 'royalblue'}}>
          Fortaleza</button>
        <button onClick={() => this.setState({Sobral:this.state.Sobral+1})} style={{backgroundColor: 'royalblue'}}>
          Sobral</button>
        <button onClick={() => this.setState({Paracuru:this.state.Paracuru+1})} style={{backgroundColor: 'royalblue'}}>
          Paracuru</button>
        <button onClick={() => this.setState({Taíba:this.state.Taíba+1})} style={{backgroundColor: 'royalblue'}}>
          Taíba</button>
      
    </div>
    );
  }

    
}

 
 