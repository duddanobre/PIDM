import React, { Component } from 'react'
import { View, Text } from 'react-native'

import MyButton from '../MyButton';
import Card from '../card/Card';
import CardItem from '../card/CardItem';
import MusicList from '../MusicList';

export default class ModalScreen extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={{fontSize:30}}>
                        {this.props.route.params.albumName}
                    </Text>  
                    <Text style={{fontSize:30}}>
                        Lista de Músicas
                    </Text>     
                </CardItem>
                <CardItem>
                    <MusicList  albumTracks={this.props.route.params.albumTracks} />
                </CardItem>
                <CardItem>
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