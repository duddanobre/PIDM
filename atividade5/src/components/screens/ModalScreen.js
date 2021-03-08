import React, { Component } from 'react'
import {Text, StyleSheet } from 'react-native'

import MyButton from '../MyButton';
import Card from '../card/Card';
import CardItem from '../card/CardItem';
import MusicList from '../MusicList';

export default class ModalScreen extends Component {
    render() {
        return (
            <Card>
                <CardItem style={styles.header}>
                    <Text style={styles.texto}>
                        {this.props.route.params.albumName}
                    </Text>  
                    <Text style={styles.texto}>
                        Lista de Músicas
                    </Text>     
                </CardItem>
                <CardItem style={styles.lista}>
                    <MusicList  albumTracks={this.props.route.params.albumTracks} />
                </CardItem>
                <CardItem style={styles.header}>
                    <MyButton 
                        onPress={() => this.props.navigation.goBack()}
                    >
                        Voltar
                    </MyButton>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6959CD',
    },
    texto:{
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 500
    },
    lista:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',

    }

})