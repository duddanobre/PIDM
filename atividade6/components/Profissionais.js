import React, { Component } from 'react'
import { View, Text } from 'react-native'

import firestore from '@react-native-firebase/firestore'

export default class Profissionais extends Component {

    constructor(props) {
        super(props)
        this.getAluno()
        this.getProfissao()
        this.state = { users: '' , profissoes: ''}
       // this.state = {profissoes: ''}
    } 

    getAluno = async () => {
        const usersDocument = await firestore().collection('users')
            .doc('eMvd5F2kdTDutu9IX61A').get()
        this.setState({ users: usersDocument._data })
    }

    getProfissao = async () => {
        const profDocument = await firestore().collection('profissoes') 
            .doc('lNPDEl33bkpbuBn6UwfW').get()
            this.setState({profissoes: profDocument._data})
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', padding: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Nome: {this.state.users.nome}
                    
                </Text>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Profissão : {this.state.profissoes.cargo}
                </Text>
            </View>
        )
    }

}