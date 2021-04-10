import React, { Component } from 'react';
import {Text, TextInput} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/AntDesign';
import {uid} from 'uid';

import Card from '../core/Card';
import CardItem from '../core/CardItem';

export default class AddUsuario extends Component{

    constructor(props){
        super(props);
        this.state = { name : ''};
    }
     
    addUser = () => {
        let id = uid(16);

        firestore()
            .collection('users')
            .doc(id)
            .set({
                uid: id,
                name: this.state.name,
            })
            .then(() => {
                this.props.navigation.goBack()
            });
    }
    render(){
    return(
        <Card>

                <CardItem style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#9932CC'}}>Adicionar Usuário</Text>
                </CardItem>

                <CardItem>
                    <TextInput
                        onChangeText={(name) => this.setState({ name })}
                        placeholder='Nome do usuário'
                        placeholderTextColor = '#d3d3d3'
    
                    />
                </CardItem>

                <CardItem style={{ justifyContent: 'space-around', alignContent: 'center' }}>
                    <Icon
                        name="adduser"
                        size={18}
                        color="#228B22"
                        onPress={
                            this.addUser
                        }
                    > <Text style={{ fontSize: 18, color: "#9932CC" }}>Cadastrar</Text> </Icon>

                    <Icon
                        
                        name="leftcircleo"
                        size={18}
                        color="#8B0000"
                        onPress={
                            () => this.props.navigation.goBack()
                        }
                    > <Text style={{ fontSize: 18, color: "#9932CC" }}>Cancelar</Text> </Icon>
                </CardItem>
            </Card>
            
        )
    }
}
